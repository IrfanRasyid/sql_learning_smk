export interface QuizQuestion {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const quizData: QuizQuestion[] = [
  // Relational Database
  {
    id: "q_rdbms_1",
    topicId: "rdbms",
    question: "Apa fungsi utama dari Primary Key dalam sebuah tabel Relational Database?",
    options: [
      "Menghubungkan dua tabel yang berbeda",
      "Mewarnai baris tabel agar lebih mudah dibaca",
      "Memastikan setiap baris data memiliki identitas yang unik dan berbeda",
      "Menyimpan data teks yang panjang"
    ],
    correctAnswerIndex: 2,
    explanation: "Primary Key berfungsi sebagai identitas unik untuk setiap baris, mirip seperti NISN siswa yang tidak boleh sama antara satu siswa dengan siswa lainnya."
  },
  {
    id: "q_rdbms_2",
    topicId: "rdbms",
    question: "Jika tabel Siswa terhubung ke tabel Jurusan, kolom apa yang biasanya digunakan di tabel Siswa sebagai penghubung?",
    options: [
      "Primary Key",
      "Foreign Key",
      "Super Key",
      "Local Key"
    ],
    correctAnswerIndex: 1,
    explanation: "Foreign Key (Kunci Tamu) digunakan untuk menunjuk ke Primary Key di tabel lain (misal: id_jurusan di tabel Siswa menunjuk ke id_jurusan di tabel Jurusan)."
  },

  // DDL
  {
    id: "q_ddl_1",
    topicId: "ddl",
    question: "Perintah DDL apa yang digunakan untuk menambah kolom baru bernama 'alamat' ke dalam tabel yang sudah ada?",
    options: [
      "CREATE TABLE alamat",
      "INSERT INTO tabel ADD alamat",
      "ALTER TABLE nama_tabel ADD alamat",
      "UPDATE tabel SET alamat"
    ],
    correctAnswerIndex: 2,
    explanation: "ALTER TABLE digunakan untuk merombak atau memodifikasi struktur tabel yang sudah jadi, seperti menambah kolom (ADD)."
  },
  {
    id: "q_ddl_2",
    topicId: "ddl",
    question: "Apa perbedaan utama antara DROP dan TRUNCATE?",
    options: [
      "DROP menghapus data saja, TRUNCATE menghapus tabel sepenuhnya",
      "DROP menghapus tabel beserta strukturnya, TRUNCATE hanya mengosongkan datanya",
      "DROP digunakan untuk database, TRUNCATE digunakan untuk tabel",
      "Tidak ada bedanya, keduanya menghapus tabel"
    ],
    correctAnswerIndex: 1,
    explanation: "DROP ibarat menggusur gedung sekolah (struktur hancur), sedangkan TRUNCATE ibarat mengeluarkan semua murid dari kelas (struktur kelas tetap ada, hanya kosong)."
  },

  // DML
  {
    id: "q_dml_1",
    topicId: "dml",
    question: "Jika kamu lupa menambahkan klausa WHERE saat menjalankan perintah UPDATE, apa yang akan terjadi?",
    options: [
      "Akan muncul pesan error",
      "Hanya baris pertama yang akan diubah",
      "Hanya baris terakhir yang akan diubah",
      "SEMUA baris dalam tabel tersebut akan ikut berubah"
    ],
    correctAnswerIndex: 3,
    explanation: "Tanpa klausa WHERE sebagai filter/kondisi, perintah UPDATE (dan juga DELETE) akan dieksekusi ke seluruh baris yang ada di tabel. Sangat berbahaya!"
  },
  {
    id: "q_dml_2",
    topicId: "dml",
    question: "Perintah mana yang benar untuk mengambil nama dan jurusan dari tabel Siswa?",
    options: [
      "GET nama, jurusan FROM Siswa",
      "SELECT nama, jurusan FROM Siswa",
      "TAKE nama, jurusan IN Siswa",
      "READ nama, jurusan FROM Siswa"
    ],
    correctAnswerIndex: 1,
    explanation: "SELECT adalah perintah standar DML untuk membaca atau mengambil data dari database."
  },

  // Constraints
  {
    id: "q_cons_1",
    topicId: "constraints",
    question: "Constraint (batasan) apa yang harus digunakan jika kita ingin memastikan kolom 'nama_siswa' TIDAK BOLEH dikosongi saat data dimasukkan?",
    options: [
      "UNIQUE",
      "PRIMARY KEY",
      "CHECK",
      "NOT NULL"
    ],
    correctAnswerIndex: 3,
    explanation: "NOT NULL memaksa kolom tersebut wajib diisi data (tidak boleh kosong/NULL)."
  },

  // JOINs
  {
    id: "q_join_1",
    topicId: "joins",
    question: "Wali kelas ingin melihat daftar SEMUA siswa di kelasnya beserta nilai remedialnya (jika ada). Jika siswa tidak ikut remedial, nilainya biarkan kosong (NULL). JOIN apa yang paling tepat jika tabel Siswa diletakkan di sebelah kiri?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    correctAnswerIndex: 1,
    explanation: "LEFT JOIN akan mengambil semua data dari tabel kiri (Siswa), terlepas dari apakah mereka punya kecocokan di tabel kanan (Nilai Remedial) atau tidak."
  },
  {
    id: "q_join_2",
    topicId: "joins",
    question: "Jenis JOIN apa yang HANYA menampilkan data jika ada kecocokan di KEDUA tabel?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    correctAnswerIndex: 0,
    explanation: "INNER JOIN hanya mengambil 'irisan' dari kedua tabel. Jika data di satu tabel tidak punya pasangan di tabel lain, data tersebut akan dibuang dari hasil."
  },

  // Aggregations
  {
    id: "q_agg_1",
    topicId: "aggregations",
    question: "Fungsi agregasi mana yang tepat untuk menghitung BANYAKNYA siswa di jurusan 'TKJ'?",
    options: [
      "SUM()",
      "MAX()",
      "COUNT()",
      "AVG()"
    ],
    correctAnswerIndex: 2,
    explanation: "COUNT() digunakan untuk menghitung jumlah baris data. Sedangkan SUM() untuk menjumlahkan angka, dan AVG() untuk rata-rata."
  }
];