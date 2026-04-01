export interface QuizQuestion {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface FinalTestQuestion {
  id: string;
  topicId: string; // biasanya 'final-test'
  scenario: string; // Cerita/kasus
  codeSnippet: string; // Kode dengan bagian yang hilang, gunakan ___ (3 underscore) untuk bagian yang hilang
  options: string[]; // Pilihan potongan kode
  correctAnswerIndex: number;
  explanation: string;
}

export const finalTestData: FinalTestQuestion[] = [
  {
    id: "ft_1",
    topicId: "final-test",
    scenario: "Sekolah baru saja dibangun. Kepala sekolah meminta kamu untuk membuat tempat penyimpanan data siswa yang baru.",
    codeSnippet: "___ DATABASE Sekolah;",
    options: ["MAKE", "CREATE", "BUILD", "START"],
    correctAnswerIndex: 1,
    explanation: "Untuk membuat database baru dari awal, kita selalu menggunakan perintah CREATE DATABASE."
  },
  {
    id: "ft_2",
    topicId: "final-test",
    scenario: "Setelah database selesai, kamu perlu membuat tabel untuk menyimpan daftar Siswa. Kolom yang dibutuhkan adalah id_siswa (angka) dan nama (teks).",
    codeSnippet: "CREATE ___ Siswa (\n  id_siswa INT PRIMARY KEY,\n  nama VARCHAR(50)\n);",
    options: ["FILE", "FOLDER", "TABLE", "DATA"],
    correctAnswerIndex: 2,
    explanation: "Perintah DDL untuk membuat tabel adalah CREATE TABLE."
  },
  {
    id: "ft_3",
    topicId: "final-test",
    scenario: "Oh iya! Kamu lupa menambahkan kolom 'kelas' (teks maksimal 10 huruf). Mari tambahkan kolom tersebut ke tabel yang sudah jadi.",
    codeSnippet: "ALTER TABLE Siswa\n___ kelas VARCHAR(10);",
    options: ["INSERT", "ADD", "PUT", "CREATE"],
    correctAnswerIndex: 1,
    explanation: "Untuk menambahkan kolom pada tabel yang sudah ada menggunakan ALTER TABLE, kata kunci yang digunakan adalah ADD."
  },
  {
    id: "ft_4",
    topicId: "final-test",
    scenario: "Tabel sudah siap. Sekarang ada siswa baru bernama 'Budi' di kelas '10-RPL'. Masukkan datanya!",
    codeSnippet: "INSERT ___ Siswa (id_siswa, nama, kelas)\nVALUES (1, 'Budi', '10-RPL');",
    options: ["IN", "TO", "INTO", "INSIDE"],
    correctAnswerIndex: 2,
    explanation: "Sintaks standar untuk menambah data baru adalah INSERT INTO nama_tabel."
  },
  {
    id: "ft_5",
    topicId: "final-test",
    scenario: "Budi ternyata salah daftar jurusan, dia seharusnya masuk '10-TKJ'. Mari perbaiki datanya.",
    codeSnippet: "___ Siswa\nSET kelas = '10-TKJ'\nWHERE id_siswa = 1;",
    options: ["CHANGE", "MODIFY", "ALTER", "UPDATE"],
    correctAnswerIndex: 3,
    explanation: "Untuk mengubah atau merevisi isi data yang sudah ada di dalam tabel (DML), kita menggunakan perintah UPDATE."
  },
  {
    id: "ft_6",
    topicId: "final-test",
    scenario: "Kepala sekolah ingin melihat semua daftar siswa beserta kelasnya yang ada di tabel Siswa.",
    codeSnippet: "___ * FROM Siswa;",
    options: ["GET", "READ", "SHOW", "SELECT"],
    correctAnswerIndex: 3,
    explanation: "Perintah DML untuk membaca atau menampilkan data dari tabel adalah SELECT."
  },
  {
    id: "ft_7",
    topicId: "final-test",
    scenario: "Kepala sekolah hanya ingin melihat data Budi saja (id_siswa = 1), bukan semua siswa.",
    codeSnippet: "SELECT * FROM Siswa\n___ id_siswa = 1;",
    options: ["IF", "WHEN", "WHERE", "FILTER"],
    correctAnswerIndex: 2,
    explanation: "Klausa WHERE digunakan untuk menyaring/memfilter data spesifik yang ingin ditampilkan atau dimanipulasi."
  },
  {
    id: "ft_8",
    topicId: "final-test",
    scenario: "Ternyata Budi pindah ke sekolah lain. Hapus data Budi dari sistem.",
    codeSnippet: "___ FROM Siswa\nWHERE id_siswa = 1;",
    options: ["DROP", "DELETE", "REMOVE", "TRUNCATE"],
    correctAnswerIndex: 1,
    explanation: "Untuk menghapus baris data tertentu (DML), gunakan DELETE. Jangan gunakan DROP karena itu akan menghapus tabelnya!"
  },
  {
    id: "ft_9",
    topicId: "final-test",
    scenario: "Sekarang ada tabel 'Jurusan' dan tabel 'Siswa'. Kita ingin melihat daftar siswa beserta nama jurusannya. Hubungkan kedua tabel tersebut dengan irisan yang pasti cocok.",
    codeSnippet: "SELECT Siswa.nama, Jurusan.nama_jurusan\nFROM Siswa\n___ JOIN Jurusan \nON Siswa.id_jurusan = Jurusan.id_jurusan;",
    options: ["INNER", "OUTER", "LEFT", "RIGHT"],
    correctAnswerIndex: 0,
    explanation: "INNER JOIN digunakan untuk menggabungkan dua tabel dan HANYA menampilkan data yang memiliki kecocokan di kedua sisi."
  },
  {
    id: "ft_10",
    topicId: "final-test",
    scenario: "Tahun ajaran baru! Semua siswa sudah lulus. Hapus semua isi data murid di tabel Siswa dengan cepat, tapi biarkan struktur tabelnya tetap ada untuk murid baru besok.",
    codeSnippet: "___ TABLE Siswa;",
    options: ["DROP", "DELETE", "EMPTY", "TRUNCATE"],
    correctAnswerIndex: 3,
    explanation: "TRUNCATE TABLE digunakan untuk mengosongkan/membersihkan isi seluruh tabel dengan sangat cepat (DDL), tanpa merusak struktur tabelnya."
  },
  {
    id: "ft_11",
    topicId: "final-test",
    scenario: "Ada siswa kembar yang namanya persis sama. Kamu ingin melihat daftar nama kota asal siswa, tapi tidak ingin ada nama kota yang muncul dua kali.",
    codeSnippet: "SELECT ___ kota_asal FROM Siswa;",
    options: ["UNIQUE", "DIFFERENT", "DISTINCT", "SINGLE"],
    correctAnswerIndex: 2,
    explanation: "DISTINCT digunakan setelah SELECT untuk memastikan hasil yang ditampilkan hanya nilai yang unik (menghapus duplikasi)."
  },
  {
    id: "ft_12",
    topicId: "final-test",
    scenario: "Kepala sekolah ingin melihat daftar siswa diurutkan berdasarkan nilai ujian dari yang terbesar ke terkecil.",
    codeSnippet: "SELECT nama, nilai FROM Siswa\nORDER BY nilai ___;",
    options: ["DESC", "ASC", "DOWN", "TOP"],
    correctAnswerIndex: 0,
    explanation: "DESC (Descending) digunakan bersama ORDER BY untuk mengurutkan data dari nilai tertinggi ke terendah."
  },
  {
    id: "ft_13",
    topicId: "final-test",
    scenario: "Kamu diminta untuk menghitung total jumlah murid yang ada di jurusan 'RPL'.",
    codeSnippet: "SELECT ___(id_siswa) \nFROM Siswa \nWHERE kelas = 'RPL';",
    options: ["SUM", "TOTAL", "COUNT", "MAX"],
    correctAnswerIndex: 2,
    explanation: "Fungsi agregasi COUNT() digunakan untuk menghitung jumlah baris data yang sesuai dengan kondisi."
  },
  {
    id: "ft_14",
    topicId: "final-test",
    scenario: "Sekarang, cari tahu siapa siswa yang mendapatkan nilai paling tinggi (maksimal) di ujian kemarin.",
    codeSnippet: "SELECT ___(nilai) \nFROM Siswa;",
    options: ["TOP", "HIGH", "PEAK", "MAX"],
    correctAnswerIndex: 3,
    explanation: "MAX() adalah fungsi agregasi untuk mencari nilai tertinggi dari sebuah kolom."
  },
  {
    id: "ft_15",
    topicId: "final-test",
    scenario: "Kamu ingin merubah nama kolom 'nama_lengkap' menjadi 'Nama Siswa' SAAT DITAMPILKAN di layar agar lebih mudah dibaca (Alias).",
    codeSnippet: "SELECT nama_lengkap ___ 'Nama Siswa'\nFROM Siswa;",
    options: ["TO", "IS", "AS", "FOR"],
    correctAnswerIndex: 2,
    explanation: "Kata kunci AS digunakan untuk memberikan nama alias/samaran sementara pada kolom di hasil pencarian."
  },
  {
    id: "ft_16",
    topicId: "final-test",
    scenario: "Sekolah punya ekstrakurikuler baru, tapi belum ada guru yang membinanya. Kamu ingin melihat SEMUA daftar ekskul, termasuk yang belum punya guru pembina. Tabel Ekskul ada di sebelah kiri, tabel Guru di kanan.",
    codeSnippet: "SELECT Ekskul.nama, Guru.nama\nFROM Ekskul\n___ JOIN Guru \nON Ekskul.id_guru = Guru.id_guru;",
    options: ["INNER", "LEFT", "RIGHT", "FULL OUTER"],
    correctAnswerIndex: 1,
    explanation: "LEFT JOIN memastikan SEMUA data dari tabel kiri (Ekskul) akan tampil, meskipun tidak ada kecocokan di tabel kanan (Guru)."
  },
  {
    id: "ft_17",
    topicId: "final-test",
    scenario: "Sistem sekolah diretas! Kamu panik dan ingin langsung menghancurkan seluruh tabel 'Siswa' beserta struktur dan datanya hingga lenyap tak tersisa.",
    codeSnippet: "___ TABLE Siswa;",
    options: ["DELETE", "TRUNCATE", "REMOVE", "DROP"],
    correctAnswerIndex: 3,
    explanation: "DROP TABLE adalah perintah paling destruktif yang menghancurkan struktur tabel dan semua isinya secara permanen dari database."
  },
  {
    id: "ft_18",
    topicId: "final-test",
    scenario: "Kamu perlu mencari murid yang namanya diawali dengan huruf 'A', tapi kamu tidak tahu kelanjutan hurufnya.",
    codeSnippet: "SELECT * FROM Siswa \nWHERE nama ___ 'A%';",
    options: ["=", "MATCH", "LIKE", "SAME"],
    correctAnswerIndex: 2,
    explanation: "Klausa LIKE digunakan untuk pencarian pola teks (pattern matching) menggunakan wildcard seperti '%' atau '_'."
  },
  {
    id: "ft_19",
    topicId: "final-test",
    scenario: "Ada kesalahan pengetikan tipe data. Kolom 'no_hp' yang tadinya bertipe INT sekarang ingin kamu ubah menjadi VARCHAR(15).",
    codeSnippet: "ALTER TABLE Siswa\n___ COLUMN no_hp VARCHAR(15);",
    options: ["CHANGE", "UPDATE", "MODIFY", "REPLACE"],
    correctAnswerIndex: 2,
    explanation: "Tergantung sistem database, MODIFY COLUMN (atau ALTER COLUMN) digunakan di dalam ALTER TABLE untuk mengubah tipe data kolom yang sudah ada."
  },
  {
    id: "ft_20",
    topicId: "final-test",
    scenario: "Wali kelas ingin tahu siapa saja murid yang nilainya di antara 70 sampai 80.",
    codeSnippet: "SELECT * FROM Siswa\nWHERE nilai ___ 70 AND 80;",
    options: ["BETWEEN", "AMONG", "INSIDE", "RANGE"],
    correctAnswerIndex: 0,
    explanation: "BETWEEN digunakan untuk memfilter nilai yang berada dalam sebuah rentang (range) tertentu, mencakup nilai batas bawah dan batas atasnya."
  }
];

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

  // DDL - CREATE
  {
    id: "q_ddl_create_1",
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
    id: "q_ddl_create_2",
    topicId: "create",
    question: "Apa yang harus ditentukan saat menggunakan perintah CREATE TABLE?",
    options: [
      "Hanya nama tabel saja",
      "Nama tabel dan nama kolom beserta tipe datanya",
      "Nama tabel dan data yang akan dimasukkan",
      "Hanya tipe data saja"
    ],
    correctAnswerIndex: 1,
    explanation: "Saat membuat tabel, kita wajib mendefinisikan nama tabelnya, serta daftar kolom dan tipe data untuk masing-masing kolom tersebut."
  },
  {
    id: "q_ddl_create_3",
    topicId: "create",
    question: "Manakah penulisan CREATE TABLE yang benar untuk membuat tabel 'Siswa'?",
    options: [
      "CREATE TABLE Siswa { id INT, nama VARCHAR };",
      "CREATE TABLE Siswa [ id INT, nama VARCHAR ];",
      "CREATE TABLE Siswa ( id INT, nama VARCHAR(50) );",
      "CREATE TABLE Siswa < id INT, nama VARCHAR >;"
    ],
    correctAnswerIndex: 2,
    explanation: "Sintaks CREATE TABLE menggunakan tanda kurung biasa () untuk mengapit definisi kolom, dan tipe data seperti VARCHAR biasanya membutuhkan panjang maksimal, misal VARCHAR(50)."
  },
  {
    id: "q_ddl_create_4",
    topicId: "create",
    question: "Jika kita ingin membuat database baru bernama 'Sekolah', perintah apa yang digunakan?",
    options: [
      "CREATE DATABASE Sekolah;",
      "NEW DATABASE Sekolah;",
      "START DATABASE Sekolah;",
      "ADD DATABASE Sekolah;"
    ],
    correctAnswerIndex: 0,
    explanation: "Sama seperti membuat tabel, membuat database juga menggunakan kata kunci CREATE, yaitu CREATE DATABASE."
  },
  {
    id: "q_ddl_create_5",
    topicId: "create",
    question: "Tipe data apa yang paling cocok digunakan untuk kolom 'tanggal_lahir' saat melakukan CREATE TABLE?",
    options: [
      "INT",
      "VARCHAR",
      "DATE",
      "BOOLEAN"
    ],
    correctAnswerIndex: 2,
    explanation: "Tipe data DATE dikhususkan untuk menyimpan format tanggal (Tahun-Bulan-Hari)."
  },
  {
    id: "q_ddl_create_6",
    topicId: "create",
    question: "Saat membuat tabel (CREATE TABLE), kita bisa menentukan satu kolom sebagai identitas unik. Disebut apakah itu?",
    options: [
      "Foreign Key",
      "Primary Key",
      "Unique Key",
      "Super Key"
    ],
    correctAnswerIndex: 1,
    explanation: "Primary Key (Kunci Utama) ditambahkan saat membuat tabel untuk memastikan setiap baris memiliki identitas yang unik dan tidak boleh kosong."
  },
  {
    id: "q_ddl_create_7",
    topicId: "create",
    question: "Apa yang terjadi jika kita menjalankan perintah CREATE TABLE dengan nama tabel yang sudah ada di database?",
    options: [
      "Tabel lama akan tertimpa tabel baru",
      "Tabel baru akan digabungkan dengan tabel lama",
      "Akan muncul pesan Error (Table already exists)",
      "Nama tabel baru akan otomatis ditambahkan angka (misal: Siswa_1)"
    ],
    correctAnswerIndex: 2,
    explanation: "Database tidak mengizinkan ada dua tabel dengan nama yang sama persis di dalam satu database, sehingga akan menghasilkan Error."
  },
  {
    id: "q_ddl_create_8",
    topicId: "create",
    question: "Tipe data 'INT' dalam perintah CREATE TABLE digunakan untuk menyimpan data berupa...",
    options: [
      "Teks panjang",
      "Karakter tunggal",
      "Angka bulat (Bilangan bulat)",
      "Angka desimal"
    ],
    correctAnswerIndex: 2,
    explanation: "INT (Integer) digunakan khusus untuk menyimpan angka bulat, seperti umur, jumlah, atau ID numerik."
  },
  {
    id: "q_ddl_create_9",
    topicId: "create",
    question: "Constraint apa yang ditambahkan pada CREATE TABLE agar suatu kolom tidak boleh dibiarkan kosong?",
    options: [
      "UNIQUE",
      "NOT NULL",
      "CHECK",
      "DEFAULT"
    ],
    correctAnswerIndex: 1,
    explanation: "NOT NULL memaksa pengguna untuk selalu mengisi data pada kolom tersebut (tidak boleh kosong)."
  },
  {
    id: "q_ddl_create_10",
    topicId: "create",
    question: "Perintah DDL (termasuk CREATE) bersifat 'Auto-Commit'. Apa maksudnya?",
    options: [
      "Perintah harus disetujui admin dulu",
      "Perintah akan dieksekusi besok",
      "Perubahan struktur langsung disimpan permanen dan tidak bisa di-Undo (Rollback)",
      "Perintah akan otomatis membuat backup"
    ],
    correctAnswerIndex: 2,
    explanation: "Auto-Commit berarti setiap perintah DDL yang dijalankan akan langsung merubah struktur database secara permanen tanpa perlu perintah 'SAVE' tambahan."
  },

  // DDL - ALTER
  {
    id: "q_ddl_alter_1",
    topicId: "alter",
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
    id: "q_ddl_alter_2",
    topicId: "alter",
    question: "Selain menambah kolom, ALTER TABLE juga bisa digunakan untuk menghapus kolom. Kata kunci apa yang ditambahkan?",
    options: [
      "ALTER TABLE ... DELETE COLUMN",
      "ALTER TABLE ... DROP COLUMN",
      "ALTER TABLE ... REMOVE COLUMN",
      "ALTER TABLE ... CLEAR COLUMN"
    ],
    correctAnswerIndex: 1,
    explanation: "Untuk menghapus kolom dari struktur tabel, kita menggunakan kombinasi ALTER TABLE dan DROP COLUMN."
  },
  {
    id: "q_ddl_alter_3",
    topicId: "alter",
    question: "Jika kita ingin mengubah TIPE DATA dari sebuah kolom yang sudah ada (misal dari INT ke VARCHAR), perintah apa yang digunakan?",
    options: [
      "ALTER TABLE ... MODIFY COLUMN / ALTER COLUMN",
      "ALTER TABLE ... UPDATE COLUMN",
      "ALTER TABLE ... CHANGE DATA",
      "ALTER TABLE ... SWITCH TYPE"
    ],
    correctAnswerIndex: 0,
    explanation: "Tergantung jenis databasenya (MySQL pakai MODIFY, SQL Server/PostgreSQL pakai ALTER COLUMN), perintah ini mengubah definisi tipe data kolom."
  },
  {
    id: "q_ddl_alter_4",
    topicId: "alter",
    question: "Apakah ALTER TABLE bisa digunakan untuk mengganti NAMA tabel itu sendiri?",
    options: [
      "Tidak bisa, harus di-DROP lalu CREATE ulang",
      "Bisa, menggunakan ALTER TABLE ... RENAME TO",
      "Bisa, menggunakan UPDATE TABLE ... SET NAME",
      "Tidak bisa, nama tabel bersifat permanen selamanya"
    ],
    correctAnswerIndex: 1,
    explanation: "Ya, ALTER TABLE memiliki fungsi RENAME TO untuk mengganti nama tabel tanpa menghapus isinya."
  },
  {
    id: "q_ddl_alter_5",
    topicId: "alter",
    question: "Jika kita menjalankan ALTER TABLE ... DROP COLUMN untuk kolom 'no_hp', apa yang terjadi pada data nomor HP yang sudah tersimpan sebelumnya?",
    options: [
      "Datanya dipindahkan ke kolom lain",
      "Datanya tetap ada, hanya kolomnya yang disembunyikan",
      "Datanya akan ikut terhapus secara permanen beserta kolomnya",
      "Datanya akan diubah menjadi NULL"
    ],
    correctAnswerIndex: 2,
    explanation: "Menghapus kolom berarti menghapus wadahnya. Semua data yang ada di dalam wadah tersebut juga akan hilang permanen."
  },
  {
    id: "q_ddl_alter_6",
    topicId: "alter",
    question: "Manakah sintaks yang benar untuk menambah kolom 'email' dengan tipe VARCHAR(100) ke tabel Siswa?",
    options: [
      "ALTER Siswa ADD email VARCHAR(100);",
      "ALTER TABLE Siswa ADD email VARCHAR(100);",
      "ALTER TABLE Siswa INSERT email VARCHAR(100);",
      "MODIFY TABLE Siswa ADD email VARCHAR(100);"
    ],
    correctAnswerIndex: 1,
    explanation: "Sintaks yang standar adalah: ALTER TABLE nama_tabel ADD nama_kolom tipe_data."
  },
  {
    id: "q_ddl_alter_7",
    topicId: "alter",
    question: "Apakah kita bisa menambahkan Constraint (seperti Primary Key) ke tabel yang SUDAH DIBUAT sebelumnya menggunakan ALTER TABLE?",
    options: [
      "Bisa, menggunakan ALTER TABLE ... ADD CONSTRAINT",
      "Tidak bisa, Constraint hanya bisa dibuat saat CREATE TABLE",
      "Bisa, menggunakan UPDATE CONSTRAINT",
      "Tidak bisa, Primary Key tidak bisa diubah-ubah"
    ],
    correctAnswerIndex: 0,
    explanation: "ALTER TABLE sangat fleksibel, kita bisa menambahkan Constraint (seperti PK, FK, atau UNIQUE) belakangan menggunakan klausa ADD CONSTRAINT."
  },
  {
    id: "q_ddl_alter_8",
    topicId: "alter",
    question: "Saat melakukan ALTER TABLE ... MODIFY COLUMN dari VARCHAR(100) menjadi VARCHAR(10), apa risiko yang mungkin terjadi jika sudah ada data di tabel tersebut?",
    options: [
      "Tidak ada risiko sama sekali",
      "Semua data akan otomatis terhapus",
      "Data yang panjangnya lebih dari 10 karakter mungkin akan terpotong (ter-truncate) atau menyebabkan error",
      "Tabel akan otomatis terkunci selamanya"
    ],
    correctAnswerIndex: 2,
    explanation: "Mengecilkan ukuran tipe data berisiko menyebabkan 'Data Truncation Error' jika ada data lama yang ukurannya melebihi batas baru yang ditentukan."
  },
  {
    id: "q_ddl_alter_9",
    topicId: "alter",
    question: "Dalam analogi sekolah, proses ALTER TABLE ibarat...",
    options: [
      "Membangun gedung sekolah baru dari tanah kosong",
      "Mengeluarkan semua murid dari kelas",
      "Menghancurkan gedung sekolah",
      "Membobol tembok kelas untuk menambahkan fasilitas loker baru"
    ],
    correctAnswerIndex: 3,
    explanation: "ALTER merombak struktur yang sudah ada tanpa menghancurkan keseluruhannya, mirip seperti renovasi penambahan fasilitas."
  },
  {
    id: "q_ddl_alter_10",
    topicId: "alter",
    question: "Perintah ALTER TABLE termasuk dalam kelompok perintah SQL apa?",
    options: [
      "DML (Data Manipulation Language)",
      "DCL (Data Control Language)",
      "DDL (Data Definition Language)",
      "TCL (Transaction Control Language)"
    ],
    correctAnswerIndex: 2,
    explanation: "Karena ALTER berurusan dengan 'Struktur' atau 'Definisi' dari objek database, ia masuk ke dalam kategori DDL."
  },

  // DDL - TRUNCATE
  {
    id: "q_ddl_truncate_1",
    topicId: "truncate",
    question: "Apa fungsi utama dari perintah TRUNCATE TABLE?",
    options: [
      "Menghapus satu baris data tertentu",
      "Menghapus seluruh tabel beserta strukturnya",
      "Mengosongkan semua isi/data dalam tabel, tetapi struktur tabelnya tetap ada",
      "Mengubah nama tabel menjadi kosong"
    ],
    correctAnswerIndex: 2,
    explanation: "TRUNCATE hanya 'menyapu bersih' isi tabelnya. Kerangka/kolom-kolom tabelnya tetap utuh dan siap diisi data baru."
  },
  {
    id: "q_ddl_truncate_2",
    topicId: "truncate",
    question: "Apa perbedaan TRUNCATE dengan DELETE (tanpa WHERE)?",
    options: [
      "DELETE lebih cepat daripada TRUNCATE",
      "TRUNCATE adalah perintah DDL (Auto-commit dan cepat), DELETE adalah perintah DML (merekam log per baris dan lebih lambat)",
      "TRUNCATE menghapus struktur tabel, DELETE hanya menghapus data",
      "Tidak ada perbedaan sama sekali"
    ],
    correctAnswerIndex: 1,
    explanation: "TRUNCATE mereset tabel dari sistem file database secara langsung (DDL), sehingga jauh lebih cepat ketimbang DELETE yang menghapus data satu-per-satu (DML)."
  },
  {
    id: "q_ddl_truncate_3",
    topicId: "truncate",
    question: "Apakah kita bisa menggunakan klausa WHERE pada perintah TRUNCATE? (Misal: TRUNCATE TABLE Siswa WHERE kelas = '12')",
    options: [
      "Bisa, TRUNCATE mendukung WHERE",
      "Tidak bisa, TRUNCATE selalu mengosongkan SELURUH isi tabel tanpa terkecuali",
      "Bisa, tapi hanya untuk tipe data angka",
      "Tergantung jenis databasenya"
    ],
    correctAnswerIndex: 1,
    explanation: "TRUNCATE tidak menerima kondisi filter (WHERE). Jika ingin menghapus sebagian data saja, gunakan perintah DELETE."
  },
  {
    id: "q_ddl_truncate_4",
    topicId: "truncate",
    question: "Apa yang terjadi pada nilai 'Auto Increment' (misal: ID yang nambah otomatis) setelah tabel di-TRUNCATE?",
    options: [
      "Nilainya akan melanjutkan dari angka terakhir sebelum dihapus",
      "Nilainya akan di-reset kembali ke awal (biasanya mulai dari 1 lagi)",
      "Fitur Auto Increment akan rusak dan error",
      "Nilainya akan berubah menjadi huruf acak"
    ],
    correctAnswerIndex: 1,
    explanation: "Salah satu ciri khas TRUNCATE adalah ia mereset counter Auto Increment kembali ke nilai awal, tidak seperti DELETE yang melanjutkan angka terakhir."
  },
  {
    id: "q_ddl_truncate_5",
    topicId: "truncate",
    question: "Analogi TRUNCATE di lingkungan sekolah adalah...",
    options: [
      "Membangun ruang kelas baru",
      "Merobohkan ruang kelas",
      "Mengeluarkan semua murid dari kelas saat pergantian tahun ajaran, tapi ruangannya tetap ada",
      "Memasukkan murid baru ke kelas"
    ],
    correctAnswerIndex: 2,
    explanation: "Strukturnya (ruang kelas) tetap dipertahankan, hanya isinya (murid-murid) yang dibersihkan sekaligus."
  },
  {
    id: "q_ddl_truncate_6",
    topicId: "truncate",
    question: "Manakah penulisan perintah TRUNCATE yang benar?",
    options: [
      "TRUNCATE Siswa;",
      "TRUNCATE TABLE Siswa;",
      "TRUNCATE FROM Siswa;",
      "EMPTY TABLE Siswa;"
    ],
    correctAnswerIndex: 1,
    explanation: "Sintaks resminya adalah menyertakan kata kunci TABLE: TRUNCATE TABLE nama_tabel."
  },
  {
    id: "q_ddl_truncate_7",
    topicId: "truncate",
    question: "Mengapa TRUNCATE lebih cepat memproses penghapusan jutaan data dibandingkan DELETE?",
    options: [
      "Karena TRUNCATE dijalankan oleh CPU yang lebih canggih",
      "Karena TRUNCATE menghapus seluruh file database",
      "Karena TRUNCATE tidak menulis log (catatan) penghapusan untuk setiap baris data",
      "Karena TRUNCATE mengkompresi data terlebih dahulu"
    ],
    correctAnswerIndex: 2,
    explanation: "DELETE mencatat setiap baris yang dihapus ke dalam 'Transaction Log' agar bisa di-Undo, sedangkan TRUNCATE langsung 'memotong' alokasi penyimpanan datanya (minim log)."
  },
  {
    id: "q_ddl_truncate_8",
    topicId: "truncate",
    question: "Apakah perintah TRUNCATE bisa di-Undo (Rollback) pada sebagian besar sistem database standar?",
    options: [
      "Bisa dengan mudah, cukup tekan Ctrl+Z",
      "Tidak bisa, karena TRUNCATE adalah perintah DDL yang bersifat Auto-Commit",
      "Bisa, asalkan kita menggunakan klausa WHERE",
      "Tergantung izin dari Administrator"
    ],
    correctAnswerIndex: 1,
    explanation: "Karena TRUNCATE adalah DDL (Data Definition Language), perubahannya langsung permanen dan sulit/tidak bisa di-Rollback layaknya transaksi DML."
  },
  {
    id: "q_ddl_truncate_9",
    topicId: "truncate",
    question: "Jika sebuah tabel memiliki Foreign Key yang sedang dirujuk oleh tabel lain, apa yang biasanya terjadi jika kita mencoba men-TRUNCATE tabel tersebut?",
    options: [
      "Tabel akan berhasil dikosongkan tanpa masalah",
      "Tabel yang merujuk juga akan ikut kosong",
      "Database akan menolak (Error) karena melanggar aturan integritas relasi (Foreign Key Constraint)",
      "Database akan menghapus Foreign Key tersebut otomatis"
    ],
    correctAnswerIndex: 2,
    explanation: "Untuk melindungi keutuhan data (Referential Integrity), RDBMS biasanya melarang TRUNCATE pada tabel yang menjadi induk/rujukan tabel lain."
  },
  {
    id: "q_ddl_truncate_10",
    topicId: "truncate",
    question: "TRUNCATE dikategorikan ke dalam bahasa SQL jenis apa?",
    options: [
      "DML",
      "DCL",
      "TCL",
      "DDL"
    ],
    correctAnswerIndex: 3,
    explanation: "Meskipun efeknya 'menghapus data', cara kerjanya yang mereset struktur penyimpanan (melepas data page) membuatnya digolongkan sebagai DDL."
  },

  // DDL - DROP
  {
    id: "q_ddl_drop_1",
    topicId: "drop",
    question: "Apa perbedaan utama antara DROP dan TRUNCATE?",
    options: [
      "DROP menghapus data saja, TRUNCATE menghapus tabel sepenuhnya",
      "DROP menghapus tabel beserta strukturnya secara permanen, TRUNCATE hanya mengosongkan isinya",
      "DROP digunakan untuk database, TRUNCATE digunakan untuk tabel",
      "Tidak ada bedanya, keduanya menghapus tabel"
    ],
    correctAnswerIndex: 1,
    explanation: "DROP ibarat menggusur gedung sekolah (struktur hancur/hilang dari database), sedangkan TRUNCATE ibarat mengeluarkan semua murid dari kelas dengan cepat (struktur kelas tetap ada)."
  },
  {
    id: "q_ddl_drop_2",
    topicId: "drop",
    question: "Perintah apa yang digunakan untuk menghapus keseluruhan Database bernama 'Sekolah'?",
    options: [
      "DELETE DATABASE Sekolah;",
      "TRUNCATE DATABASE Sekolah;",
      "REMOVE DATABASE Sekolah;",
      "DROP DATABASE Sekolah;"
    ],
    correctAnswerIndex: 3,
    explanation: "Untuk menghapus objek besar tingkat atas seperti Database, kita menggunakan DROP DATABASE."
  },
  {
    id: "q_ddl_drop_3",
    topicId: "drop",
    question: "Jika kamu menjalankan perintah DROP TABLE Siswa;, apa yang akan terjadi pada data murid yang ada di dalamnya?",
    options: [
      "Data murid akan dipindahkan ke tabel cadangan",
      "Data murid akan tetap ada di database, hanya tabelnya yang hilang",
      "Data murid akan ikut lenyap secara permanen bersamaan dengan tabelnya",
      "Data murid akan diubah menjadi format teks biasa"
    ],
    correctAnswerIndex: 2,
    explanation: "Menghancurkan 'wadah' (tabel) berarti menghancurkan juga semua 'isi' (data) yang ada di dalamnya secara permanen."
  },
  {
    id: "q_ddl_drop_4",
    topicId: "drop",
    question: "Analogi yang paling tepat untuk perintah DROP TABLE adalah...",
    options: [
      "Menyapu lantai ruang kelas",
      "Mengganti papan tulis di ruang kelas",
      "Mendatangkan ekskavator untuk meratakan ruang kelas dengan tanah",
      "Mengecat ulang dinding kelas"
    ],
    correctAnswerIndex: 2,
    explanation: "DROP bersifat destruktif/menghancurkan objek secara total (rata dengan tanah)."
  },
  {
    id: "q_ddl_drop_5",
    topicId: "drop",
    question: "Bisakah kita menggunakan DROP TABLE untuk menghapus satu baris data siswa saja?",
    options: [
      "Bisa, asalkan menggunakan klausa WHERE",
      "Bisa, asalkan menyebutkan nama siswanya",
      "Tidak bisa, DROP TABLE hanya digunakan untuk menghapus objek tabel secara keseluruhan",
      "Bisa, asalkan tabelnya tidak dikunci"
    ],
    correctAnswerIndex: 2,
    explanation: "DROP adalah perintah DDL untuk mengelola struktur. Untuk menghapus baris data spesifik, gunakan perintah DML yaitu DELETE."
  },
  {
    id: "q_ddl_drop_6",
    topicId: "drop",
    question: "Apa yang terjadi jika kita mencoba men-DROP tabel yang tidak ada di database?",
    options: [
      "Database akan otomatis membuatkan tabelnya lalu menghapusnya",
      "Database akan mengabaikan perintah tersebut",
      "Akan muncul pesan Error (Table does not exist)",
      "Database akan restart otomatis"
    ],
    correctAnswerIndex: 2,
    explanation: "Mengeksekusi DROP pada objek yang tidak eksis akan menghasilkan Error."
  },
  {
    id: "q_ddl_drop_7",
    topicId: "drop",
    question: "Bagaimana cara menghindari pesan Error saat melakukan DROP jika kita tidak yakin tabel tersebut ada atau tidak?",
    options: [
      "Gunakan IF EXISTS (contoh: DROP TABLE IF EXISTS Siswa;)",
      "Gunakan MAYBE (contoh: DROP TABLE MAYBE Siswa;)",
      "Gunakan TRY DROP (contoh: TRY DROP TABLE Siswa;)",
      "Gunakan IGNORE ERROR (contoh: DROP TABLE Siswa IGNORE ERROR;)"
    ],
    correctAnswerIndex: 0,
    explanation: "Klausa IF EXISTS akan mengecek dulu keberadaan tabel. Jika tabel ada, maka dihapus. Jika tidak ada, perintah diabaikan tanpa memunculkan Error."
  },
  {
    id: "q_ddl_drop_8",
    topicId: "drop",
    question: "Selain TABLE dan DATABASE, objek apa lagi yang bisa dihapus menggunakan perintah DROP?",
    options: [
      "Hanya TABLE dan DATABASE",
      "VIEW, INDEX, PROCEDURE, TRIGGER",
      "ROW (Baris data)",
      "COLUMN (Kolom data secara langsung tanpa ALTER)"
    ],
    correctAnswerIndex: 1,
    explanation: "DROP digunakan untuk semua 'Objek' database. (Catatan: untuk menghapus kolom, DROP harus digabung dengan ALTER TABLE)."
  },
  {
    id: "q_ddl_drop_9",
    topicId: "drop",
    question: "Apakah perintah DROP TABLE memicu (menjalankan) Trigger tipe DELETE yang terpasang di tabel tersebut?",
    options: [
      "Ya, karena isinya ikut terhapus",
      "Tidak, DROP tidak memicu Trigger DML",
      "Ya, asalkan Triggernya bertipe AFTER DELETE",
      "Tergantung jumlah datanya"
    ],
    correctAnswerIndex: 1,
    explanation: "Trigger DELETE hanya bereaksi pada perintah DML (DELETE). Karena DROP adalah DDL yang bekerja di level struktur sistem file, ia tidak memicu Trigger DML sama sekali."
  },
  {
    id: "q_ddl_drop_10",
    topicId: "drop",
    question: "Dalam urutan hierarki, manakah tindakan yang paling 'merusak' (menghapus paling banyak) di database?",
    options: [
      "DELETE FROM Siswa",
      "TRUNCATE TABLE Siswa",
      "DROP TABLE Siswa",
      "DROP DATABASE Sekolah"
    ],
    correctAnswerIndex: 3,
    explanation: "DROP DATABASE akan menghancurkan seluruh wadah utama, yang berarti SEMUA tabel dan data di dalamnya akan lenyap seketika."
  },

  // DML - SELECT
  {
    id: "q_dml_select_1",
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
    id: "q_dml_select_2",
    topicId: "select",
    question: "Karakter apa yang digunakan dalam perintah SELECT untuk mengambil SEMUA kolom dari sebuah tabel?",
    options: [
      "%",
      "#",
      "*",
      "@"
    ],
    correctAnswerIndex: 2,
    explanation: "Tanda bintang (*) adalah wildcard yang berarti 'semua kolom' (Contoh: SELECT * FROM Siswa)."
  },
  {
    id: "q_dml_select_3",
    topicId: "select",
    question: "Klausa apa yang ditambahkan pada SELECT untuk memfilter/menyaring baris data yang ditampilkan?",
    options: [
      "FILTER",
      "IF",
      "WHERE",
      "FIND"
    ],
    correctAnswerIndex: 2,
    explanation: "Klausa WHERE digunakan untuk menentukan kondisi spesifik (Contoh: WHERE jurusan = 'RPL')."
  },
  {
    id: "q_dml_select_4",
    topicId: "select",
    question: "Bagaimana cara mengurutkan hasil pencarian SELECT berdasarkan nama siswa dari A ke Z?",
    options: [
      "SELECT * FROM Siswa ORDER BY nama ASC",
      "SELECT * FROM Siswa SORT nama A-Z",
      "SELECT * FROM Siswa ALPHABET nama",
      "SELECT * FROM Siswa GROUP BY nama"
    ],
    correctAnswerIndex: 0,
    explanation: "ORDER BY digunakan untuk mengurutkan data. ASC (Ascending) berarti dari kecil ke besar / A ke Z."
  },
  {
    id: "q_dml_select_5",
    topicId: "select",
    question: "Kata kunci apa yang digunakan bersama SELECT untuk memastikan hasil yang ditampilkan tidak ada yang kembar/ganda?",
    options: [
      "UNIQUE",
      "DIFFERENT",
      "DISTINCT",
      "SINGLE"
    ],
    correctAnswerIndex: 2,
    explanation: "SELECT DISTINCT akan menghapus duplikasi data pada hasil query. Cocok dipakai misal untuk melihat daftar kota asal siswa tanpa ada yang dobel."
  },
  {
    id: "q_dml_select_6",
    topicId: "select",
    question: "Jika kita ingin mencari siswa yang namanya diawali dengan huruf 'B', kita bisa menggunakan klausa LIKE. Manakah sintaks yang benar?",
    options: [
      "WHERE nama LIKE 'B*'",
      "WHERE nama LIKE 'B%'",
      "WHERE nama LIKE 'B_'",
      "WHERE nama LIKE '%B'"
    ],
    correctAnswerIndex: 1,
    explanation: "Karakter '%' dalam LIKE berarti 'karakter apa saja dan berapa saja panjangnya'. Jadi 'B%' artinya depan B, belakangnya bebas."
  },
  {
    id: "q_dml_select_7",
    topicId: "select",
    question: "Operator apa yang digunakan dalam WHERE untuk menggabungkan dua kondisi yang KEDUANYA harus terpenuhi?",
    options: [
      "OR",
      "AND",
      "BOTH",
      "PLUS"
    ],
    correctAnswerIndex: 1,
    explanation: "Operator AND memastikan baris data hanya akan diambil jika kondisi pertama DAN kondisi kedua bernilai benar."
  },
  {
    id: "q_dml_select_8",
    topicId: "select",
    question: "Klausa apa yang digunakan untuk membatasi jumlah baris yang ditampilkan (misal: hanya ingin melihat 5 siswa teratas)?",
    options: [
      "MAX 5",
      "TOP 5 / LIMIT 5",
      "ONLY 5",
      "STOP 5"
    ],
    correctAnswerIndex: 1,
    explanation: "Tergantung databasenya, MySQL menggunakan LIMIT 5, sedangkan SQL Server menggunakan SELECT TOP 5."
  },
  {
    id: "q_dml_select_9",
    topicId: "select",
    question: "Bagaimana cara mengganti nama kolom HANYA saat ditampilkan di hasil pencarian (memberi nama alias)?",
    options: [
      "SELECT nama ALIAS nama_lengkap",
      "SELECT nama RENAME nama_lengkap",
      "SELECT nama AS nama_lengkap",
      "SELECT nama TO nama_lengkap"
    ],
    correctAnswerIndex: 2,
    explanation: "Kata kunci AS digunakan untuk memberikan Alias (nama samaran) pada kolom di hasil query, tanpa mengubah nama aslinya di tabel."
  },
  {
    id: "q_dml_select_10",
    topicId: "select",
    question: "Apakah perintah SELECT akan merubah data asli di dalam database?",
    options: [
      "Ya, jika kita menggunakan alias",
      "Ya, jika datanya sangat banyak",
      "Tidak, SELECT hanya bersifat membaca/menampilkan data saja (Read-only)",
      "Tidak, kecuali kita tambahkan kata UPDATE"
    ],
    correctAnswerIndex: 2,
    explanation: "SELECT adalah operasi baca (Read) yang 100% aman dan tidak akan merusak atau memodifikasi data asli di database."
  },

  // DML - INSERT
  {
    id: "q_dml_insert_1",
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
    id: "q_dml_insert_2",
    topicId: "insert",
    question: "Bagaimana sintaks dasar yang paling aman untuk melakukan INSERT ke tabel?",
    options: [
      "INSERT Siswa ('Budi', 'TKJ');",
      "INSERT INTO Siswa (nama, jurusan) VALUES ('Budi', 'TKJ');",
      "INSERT VALUES ('Budi', 'TKJ') INTO Siswa;",
      "ADD ROW Siswa VALUES ('Budi', 'TKJ');"
    ],
    correctAnswerIndex: 1,
    explanation: "Menyebutkan nama kolom secara eksplisit (nama, jurusan) sebelum klausa VALUES sangat disarankan agar data masuk ke kolom yang tepat, meskipun ada perubahan struktur tabel."
  },
  {
    id: "q_dml_insert_3",
    topicId: "insert",
    question: "Apakah kita bisa memasukkan lebih dari satu baris data sekaligus dalam satu perintah INSERT?",
    options: [
      "Tidak bisa, harus satu per satu",
      "Bisa, dengan memisahkan VALUES pakai tanda koma (contoh: VALUES (1), (2), (3))",
      "Bisa, tapi harus diulang kata INSERT-nya",
      "Tergantung izin admin"
    ],
    correctAnswerIndex: 1,
    explanation: "SQL mendukung 'Bulk Insert' dimana kita bisa memasukkan banyak baris sekaligus dengan menyambung kumpulan nilai menggunakan tanda koma setelah klausa VALUES."
  },
  {
    id: "q_dml_insert_4",
    topicId: "insert",
    question: "Apa yang terjadi jika kita tidak mengisi kolom yang memiliki aturan (constraint) NOT NULL saat melakukan INSERT?",
    options: [
      "Data tetap masuk, tapi isinya dibiarkan kosong",
      "Database akan mengisinya dengan angka 0",
      "Database akan menolak perintah INSERT tersebut dan memunculkan Error",
      "Database akan meminta kita mengetik ulang"
    ],
    correctAnswerIndex: 2,
    explanation: "Constraint NOT NULL bertugas sebagai penjaga gerbang. Jika ada data yang kosong pada kolom tersebut, transaksi INSERT akan langsung digagalkan (Error)."
  },
  {
    id: "q_dml_insert_5",
    topicId: "insert",
    question: "Tipe data String (Teks) seperti nama siswa pada nilai VALUES harus diapit oleh tanda apa?",
    options: [
      "Tanda kurung siku [ ]",
      "Tanda kurung kurawal { }",
      "Tanda kutip tunggal ' '",
      "Tidak perlu tanda apa-apa"
    ],
    correctAnswerIndex: 2,
    explanation: "Dalam standar SQL, tipe data teks (string) dan tanggal (date) wajib diapit oleh tanda kutip tunggal (contoh: 'Budi')."
  },
  {
    id: "q_dml_insert_6",
    topicId: "insert",
    question: "Jika kolom 'id_siswa' diatur sebagai AUTO_INCREMENT, apakah kita wajib mengisi nilainya saat melakukan INSERT?",
    options: [
      "Ya, wajib diisi manual",
      "Tidak, kita bisa mengabaikan kolom tersebut dan database akan mengisi angkanya secara otomatis",
      "Wajib diisi dengan angka 0",
      "Tergantung panjang namanya"
    ],
    correctAnswerIndex: 1,
    explanation: "Fitur Auto Increment akan secara otomatis memberikan nomor urut (1, 2, 3, dst) sehingga kita tidak perlu menyebutkannya di klausa INSERT."
  },
  {
    id: "q_dml_insert_7",
    topicId: "insert",
    question: "Apa fungsi dari perintah 'INSERT INTO ... SELECT ...'?",
    options: [
      "Menyalin data dari tabel satu dan memasukkannya ke tabel lain secara massal",
      "Mencari data yang baru saja di-insert",
      "Menampilkan menu insert",
      "Menghapus data yang salah"
    ],
    correctAnswerIndex: 0,
    explanation: "Ini adalah cara cepat untuk memindahkan/menduplikasi banyak data dari satu tabel ke tabel lain yang strukturnya mirip."
  },
  {
    id: "q_dml_insert_8",
    topicId: "insert",
    question: "Jika kita ingin memasukkan nilai 'kosong' (tidak ada data) ke sebuah kolom, kata kunci apa yang digunakan di dalam VALUES?",
    options: [
      "'EMPTY'",
      "0",
      "NULL",
      "BLANK"
    ],
    correctAnswerIndex: 2,
    explanation: "Kata kunci NULL tanpa tanda kutip digunakan untuk merepresentasikan ketiadaan data di suatu kolom."
  },
  {
    id: "q_dml_insert_9",
    topicId: "insert",
    question: "Bagaimana cara kita tahu bahwa perintah INSERT kita berhasil?",
    options: [
      "Tabel akan berkedip",
      "Database biasanya akan mengembalikan pesan seperti '1 row(s) affected'",
      "Muncul suara notifikasi",
      "Komputer akan restart"
    ],
    correctAnswerIndex: 1,
    explanation: "Sebagian besar aplikasi klien database akan memberikan umpan balik berupa jumlah baris yang berhasil terpengaruh (affected) oleh perintah DML."
  },
  {
    id: "q_dml_insert_10",
    topicId: "insert",
    question: "Analogi proses INSERT di sekolah adalah...",
    options: [
      "Guru menghapus nama siswa dari buku absen",
      "Siswa pindah jurusan",
      "Guru Tata Usaha menulis nama siswa baru di baris paling bawah pada buku Induk",
      "Tukang bangunan mengecat sekolah"
    ],
    correctAnswerIndex: 2,
    explanation: "INSERT adalah proses mendaftarkan entitas baru ke dalam sistem yang sudah ada."
  },

  // DML - UPDATE
  {
    id: "q_dml_update_1",
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
    id: "q_dml_update_2",
    topicId: "update",
    question: "Kata kunci apa yang selalu menemani UPDATE untuk menentukan kolom mana yang mau diubah nilainya?",
    options: [
      "CHANGE",
      "MODIFY",
      "SET",
      "PUT"
    ],
    correctAnswerIndex: 2,
    explanation: "Sintaks dasarnya adalah: UPDATE nama_tabel SET nama_kolom = 'nilai_baru'."
  },
  {
    id: "q_dml_update_3",
    topicId: "update",
    question: "Apakah kita bisa mengubah lebih dari satu kolom sekaligus dalam satu perintah UPDATE?",
    options: [
      "Bisa, dengan memisahkannya menggunakan koma (SET kolom1='A', kolom2='B')",
      "Bisa, dengan menggunakan operator AND",
      "Tidak bisa, harus menjalankan perintah UPDATE berulang kali",
      "Hanya bisa jika menggunakan hak akses admin"
    ],
    correctAnswerIndex: 0,
    explanation: "Kita bisa mengupdate banyak kolom sekaligus dengan memisahkannya pakai tanda koma setelah klausa SET."
  },
  {
    id: "q_dml_update_4",
    topicId: "update",
    question: "Siswa dengan ID 10 pindah ke jurusan 'TKJ'. Manakah perintah UPDATE yang paling tepat dan aman?",
    options: [
      "UPDATE Siswa SET jurusan = 'TKJ';",
      "UPDATE Siswa SET jurusan = 'TKJ' WHERE id_siswa = 10;",
      "UPDATE Siswa WHERE id_siswa = 10 SET jurusan = 'TKJ';",
      "CHANGE Siswa SET jurusan = 'TKJ' WHERE id = 10;"
    ],
    correctAnswerIndex: 1,
    explanation: "Selalu gunakan Primary Key (seperti id_siswa) di dalam klausa WHERE untuk memastikan kita hanya mengupdate orang yang benar-benar spesifik."
  },
  {
    id: "q_dml_update_5",
    topicId: "update",
    question: "Mengapa menggunakan nama siswa sebagai kondisi di klausa WHERE (contoh: WHERE nama='Budi') saat melakukan UPDATE dianggap kurang aman?",
    options: [
      "Karena database tidak bisa membaca teks",
      "Karena nama 'Budi' terlalu pendek",
      "Karena mungkin ada lebih dari 1 siswa yang bernama 'Budi', sehingga Budi yang lain akan ikut berubah",
      "Karena melanggar aturan DDL"
    ],
    correctAnswerIndex: 2,
    explanation: "Nama orang tidak unik. Oleh karena itu, modifikasi data (Update/Delete) harus selalu berpatokan pada kunci unik (Primary Key) seperti ID atau NISN."
  },
  {
    id: "q_dml_update_6",
    topicId: "update",
    question: "Bagaimana cara melakukan operasi matematika langsung di dalam UPDATE? Misal, menaikkan gaji semua guru sebesar 500000.",
    options: [
      "UPDATE Guru SET gaji = gaji + 500000;",
      "UPDATE Guru SET gaji = 500000;",
      "UPDATE Guru ADD gaji = 500000;",
      "CALCULATE Guru gaji + 500000;"
    ],
    correctAnswerIndex: 0,
    explanation: "SQL mendukung operasi aritmatika. Kita bisa mengambil nilai lama (gaji), menambahkannya, lalu menyimpannya kembali ke kolom tersebut."
  },
  {
    id: "q_dml_update_7",
    topicId: "update",
    question: "Apa yang terjadi jika perintah UPDATE dengan WHERE tidak menemukan satupun baris yang cocok?",
    options: [
      "Database akan crash",
      "Muncul pesan Error fatal",
      "Perintah sukses dieksekusi, tapi mengembalikan hasil '0 rows affected' (tidak ada data yang diubah)",
      "Database akan otomatis membuat data baru (Insert)"
    ],
    correctAnswerIndex: 2,
    explanation: "Jika filter WHERE tidak cocok dengan baris manapun, sistem menganggapnya normal dan hanya memberi info bahwa 0 baris yang terkena dampak."
  },
  {
    id: "q_dml_update_8",
    topicId: "update",
    question: "Analogi proses UPDATE di dunia nyata adalah...",
    options: [
      "Membeli buku baru",
      "Membakar buku lama",
      "Menggunakan penghapus/tipe-x untuk mengganti jawaban di kertas ujian",
      "Membuat rak buku baru"
    ],
    correctAnswerIndex: 2,
    explanation: "UPDATE adalah proses merevisi atau memperbaiki nilai yang sudah ada sebelumnya (mengganti nilai lama dengan nilai baru)."
  },
  {
    id: "q_dml_update_9",
    topicId: "update",
    question: "Bolehkah kita meng-UPDATE nilai dari Primary Key (misal: merubah ID siswa)?",
    options: [
      "Sangat disarankan untuk dilakukan setiap hari",
      "Bisa dilakukan, tapi secara best practice SANGAT TIDAK DISARANKAN karena bisa merusak relasi dengan tabel lain",
      "Mutlak tidak bisa di database manapun",
      "Hanya bisa dilakukan di malam hari"
    ],
    correctAnswerIndex: 1,
    explanation: "Primary Key adalah pilar utama relasi. Jika diubah, tabel lain yang memiliki Foreign Key ke ID tersebut bisa menjadi 'yatim piatu' (Orphaned Record)."
  },
  {
    id: "q_dml_update_10",
    topicId: "update",
    question: "Jika tabel sedang di-UPDATE, konsep apa dalam database yang akan mengunci (Lock) baris tersebut agar tidak bisa diubah oleh orang lain di waktu yang sama?",
    options: [
      "Normalization",
      "Transaction / Locking",
      "Indexing",
      "Triggering"
    ],
    correctAnswerIndex: 1,
    explanation: "Database menggunakan mekanisme Locking selama proses Transaksi DML untuk mencegah data bertabrakan (Race Condition) jika diedit oleh banyak orang bersamaan."
  },

  // DML - DELETE
  {
    id: "q_dml_delete_1",
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
  {
    id: "q_dml_delete_2",
    topicId: "delete",
    question: "Sama seperti UPDATE, apa bahayanya jika kita menjalankan perintah DELETE FROM Siswa; tanpa klausa WHERE?",
    options: [
      "Tidak ada bahaya",
      "Hanya baris pertama yang dihapus",
      "Tabelnya akan ikut terhapus",
      "SEMUA data murid di tabel Siswa akan terhapus tak bersisa"
    ],
    correctAnswerIndex: 3,
    explanation: "Tanpa WHERE, perintah DELETE akan membasmi semua baris data dari tabel tersebut."
  },
  {
    id: "q_dml_delete_3",
    topicId: "delete",
    question: "Jika kita menghapus data siswa dengan DELETE, apakah kerangka tabelnya (kolom-kolomnya) akan ikut hilang?",
    options: [
      "Ya, ikut lenyap",
      "Tidak, struktur tabel tetap utuh, hanya isinya yang berkurang",
      "Tergantung jenis databasenya",
      "Tabelnya akan disembunyikan sementara"
    ],
    correctAnswerIndex: 1,
    explanation: "DELETE adalah operasi DML yang hanya beroperasi di tingkat 'Isi Data' (Record), bukan di tingkat DDL yang mengatur struktur tabel."
  },
  {
    id: "q_dml_delete_4",
    topicId: "delete",
    question: "Apa yang terjadi jika kita mencoba men-DELETE sebuah jurusan, padahal masih ada siswa yang terdaftar di jurusan tersebut (terhubung lewat Foreign Key)?",
    options: [
      "Jurusan akan terhapus, data siswanya dibiarkan saja",
      "Siswanya akan otomatis terhapus juga",
      "Database akan memunculkan Error 'Foreign Key Constraint Violation' dan menggagalkan proses DELETE",
      "Tabel siswa akan di-TRUNCATE otomatis"
    ],
    correctAnswerIndex: 2,
    explanation: "Database relasional menjaga integritas data. Ia tidak akan membiarkan kita menghapus data Induk jika data Anak masih menggunakannya."
  },
  {
    id: "q_dml_delete_5",
    topicId: "delete",
    question: "Untuk menghindari masalah di soal sebelumnya (Error saat hapus Induk), pengaturan Foreign Key apa yang bisa digunakan agar anak-anaknya ikut terhapus otomatis?",
    options: [
      "ON DELETE CASCADE",
      "ON DELETE IGNORE",
      "ON DELETE BLOCK",
      "ON DELETE NULL"
    ],
    correctAnswerIndex: 0,
    explanation: "ON DELETE CASCADE adalah aturan yang berarti 'Jika Induk dihapus, hapus juga semua Anaknya secara beruntun ke bawah'."
  },
  {
    id: "q_dml_delete_6",
    topicId: "delete",
    question: "Dalam konteks keamanan dan rekam jejak, banyak perusahaan tidak pernah menggunakan perintah DELETE. Sebagai gantinya, mereka menambahkan kolom 'status_aktif'. Metode ini disebut...",
    options: [
      "Hard Delete",
      "Soft Delete",
      "Fake Delete",
      "Shadow Delete"
    ],
    correctAnswerIndex: 1,
    explanation: "Soft Delete adalah teknik menyembunyikan data (misal: UPDATE status = 'nonaktif') alih-alih menghapusnya dari hardisk. Ini berguna untuk riwayat data."
  },
  {
    id: "q_dml_delete_7",
    topicId: "delete",
    question: "Manakah sintaks yang paling benar untuk menghapus siswa bernama Andi?",
    options: [
      "DELETE * FROM Siswa WHERE nama = 'Andi';",
      "DELETE FROM Siswa WHERE nama = 'Andi';",
      "DELETE ROW FROM Siswa WHERE nama = 'Andi';",
      "DELETE Siswa WHERE nama = 'Andi';"
    ],
    correctAnswerIndex: 1,
    explanation: "Perhatikan bahwa dalam standar SQL, kita TIDAK menggunakan tanda bintang (*) pada perintah DELETE. Cukup DELETE FROM nama_tabel."
  },
  {
    id: "q_dml_delete_8",
    topicId: "delete",
    question: "Dibandingkan dengan TRUNCATE, mengapa proses DELETE pada jutaan data terasa sangat lambat?",
    options: [
      "Karena DELETE mengecek data ke internet dulu",
      "Karena DELETE mencatat setiap baris yang dihapus ke dalam Transaction Log satu per satu agar bisa di-Rollback",
      "Karena komputer kurang RAM",
      "Karena DELETE harus mengenkripsi data sebelum menghapus"
    ],
    correctAnswerIndex: 1,
    explanation: "Proses pencatatan log per baris ini membuat DELETE aman karena bisa dibatalkan (di-Undo), namun menjadikannya sangat lambat untuk data berjumlah masif."
  },
  {
    id: "q_dml_delete_9",
    topicId: "delete",
    question: "Apa bedanya DELETE dengan klausa DROP COLUMN?",
    options: [
      "Sama saja, cuma beda bahasa",
      "DELETE menghapus baris horizontal (data/record), DROP COLUMN menghapus kolom vertikal (struktur tabel)",
      "DELETE menghapus tabel, DROP COLUMN menghapus baris",
      "DELETE untuk angka, DROP COLUMN untuk teks"
    ],
    correctAnswerIndex: 1,
    explanation: "DELETE bekerja pada dimensi baris (Rows), sedangkan DROP COLUMN membuang dimensi kolom (Columns)."
  },
  {
    id: "q_dml_delete_10",
    topicId: "delete",
    question: "Analogi perintah DELETE di lingkungan sekolah adalah...",
    options: [
      "Membobol tembok sekolah",
      "Mencoret nama siswa yang DO (Drop Out) dari buku absensi kelas dengan tinta merah",
      "Membangun kelas baru",
      "Mengecat meja"
    ],
    correctAnswerIndex: 1,
    explanation: "DELETE adalah proses membuang entitas yang sudah tidak relevan lagi dari sistem pendaftaran."
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

  // JOINs - INNER JOIN
  {
    id: "q_join_inner_1",
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
    id: "q_join_inner_2",
    topicId: "inner-join",
    question: "Klausa apa yang digunakan untuk menentukan kolom mana yang akan dijadikan penghubung antar dua tabel saat melakukan JOIN?",
    options: [
      "WHERE",
      "ON",
      "CONNECT",
      "LINK"
    ],
    correctAnswerIndex: 1,
    explanation: "Klausa ON digunakan setelah nama tabel JOIN untuk menspesifikasikan kolom kunci. Contoh: INNER JOIN Jurusan ON Siswa.id_jurusan = Jurusan.id_jurusan."
  },
  {
    id: "q_join_inner_3",
    topicId: "inner-join",
    question: "Terdapat tabel 'Siswa' (5 murid, 1 belum punya kelas) dan tabel 'Kelas' (3 kelas). Jika di-INNER JOIN, berapa jumlah baris maksimal yang mungkin muncul?",
    options: [
      "5 baris",
      "4 baris",
      "8 baris",
      "15 baris"
    ],
    correctAnswerIndex: 1,
    explanation: "Karena 1 murid belum punya kelas (tidak ada pasangan), murid tersebut akan dibuang dari hasil INNER JOIN. Sisanya 4 murid yang punya pasangan."
  },
  {
    id: "q_join_inner_4",
    topicId: "inner-join",
    question: "Jika tabel A dan tabel B tidak memiliki satu pun data yang cocok pada kolom penghubung, apa hasil dari INNER JOIN?",
    options: [
      "Error",
      "Tabel A ditampilkan semua dengan NULL",
      "Menghasilkan tabel kosong (0 baris)",
      "Tabel B ditampilkan semua"
    ],
    correctAnswerIndex: 2,
    explanation: "INNER JOIN mensyaratkan kecocokan mutlak. Jika tidak ada yang cocok, hasilnya adalah himpunan kosong."
  },
  {
    id: "q_join_inner_5",
    topicId: "inner-join",
    question: "Apakah kata kunci 'INNER' wajib ditulis? (Misal: SELECT * FROM A JOIN B ON ...)",
    options: [
      "Ya, wajib ditulis",
      "Tidak, menulis 'JOIN' saja secara default akan dianggap sebagai INNER JOIN",
      "Tidak, defaultnya adalah LEFT JOIN",
      "Tergantung sistem operasinya"
    ],
    correctAnswerIndex: 1,
    explanation: "Dalam standar SQL, kata JOIN berdiri sendiri adalah alias (kependekan) dari INNER JOIN."
  },

  // JOINs - LEFT JOIN
  {
    id: "q_join_left_1",
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
    id: "q_join_left_2",
    topicId: "left-join",
    question: "Pada hasil LEFT JOIN, apa yang ditampilkan pada kolom tabel kanan jika data dari tabel kiri tidak menemukan pasangan?",
    options: [
      "Angka 0",
      "Teks 'KOSONG'",
      "Nilai NULL",
      "Baris tersebut tidak ditampilkan"
    ],
    correctAnswerIndex: 2,
    explanation: "Database menggunakan NULL untuk merepresentasikan data tabel kanan yang 'tidak ada/tidak ditemukan pasangannya'."
  },
  {
    id: "q_join_left_3",
    topicId: "left-join",
    question: "Jika tabel 'Guru' (kiri) memiliki 10 baris, dan di-LEFT JOIN dengan tabel 'Ekskul' (kanan), berapakah MINIMAL jumlah baris yang akan dihasilkan?",
    options: [
      "0 baris",
      "10 baris",
      "Tergantung yang cocok",
      "Tak terhingga"
    ],
    correctAnswerIndex: 1,
    explanation: "Karena ini LEFT JOIN, SEMUA data dari tabel kiri (10 Guru) pasti akan ditampilkan, meskipun mereka tidak mengajar ekskul sama sekali."
  },
  {
    id: "q_join_left_4",
    topicId: "left-join",
    question: "Bagaimana cara mencari Siswa yang BELUM punya Kelas menggunakan LEFT JOIN?",
    options: [
      "LEFT JOIN Kelas ON ... WHERE Kelas.id IS NULL",
      "LEFT JOIN Kelas ON ... WHERE Siswa.id IS NULL",
      "LEFT JOIN Kelas ON ... WHERE Kelas.id = 0",
      "Tidak bisa menggunakan LEFT JOIN"
    ],
    correctAnswerIndex: 0,
    explanation: "Dengan memfilter hasil LEFT JOIN dimana kolom tabel kanan (Kelas) bernilai NULL, kita bisa menemukan data kiri (Siswa) yang tidak punya pasangan/kelas."
  },
  {
    id: "q_join_left_5",
    topicId: "left-join",
    question: "Nama lain dari LEFT JOIN dalam standar SQL adalah...",
    options: [
      "LEFT INNER JOIN",
      "LEFT OUTER JOIN",
      "LEFT FULL JOIN",
      "LEFT CROSS JOIN"
    ],
    correctAnswerIndex: 1,
    explanation: "Keluarga LEFT, RIGHT, dan FULL masuk dalam kategori OUTER JOIN (mengambil data di luar irisan)."
  },

  // JOINs - RIGHT JOIN
  {
    id: "q_join_right_1",
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
    id: "q_join_right_2",
    topicId: "right-join",
    question: "Secara logika, 'A RIGHT JOIN B' akan menghasilkan output yang sama persis dengan...",
    options: [
      "B LEFT JOIN A",
      "A LEFT JOIN B",
      "A INNER JOIN B",
      "B INNER JOIN A"
    ],
    correctAnswerIndex: 0,
    explanation: "RIGHT JOIN jarang digunakan karena developer biasanya lebih suka membalik urutan tabelnya dan menggunakan LEFT JOIN agar lebih mudah dibaca dari kiri ke kanan."
  },
  {
    id: "q_join_right_3",
    topicId: "right-join",
    question: "Pada RIGHT JOIN, tabel manakah yang bertindak sebagai tabel utama/prioritas yang semua datanya akan ditampilkan?",
    options: [
      "Tabel yang disebutkan pertama (setelah FROM)",
      "Tabel yang disebutkan kedua (setelah JOIN)",
      "Kedua tabel",
      "Tabel yang datanya paling banyak"
    ],
    correctAnswerIndex: 1,
    explanation: "Tabel yang posisinya di sebelah kanan kata 'JOIN' akan menjadi prioritas utama."
  },
  {
    id: "q_join_right_4",
    topicId: "right-join",
    question: "Jika tabel A (3 baris) di-RIGHT JOIN dengan tabel B (5 baris), dan tidak ada satupun data yang cocok, apa hasilnya?",
    options: [
      "3 baris tabel A dengan NULL di sisi B",
      "5 baris tabel B dengan NULL di sisi A",
      "0 baris",
      "8 baris"
    ],
    correctAnswerIndex: 1,
    explanation: "Karena tabel B (kanan) adalah prioritas, semua 5 baris B akan tampil, sedangkan kolom dari tabel A akan diisi NULL."
  },
  {
    id: "q_join_right_5",
    topicId: "right-join",
    question: "Apa tujuan utama menggunakan RIGHT JOIN (atau LEFT JOIN) alih-alih INNER JOIN?",
    options: [
      "Untuk mempercepat proses query",
      "Untuk mencegah Error",
      "Untuk melihat 'Data yang Hilang/Tidak Punya Pasangan' disamping data yang cocok",
      "Untuk menghapus duplikasi"
    ],
    correctAnswerIndex: 2,
    explanation: "OUTER JOIN sangat berguna untuk menemukan anomali data (misal: Buku yang belum pernah dipinjam, atau Pelanggan yang belum pernah belanja)."
  },

  // JOINs - FULL OUTER JOIN
  {
    id: "q_join_full_1",
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
  {
    id: "q_join_full_2",
    topicId: "full-outer-join",
    question: "FULL OUTER JOIN adalah gabungan dari dua jenis JOIN, yaitu...",
    options: [
      "INNER JOIN dan CROSS JOIN",
      "LEFT JOIN dan RIGHT JOIN",
      "LEFT JOIN dan INNER JOIN",
      "RIGHT JOIN dan INNER JOIN"
    ],
    correctAnswerIndex: 1,
    explanation: "Ia mengambil semua dari kiri (LEFT) ditambah semua dari kanan (RIGHT), lalu menggabungkannya."
  },
  {
    id: "q_join_full_3",
    topicId: "full-outer-join",
    question: "Apakah perintah FULL OUTER JOIN didukung secara bawaan (native) di MySQL?",
    options: [
      "Ya, didukung penuh",
      "Tidak, MySQL mensimulasikannya dengan menggabungkan LEFT JOIN dan RIGHT JOIN menggunakan kata kunci UNION",
      "Tidak, MySQL hanya mendukung INNER JOIN",
      "Ya, tapi butuh plugin"
    ],
    correctAnswerIndex: 1,
    explanation: "MySQL adalah salah satu RDBMS yang tidak memiliki sintaks 'FULL OUTER JOIN'. Solusinya adalah melakukan LEFT JOIN, lalu di-UNION dengan RIGHT JOIN."
  },
  {
    id: "q_join_full_4",
    topicId: "full-outer-join",
    question: "Pada hasil FULL OUTER JOIN, di mana saja kita bisa menemukan nilai NULL?",
    options: [
      "Hanya di kolom tabel Kiri",
      "Hanya di kolom tabel Kanan",
      "Bisa di kolom tabel Kiri maupun tabel Kanan",
      "Tidak ada NULL sama sekali"
    ],
    correctAnswerIndex: 2,
    explanation: "Jika data kiri tak punya pasangan, sisi kanan akan NULL. Jika data kanan tak punya pasangan, sisi kiri yang akan NULL."
  },
  {
    id: "q_join_full_5",
    topicId: "full-outer-join",
    question: "Analogi FULL OUTER JOIN saat acara perpisahan sekolah adalah...",
    options: [
      "Hanya memanggil siswa dan orang tua yang datang berpasangan",
      "Memanggil semua siswa (meski ortu tidak datang) dan memanggil semua orang tua (meski anaknya tidak ikut acara)",
      "Hanya memanggil siswa saja",
      "Hanya memanggil orang tua saja"
    ],
    correctAnswerIndex: 1,
    explanation: "Semua entitas dari kedua belah pihak dilibatkan secara penuh tanpa diskriminasi kecocokan."
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