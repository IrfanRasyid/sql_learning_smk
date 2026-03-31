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
    id: "q_ddl_create",
    topicId: "create",
    question: "Perintah DDL apa yang digunakan untuk membuat database atau tabel baru dari awal?",
    options: [
      "MAKE TABLE",
      "BUILD TABLE",
      "CREATE TABLE",
      "GENERATE TABLE"
    ],
    correctAnswerIndex: 2,
    explanation: "CREATE digunakan untuk membuat objek baru di database, seperti CREATE DATABASE atau CREATE TABLE. Ibaratnya membangun pondasi sekolah baru."
  },
  {
    id: "q_ddl_alter",
    topicId: "alter",
    question: "Perintah DDL apa yang digunakan untuk menambah kolom baru bernama 'alamat' ke dalam tabel yang sudah ada?",
    options: [
      "CREATE TABLE alamat",
      "INSERT INTO tabel ADD alamat",
      "ALTER TABLE nama_tabel ADD alamat",
      "UPDATE tabel SET alamat"
    ],
    correctAnswerIndex: 2,
    explanation: "ALTER TABLE digunakan untuk merombak atau memodifikasi struktur tabel yang sudah jadi, seperti menambah kolom (ADD), menghapus kolom (DROP), atau mengubah tipe data."
  },
  {
    id: "q_ddl_truncate_drop",
    topicId: "drop",
    question: "Apa perbedaan utama antara DROP dan TRUNCATE?",
    options: [
      "DROP menghapus data saja, TRUNCATE menghapus tabel sepenuhnya",
      "DROP menghapus tabel beserta strukturnya, TRUNCATE hanya mengosongkan datanya",
      "DROP digunakan untuk database, TRUNCATE digunakan untuk tabel",
      "Tidak ada bedanya, keduanya menghapus tabel"
    ],
    correctAnswerIndex: 1,
    explanation: "DROP ibarat menggusur gedung sekolah (struktur hancur/hilang dari database), sedangkan TRUNCATE ibarat mengeluarkan semua murid dari kelas dengan cepat (struktur kelas tetap ada, hanya isinya yang kosong)."
  },

  // DML
  {
    id: "q_dml_select",
    topicId: "select",
    question: "Perintah mana yang benar untuk mengambil HANYA kolom 'nama' dan 'jurusan' dari tabel Siswa?",
    options: [
      "GET nama, jurusan FROM Siswa",
      "SELECT nama, jurusan FROM Siswa",
      "TAKE nama, jurusan IN Siswa",
      "READ nama, jurusan FROM Siswa"
    ],
    correctAnswerIndex: 1,
    explanation: "SELECT adalah perintah standar DML untuk membaca atau mengambil data. Kita bisa menyebutkan nama kolom secara spesifik yang ingin ditampilkan."
  },
  {
    id: "q_dml_insert",
    topicId: "insert",
    question: "Siswa baru bernama Budi baru saja mendaftar. Perintah DML apa yang digunakan untuk memasukkan data Budi ke tabel Siswa?",
    options: [
      "ADD INTO Siswa VALUES ('Budi')",
      "PUT INTO Siswa VALUES ('Budi')",
      "INSERT INTO Siswa VALUES ('Budi')",
      "UPDATE Siswa SET nama = 'Budi'"
    ],
    correctAnswerIndex: 2,
    explanation: "INSERT INTO digunakan untuk menambah baris data (record) baru ke dalam tabel."
  },
  {
    id: "q_dml_update",
    topicId: "update",
    question: "Jika kamu lupa menambahkan klausa WHERE saat menjalankan perintah UPDATE, apa yang akan terjadi?",
    options: [
      "Akan muncul pesan error dari database",
      "Hanya baris pertama yang akan diubah",
      "Hanya baris terakhir yang akan diubah",
      "SEMUA baris dalam tabel tersebut akan ikut berubah"
    ],
    correctAnswerIndex: 3,
    explanation: "Tanpa klausa WHERE sebagai filter/kondisi, perintah UPDATE akan dieksekusi ke seluruh baris yang ada di tabel. Ini adalah kesalahan fatal yang sering terjadi!"
  },
  {
    id: "q_dml_delete",
    topicId: "delete",
    question: "Budi pindah sekolah, sehingga datanya harus dihapus dari sistem. Perintah apa yang tepat?",
    options: [
      "REMOVE FROM Siswa WHERE nama = 'Budi'",
      "DELETE FROM Siswa WHERE nama = 'Budi'",
      "DROP FROM Siswa WHERE nama = 'Budi'",
      "CLEAR FROM Siswa WHERE nama = 'Budi'"
    ],
    correctAnswerIndex: 1,
    explanation: "DELETE digunakan untuk menghapus baris data. Ingat, bedakan dengan DROP yang digunakan untuk menghapus struktur tabelnya."
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
    id: "q_join_inner",
    topicId: "inner-join",
    question: "Jenis JOIN apa yang HANYA menampilkan data jika ada kecocokan di KEDUA tabel?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    correctAnswerIndex: 0,
    explanation: "INNER JOIN hanya mengambil 'irisan' (intersection) dari kedua tabel. Jika data di satu tabel tidak punya pasangan di tabel lain, data tersebut tidak akan ditampilkan."
  },
  {
    id: "q_join_left",
    topicId: "left-join",
    question: "Wali kelas ingin melihat daftar SEMUA siswa (tabel kiri) beserta nilai remedialnya (tabel kanan). Jika siswa tidak ikut remedial, nilainya biarkan kosong (NULL). JOIN apa yang paling tepat?",
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
    id: "q_join_right",
    topicId: "right-join",
    question: "Terdapat tabel Peminjaman (kiri) dan Buku (kanan). Jika kita ingin melihat SEMUA daftar Buku, baik yang sedang dipinjam maupun yang belum pernah dipinjam sama sekali, JOIN apa yang bisa digunakan?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "CROSS JOIN"
    ],
    correctAnswerIndex: 2,
    explanation: "RIGHT JOIN akan mengambil semua data dari tabel kanan (Buku), meskipun tidak ada kecocokan di tabel kiri (Peminjaman)."
  },
  {
    id: "q_join_full",
    topicId: "full-outer-join",
    question: "Jika kita ingin menggabungkan tabel Guru dan tabel Ekskul untuk melihat SEMUA Guru dan SEMUA Ekskul (termasuk guru yang tidak pegang ekskul, dan ekskul yang belum punya guru pembina), kita harus menggunakan...",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    correctAnswerIndex: 3,
    explanation: "FULL OUTER JOIN menggabungkan hasil dari LEFT JOIN dan RIGHT JOIN. Semua data dari kedua tabel akan ditampilkan, dan yang tidak punya pasangan akan diisi NULL."
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