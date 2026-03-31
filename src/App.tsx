import React, { useState } from 'react';
import { roadmapData, Topic, TableInfo, VisInfo } from './data';
import { QuizArea } from './Quiz';
import { Terminal, BookOpen, ArrowRight, Lightbulb, Code2, Plus, ArrowDown, ChevronRight, CheckCircle2, Layers, Database, Gamepad2 } from 'lucide-react';

// Component untuk merender tabel visualisasi
const TableVisualizer = ({ table }: { table: TableInfo }) => {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
      <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 font-bold text-slate-700 text-sm flex items-center gap-2">
        <Database className="w-4 h-4 text-slate-400" />
        {table.name}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              {table.columns.map((col, i) => (
                <th key={i} className="px-4 py-3 font-semibold whitespace-nowrap">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rIdx) => {
              const isHighlightedRow = table.highlightRows?.includes(rIdx);
              const isStrikethrough = table.strikethroughRows?.includes(rIdx);
              
              return (
                <tr 
                  key={rIdx} 
                  className={`border-b border-slate-100 last:border-0 
                    ${isHighlightedRow ? 'bg-blue-50/50' : 'hover:bg-slate-50'}
                    ${isStrikethrough ? 'opacity-50' : ''}
                  `}
                >
                  {row.map((cell, cIdx) => {
                    const cellHighlight = table.highlightCells?.find(c => c.row === rIdx && c.col === cIdx);
                    return (
                      <td 
                        key={cIdx} 
                        className={`px-4 py-2.5 transition-colors relative
                          ${cellHighlight ? cellHighlight.color : 'text-slate-700'}
                        `}
                      >
                        {isStrikethrough && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-2">
                            <div className="h-[2px] w-full bg-red-500 rounded-full"></div>
                          </div>
                        )}
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const VisualizationArea = ({ data }: { data: VisInfo }) => {
  return (
    <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-indigo-500" />
        Visualisasi Cara Kerjanya
      </h3>
      
      <div className="flex flex-col items-center justify-center gap-6">
        
        {/* Tipe Single (Tabel Biasa atau Relasi) */}
        {data.type === 'single' && (
          <div className="flex flex-col md:flex-row gap-6 w-full items-start justify-center">
            {data.tables.map((tbl, idx) => (
              <div key={idx} className="w-full md:w-auto flex-1 max-w-md">
                <TableVisualizer table={tbl} />
              </div>
            ))}
          </div>
        )}

        {/* Tipe Before-After */}
        {data.type === 'before-after' && (
          <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
            <div className="w-full md:w-auto flex-1 max-w-sm">
              <TableVisualizer table={data.tables[0]} />
            </div>
            
            <div className="bg-indigo-50 text-indigo-600 p-3 rounded-full flex-shrink-0 my-2 md:my-0 shadow-sm border border-indigo-100">
              <ArrowRight className="w-6 h-6 hidden md:block" />
              <ArrowDown className="w-6 h-6 md:hidden" />
            </div>

            {data.resultTable && (
              <div className="w-full md:w-auto flex-1 max-w-sm">
                <TableVisualizer table={data.resultTable} />
              </div>
            )}
          </div>
        )}

        {/* Tipe JOIN */}
        {data.type === 'join' && (
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
              <div className="w-full md:w-auto flex-1 max-w-sm">
                <TableVisualizer table={data.tables[0]} />
              </div>
              
              <div className="bg-purple-50 text-purple-600 p-2 rounded-full flex-shrink-0 font-bold border border-purple-100">
                <Plus className="w-5 h-5" />
              </div>

              <div className="w-full md:w-auto flex-1 max-w-sm">
                <TableVisualizer table={data.tables[1]} />
              </div>
            </div>

            <div className="bg-indigo-50 text-indigo-600 p-2 rounded-full shadow-sm border border-indigo-100">
              <ArrowDown className="w-5 h-5" />
            </div>

            {data.resultTable && (
              <div className="w-full max-w-xl">
                <TableVisualizer table={data.resultTable} />
              </div>
            )}
          </div>
        )}

      </div>

      {data.explanation && (
        <div className="mt-6 p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
          <p className="text-indigo-900 text-sm leading-relaxed">{data.explanation}</p>
        </div>
      )}
    </div>
  );
};


function App() {
  const [activeTopic, setActiveTopic] = useState<Topic>(roadmapData[0]);
  const [viewMode, setViewMode] = useState<'materi' | 'quiz'>('materi');

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      {/* Sidebar / Roadmap */}
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full shadow-sm z-10 overflow-y-auto">
        <div className="p-6 border-b border-slate-200 bg-indigo-600 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Database className="w-8 h-8" />
            <h1 className="text-2xl font-bold tracking-tight">SQL SMK</h1>
          </div>
          <p className="text-indigo-100 text-sm">Paham Database tanpa Pusing!</p>
        </div>
        
        <div className="p-4 flex-1">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Roadmap Belajar</h2>
          <div className="space-y-2">
            {roadmapData.map((topic) => {
              const isMainActive = activeTopic.id === topic.id;
              const isSubActive = topic.subTopics?.some(sub => sub.id === activeTopic.id);
              const isExpanded = isMainActive || isSubActive;

              return (
                <div key={topic.id}>
                  <button
                    onClick={() => {
                      setActiveTopic(topic);
                      setViewMode('materi');
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-200 ${
                      isMainActive
                        ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm border border-indigo-100'
                        : isSubActive 
                          ? 'bg-slate-50 text-indigo-600 font-medium'
                          : 'hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      isMainActive ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <topic.icon className="w-5 h-5" />
                    </div>
                    <span className="flex-1">{topic.title}</span>
                    {isMainActive && <ChevronRight className="w-4 h-4 text-indigo-500" />}
                  </button>
                  
                  {/* Sub Topics */}
                  {topic.subTopics && isExpanded && (
                    <div className="ml-6 mt-2 pl-4 border-l-2 border-indigo-100 space-y-1">
                      {topic.subTopics.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            setActiveTopic(sub);
                            setViewMode('materi');
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm flex items-center gap-3 transition-all ${
                            activeTopic.id === sub.id 
                              ? 'text-indigo-700 font-semibold bg-indigo-50/50 border border-indigo-50 shadow-sm' 
                              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <sub.icon className={`w-4 h-4 ${activeTopic.id === sub.id ? 'text-indigo-500' : 'text-slate-400'}`} />
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto bg-slate-50/50">
        <div className="max-w-5xl w-full mx-auto p-8 py-12">
          
          {/* Header Area */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl shadow-sm border border-indigo-200">
                <activeTopic.icon className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">{activeTopic.title}</h1>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  {viewMode === 'materi' ? (
                    <><BookOpen className="w-4 h-4" /> <span>Materi Pembelajaran SQL</span></>
                  ) : (
                    <><Gamepad2 className="w-4 h-4" /> <span>Kuis Evaluasi Materi</span></>
                  )}
                </div>
              </div>
            </div>
            
            {/* Toggle Button */}
            <div className="flex bg-slate-200/50 p-1 rounded-xl w-fit border border-slate-200">
              <button
                onClick={() => setViewMode('materi')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${
                  viewMode === 'materi' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <BookOpen className="w-4 h-4" /> Materi
              </button>
              <button
                onClick={() => setViewMode('quiz')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${
                  viewMode === 'quiz' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <Gamepad2 className="w-4 h-4" /> Uji Pemahaman
              </button>
            </div>
          </div>

          {viewMode === 'quiz' ? (
            <QuizArea topicId={activeTopic.id} onBack={() => setViewMode('materi')} />
          ) : (
            <>
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                {/* Description Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 md:col-span-2 lg:col-span-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-500" />
                    Konsep Dasar
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base mb-4">
                    {activeTopic.description}
                  </p>
                  
                  {/* Detailed Descriptions (Bullets) */}
                  {activeTopic.detailedDescription && (
                    <ul className="space-y-3 mt-4">
                      {activeTopic.detailedDescription.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Analogy Card (SMK) */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-sm border border-amber-100 md:col-span-2 lg:col-span-1 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    Perumpamaan
                  </h3>
                  <div className="bg-white/60 p-4 rounded-xl border border-amber-200/50">
                    <p className="text-amber-900 leading-relaxed text-base font-medium italic">
                      "{activeTopic.analogy}"
                    </p>
                  </div>
                </div>
              </div>

              {/* SQL Example Area */}
              {activeTopic.sqlExample && (
                <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 mb-8">
                  <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300 text-sm font-mono font-semibold">Contoh Kode SQL</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="font-mono text-sm text-emerald-400">
                      <code>{activeTopic.sqlExample}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Visualization Area */}
              {activeTopic.visualization && (
                <VisualizationArea data={activeTopic.visualization} />
              )}

              {/* Subtopics Teaser (if any and if we are on parent) */}
              {activeTopic.subTopics && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-indigo-500" />
                    Materi Lanjutan di Bagian Ini:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeTopic.subTopics.map(sub => (
                      <button 
                        key={sub.id}
                        onClick={() => {
                          setActiveTopic(sub);
                          setViewMode('materi');
                        }}
                        className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all text-left group flex flex-col h-full"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-100 group-hover:scale-110 transition-transform">
                            <sub.icon className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">{sub.title}</span>
                        </div>
                        <p className="text-sm text-slate-500 line-clamp-2 mt-auto">{sub.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Go to Quiz Banner (for leaf topics) */}
              {!activeTopic.subTopics && (
                <div className="mt-10 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-indigo-900 mb-1">Sudah Paham Materinya?</h3>
                    <p className="text-indigo-700 text-sm">Yuk uji pemahamanmu tentang {activeTopic.title} dengan kuis singkat.</p>
                  </div>
                  <button 
                    onClick={() => setViewMode('quiz')}
                    className="flex-shrink-0 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-sm flex items-center gap-2"
                  >
                    <Gamepad2 className="w-5 h-5" /> Mulai Kuis
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
