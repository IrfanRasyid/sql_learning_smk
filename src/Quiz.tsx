import React, { useState } from 'react';
import { QuizQuestion, quizData } from './quizData';
import { roadmapData } from './data';
import { CheckCircle2, XCircle, ChevronRight, Trophy, RefreshCcw, ArrowLeft, BookOpen, Lightbulb } from 'lucide-react';

interface QuizProps {
  topicId: string;
  onBack: () => void;
}

export const QuizArea: React.FC<QuizProps> = ({ topicId, onBack }) => {
  // Ambil pertanyaan yang sesuai dengan topik yang dipilih
  // Jika topicId adalah parent (misal DDL), ambil semua quiz dari parent dan child-nya
  const relevantQuestions = quizData.filter(q => {
    if (q.topicId === topicId) return true;
    
    // Cek apakah topicId ini adalah child dari topic yang dipilih
    const parentTopic = roadmapData.find(t => t.id === topicId);
    if (parentTopic && parentTopic.subTopics) {
      return parentTopic.subTopics.some(sub => sub.id === q.topicId);
    }
    
    // Cek apakah topicId yg dipilih adalah child, dan q.topicId adalah parent-nya (kita izinkan quiz parent tampil di child)
    // Atau lebih baik spesifik saja:
    return false;
  });

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (relevantQuestions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-slate-100 p-6 rounded-full mb-6">
          <Trophy className="w-12 h-12 text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Kuis Belum Tersedia</h2>
        <p className="text-slate-500 mb-8">Belum ada pertanyaan kuis untuk materi ini. Silakan pelajari materi lain!</p>
        <button 
          onClick={onBack}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Materi
        </button>
      </div>
    );
  }

  const currentQ = relevantQuestions[currentQuestionIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === currentQ.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < relevantQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    const percentage = Math.round((score / relevantQuestions.length) * 100);
    let message = "";
    if (percentage === 100) message = "Sempurna! Kamu udah kayak master database!";
    else if (percentage >= 70) message = "Bagus banget! Sedikit lagi jadi sepuh SQL.";
    else message = "Tetap semangat! Coba baca lagi perumpamaannya ya biar makin paham.";

    return (
      <div className="max-w-2xl mx-auto mt-10">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Materi
        </button>
        
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-200 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-100 text-indigo-600 mb-6">
            <Trophy className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Hasil Kuis</h2>
          <p className="text-slate-500 mb-8">{message}</p>
          
          <div className="flex justify-center gap-8 mb-10">
            <div className="text-center">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Skor Akhir</p>
              <p className={`text-4xl font-black ${percentage >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>
                {percentage}%
              </p>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div className="text-center">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Benar</p>
              <p className="text-4xl font-black text-slate-800">
                {score} <span className="text-xl text-slate-400 font-medium">/ {relevantQuestions.length}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRetry}
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-5 h-5" /> Coba Lagi
            </button>
            <button 
              onClick={onBack}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-sm shadow-indigo-200"
            >
              <BookOpen className="w-5 h-5" /> Lanjut Belajar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Materi
        </button>
        <div className="text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
          Pertanyaan {currentQuestionIdx + 1} dari {relevantQuestions.length}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
          {currentQ.question}
        </h3>

        <div className="space-y-3 mb-8">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === currentQ.correctAnswerIndex;
            
            let btnClass = "border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50";
            
            if (isAnswered) {
              if (isCorrect) {
                btnClass = "border-emerald-500 bg-emerald-50 text-emerald-800 font-medium ring-1 ring-emerald-500";
              } else if (isSelected && !isCorrect) {
                btnClass = "border-red-300 bg-red-50 text-red-700";
              } else {
                btnClass = "border-slate-100 text-slate-400 bg-slate-50 opacity-50";
              }
            } else if (isSelected) {
              btnClass = "border-indigo-500 ring-1 ring-indigo-500 bg-indigo-50 text-indigo-800";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group ${btnClass}`}
              >
                <span className="text-lg">{option}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`p-5 rounded-xl mb-8 flex items-start gap-4 ${
            selectedAnswer === currentQ.correctAnswerIndex 
              ? 'bg-emerald-50 border border-emerald-100' 
              : 'bg-amber-50 border border-amber-100'
          }`}>
            <Lightbulb className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
              selectedAnswer === currentQ.correctAnswerIndex ? 'text-emerald-500' : 'text-amber-500'
            }`} />
            <div>
              <p className={`font-bold mb-1 ${
                selectedAnswer === currentQ.correctAnswerIndex ? 'text-emerald-800' : 'text-amber-800'
              }`}>
                {selectedAnswer === currentQ.correctAnswerIndex ? 'Jawaban Kamu Benar!' : 'Kurang Tepat!'}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          </div>
        )}

        {isAnswered && (
          <div className="flex justify-end border-t border-slate-100 pt-6">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors flex items-center gap-2 shadow-sm shadow-indigo-200"
            >
              {currentQuestionIdx < relevantQuestions.length - 1 ? 'Pertanyaan Selanjutnya' : 'Lihat Hasil'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
