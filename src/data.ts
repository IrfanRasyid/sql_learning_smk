import { Database, Table, Search, PlusCircle, Edit, Trash2, Key, Link, BarChart, Layers } from 'lucide-react';

export interface TableInfo {
  name: string;
  columns: string[];
  rows: any[][];
  highlightRows?: number[];
  highlightCells?: { row: number; col: number; color: string }[];
  strikethroughRows?: number[];
}

export interface VisInfo {
  type: 'single' | 'before-after' | 'join';
  tables: TableInfo[];
  resultTable?: TableInfo;
  explanation?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  detailedDescription: string[];
  analogy: string;
  icon: any;
  subTopics?: Topic[];
  sqlExample?: string;
  visualization?: VisInfo;
}

export const roadmapData: Topic[] = [
  {
    id: "rdbms",
    title: "Relational Database",
    description: "Sistem manajemen basis data relasional (RDBMS) adalah program yang memungkinkan kamu membuat, memperbarui, dan mengelola basis data relasional. Bayangkan seperti aplikasi Excel yang saling terhubung.",
    detailedDescription: [
      "Database Relasional menyimpan data dalam bentuk tabel-tabel (terdiri dari baris dan kolom).",
      "Setiap tabel memiliki kunci utama (Primary Key) untuk membedakan setiap baris datanya.",
      "Tabel-tabel ini bisa saling dihubungkan (berelasi) menggunakan kunci tamu (Foreign Key), sehingga tidak ada data yang berulang-ulang disimpan."
    ],
    analogy: "Bayangkan sekolah SMK kamu. Ada daftar siswa (tabel Siswa) dan ada daftar jurusan (tabel Jurusan). Daripada nulis panjang-panjang 'Teknik Komputer Jaringan' di setiap nama siswa, kita cukup kasih kode 'TKJ' yang nantinya terhubung ke buku khusus daftar jurusan.",
    icon: Database,
    visualization: {
      type: 'single',
      tables: [
        {
          name: "Siswa",
          columns: ["id_siswa (PK)", "nama", "id_jurusan (FK)"],
          rows: [
            [1, "Budi", "J01"],
            [2, "Siti", "J02"],
            [3, "Andi", "J01"]
          ],
          highlightCells: [
            { row: 0, col: 2, color: "bg-blue-100 font-bold text-blue-800" },
            { row: 1, col: 2, color: "bg-green-100 font-bold text-green-800" },
            { row: 2, col: 2, color: "bg-blue-100 font-bold text-blue-800" }
          ]
        },
        {
          name: "Jurusan",
          columns: ["id_jurusan (PK)", "nama_jurusan"],
          rows: [
            ["J01", "Rekayasa Perangkat Lunak"],
            ["J02", "Teknik Komputer Jaringan"]
          ],
          highlightCells: [
            { row: 0, col: 0, color: "bg-blue-100 font-bold text-blue-800" },
            { row: 1, col: 0, color: "bg-green-100 font-bold text-green-800" }
          ]
        }
      ],
      explanation: "Perhatikan bagaimana kolom id_jurusan di tabel Siswa terhubung dengan id_jurusan di tabel Jurusan."
    }
  },
  {
    id: "ddl",
    title: "Data Definition Language (DDL)",
    description: "Perintah SQL untuk mendefinisikan dan memodifikasi 'struktur' database. Di sini kita tidak berurusan dengan isi datanya, melainkan dengan 'wadah' tempat data itu akan disimpan.",
    detailedDescription: [
      "DDL ibarat fondasi bangunan. Sebelum kamu bisa memasukkan data (seperti perabot rumah), kamu harus membuat ruangannya (tabel) terlebih dahulu.",
      "Perintah DDL bersifat otomatis menyimpan perubahan (auto-commit), artinya ketika kamu mengeksekusinya, struktur database akan langsung berubah secara permanen.",
      "Ada 4 perintah utama dalam DDL: CREATE, ALTER, DROP, dan TRUNCATE."
    ],
    analogy: "Ibarat anak jurusan Bangunan (Teknik Sipil) yang lagi merancang tata letak gedung sekolah. DDL itu proses menggambar blueprint, membangun pondasi ruang kelas (CREATE), membobol tembok untuk memperluas ruangan (ALTER), atau merobohkan gedung yang sudah tua (DROP).",
    icon: Table,
    subTopics: [
      {
        id: "create",
        title: "CREATE (Membuat)",
        description: "Digunakan untuk membuat objek baru di database, seperti membuat tabel baru.",
        detailedDescription: [
          "Sintaks dasarnya: CREATE TABLE nama_tabel (nama_kolom tipe_data).",
          "Saat membuat tabel, kita harus menentukan nama kolom, tipe datanya (angka, teks, tanggal), dan aturan-aturannya (constraints)."
        ],
        analogy: "Ini seperti tukang bangunan yang baru selesai membangun satu ruang kelas kosong (Tabel Siswa). Ruangannya ada, kursinya (kolom) sudah disiapkan posisinya, tapi belum ada murid (data) yang masuk.",
        icon: PlusCircle,
        sqlExample: "CREATE TABLE Siswa (\n  id_siswa INT PRIMARY KEY,\n  nama VARCHAR(50),\n  kelas VARCHAR(10)\n);",
        visualization: {
          type: 'single',
          tables: [
            {
              name: "Struktur Tabel: Siswa (Baru Dibuat)",
              columns: ["Nama Kolom", "Tipe Data", "Keterangan"],
              rows: [
                ["id_siswa", "INT", "Primary Key (Unik)"],
                ["nama", "VARCHAR(50)", "Teks"],
                ["kelas", "VARCHAR(10)", "Teks"]
              ]
            }
          ],
          explanation: "Perintah CREATE menghasilkan sebuah 'kerangka' tabel kosong yang siap diisi data."
        }
      },
      {
        id: "alter",
        title: "ALTER (Mengubah Struktur)",
        description: "Digunakan untuk memodifikasi struktur tabel yang sudah ada.",
        detailedDescription: [
          "Bisa digunakan untuk ADD (menambah kolom baru).",
          "Bisa digunakan untuk DROP COLUMN (menghapus kolom yang sudah ada).",
          "Bisa digunakan untuk MODIFY/ALTER COLUMN (mengubah tipe data sebuah kolom)."
        ],
        analogy: "Ruang kelasnya (Tabel) sudah jadi. Tapi kepala sekolah minta ada tambahan fasilitas 'Nomor Loker' untuk setiap siswa. Jadi tukang bangunannya datang lagi untuk merombak dan menambah loker (ALTER ADD Column) di kelas tersebut.",
        icon: Edit,
        sqlExample: "ALTER TABLE Siswa \nADD no_hp VARCHAR(15);",
        visualization: {
          type: 'before-after',
          tables: [
            {
              name: "Struktur Siswa (Sebelum ALTER)",
              columns: ["Kolom"],
              rows: [
                ["id_siswa"],
                ["nama"],
                ["kelas"]
              ]
            }
          ],
          resultTable: {
            name: "Struktur Siswa (Sesudah ALTER)",
            columns: ["Kolom"],
            rows: [
              ["id_siswa"],
              ["nama"],
              ["kelas"],
              ["no_hp (Kolom Baru)"]
            ],
            highlightCells: [{ row: 3, col: 0, color: "bg-yellow-100 text-yellow-800 font-bold" }]
          },
          explanation: "Kolom baru (no_hp) berhasil ditambahkan ke dalam kerangka tabel yang sudah ada."
        }
      },
      {
        id: "truncate",
        title: "TRUNCATE (Mengosongkan)",
        description: "Digunakan untuk menghapus SEMUA baris/data di dalam sebuah tabel, tetapi struktur tabelnya tetap dibiarkan utuh.",
        detailedDescription: [
          "TRUNCATE jauh lebih cepat daripada DELETE karena ia tidak merekam aktivitas penghapusan per baris.",
          "Setelah di-TRUNCATE, tabel akan kembali kosong bersih seperti baru pertama kali di-CREATE."
        ],
        analogy: "Ini ibarat kenaikan kelas. Murid-murid kelas 12 sudah lulus semua. Daripada menghapus ruang kelasnya (DROP), petugas kebersihan cukup mengeluarkan semua muridnya dan membersihkan kelasnya (TRUNCATE) agar bisa dipakai murid baru tahun depan.",
        icon: Trash2,
        sqlExample: "TRUNCATE TABLE Siswa;",
        visualization: {
          type: 'before-after',
          tables: [
            {
              name: "Isi Tabel Siswa (Sebelum TRUNCATE)",
              columns: ["id_siswa", "nama", "kelas"],
              rows: [
                [1, "Budi", "12-RPL"],
                [2, "Siti", "12-TKJ"]
              ],
              strikethroughRows: [0, 1]
            }
          ],
          resultTable: {
            name: "Isi Tabel Siswa (Sesudah TRUNCATE)",
            columns: ["id_siswa", "nama", "kelas"],
            rows: [
              ["(Kosong)", "(Kosong)", "(Kosong)"]
            ]
          },
          explanation: "Struktur kolomnya (id_siswa, nama, kelas) tetap ada, tapi semua datanya dibersihkan."
        }
      },
      {
        id: "drop",
        title: "DROP (Menghancurkan)",
        description: "Digunakan untuk menghapus seluruh tabel beserta dengan isinya secara permanen dari database.",
        detailedDescription: [
          "Ini adalah perintah yang sangat berbahaya. Sekali kamu menjalankan DROP TABLE, baik struktur maupun datanya akan hilang dan tidak bisa dikembalikan (kecuali ada backup).",
          "Gunakan perintah ini hanya jika tabel tersebut benar-benar sudah tidak dibutuhkan lagi."
        ],
        analogy: "Gedung sekolah lama sudah mau digusur untuk dibangun jalan tol. Jadi ekskavator datang dan menghancurkan seluruh gedung beserta isinya sampai rata dengan tanah (DROP).",
        icon: Trash2,
        sqlExample: "DROP TABLE Siswa;",
        visualization: {
          type: 'before-after',
          tables: [
            {
              name: "Tabel Siswa (Sebelum DROP)",
              columns: ["id_siswa", "nama"],
              rows: [
                [1, "Budi"],
                [2, "Siti"]
              ],
              strikethroughRows: [0, 1]
            }
          ],
          resultTable: {
            name: "Database (Sesudah DROP)",
            columns: ["Status Tabel Siswa"],
            rows: [
              ["Tabel tidak ditemukan / Error 404"]
            ],
            highlightCells: [{ row: 0, col: 0, color: "bg-red-100 text-red-800 font-bold" }]
          },
          explanation: "Tabel benar-benar lenyap dari sistem database."
        }
      }
    ]
  },
  {
    id: "dml",
    title: "Data Manipulation Language (DML)",
    description: "Perintah SQL untuk memanipulasi data di dalam tabel, seperti menambah, mengubah, atau menghapus data.",
    detailedDescription: [
      "Setelah struktur tabel dibuat dengan DDL, kita menggunakan DML untuk mengelola isinya.",
      "Ada 4 perintah utama yang sering disingkat CRUD: Create (INSERT), Read (SELECT), Update (UPDATE), dan Delete (DELETE)."
    ],
    analogy: "Kalo DDL itu bikin ruang kelasnya, DML itu aktivitas anak OSIS atau Tata Usaha yang ngatur siapa aja murid yang masuk ke kelas itu, pindah kelas, atau ngeluarin murid yang udah lulus.",
    icon: Layers,
    subTopics: [
      {
        id: "select",
        title: "SELECT (Membaca Data)",
        description: "Mengambil dan membaca data dari tabel sesuai dengan kriteria tertentu.",
        detailedDescription: [
          "SELECT digunakan untuk memilih kolom mana yang ingin ditampilkan.",
          "Kita bisa menggunakan bintang (*) untuk mengambil semua kolom.",
          "Gunakan klausa WHERE untuk menyaring data yang spesifik."
        ],
        analogy: "Kayak guru wali kelas ngecek daftar absensi harian buat mencari khusus anak-anak yang berstatus 'alfa'.",
        icon: Search,
        sqlExample: "SELECT nama, jurusan FROM Siswa WHERE jurusan = 'RPL';",
        visualization: {
          type: 'single',
          tables: [
            {
              name: "Hasil Query SELECT",
              columns: ["nama", "jurusan"],
              rows: [
                ["Budi", "RPL"],
                ["Siti", "TKJ"],
                ["Andi", "RPL"]
              ],
              highlightRows: [0, 2]
            }
          ],
          explanation: "Query hanya menampilkan anak dengan jurusan RPL (Baris yang di-highlight biru)."
        }
      },
      {
        id: "insert",
        title: "INSERT (Menambah Data)",
        description: "Menambahkan baris data baru ke dalam tabel.",
        detailedDescription: [
          "Sintaks dasarnya adalah INSERT INTO nama_tabel (kolom1, kolom2) VALUES (nilai1, nilai2).",
          "Urutan nilai harus sesuai dengan urutan kolom yang disebutkan."
        ],
        analogy: "Kayak guru BK atau TU masukin nama murid baru dari jalur PPDB ke buku induk sekolah.",
        icon: PlusCircle,
        sqlExample: "INSERT INTO Siswa (id_siswa, nama, jurusan)\nVALUES (4, 'Dina', 'Multimedia');",
        visualization: {
          type: 'before-after',
          tables: [
            {
              name: "Siswa (Sebelum)",
              columns: ["id_siswa", "nama", "jurusan"],
              rows: [
                [1, "Budi", "RPL"],
                [2, "Siti", "TKJ"]
              ]
            }
          ],
          resultTable: {
            name: "Siswa (Sesudah)",
            columns: ["id_siswa", "nama", "jurusan"],
            rows: [
              [1, "Budi", "RPL"],
              [2, "Siti", "TKJ"],
              [4, "Dina", "Multimedia"]
            ],
            highlightRows: [2]
          },
          explanation: "Satu baris baru (Dina) ditambahkan ke bagian bawah tabel."
        }
      },
      {
        id: "update",
        title: "UPDATE (Mengubah Data)",
        description: "Memperbarui data yang sudah ada di dalam tabel.",
        detailedDescription: [
          "Gunakan perintah UPDATE nama_tabel SET kolom = nilai_baru.",
          "SANGAT PENTING: Selalu gunakan klausa WHERE. Jika tidak, SEMUA baris di tabel akan ikut berubah!"
        ],
        analogy: "Murid yang tadinya rambut gondrong udah cukur, jadi di catetan guru BK status 'pelanggaran' di-update jadi 'aman'.",
        icon: Edit,
        sqlExample: "UPDATE Siswa\nSET jurusan = 'TKJ'\nWHERE id_siswa = 1;",
        visualization: {
          type: 'before-after',
          tables: [
            {
              name: "Siswa (Sebelum)",
              columns: ["id_siswa", "nama", "jurusan"],
              rows: [
                [1, "Budi", "RPL"],
                [2, "Siti", "TKJ"]
              ]
            }
          ],
          resultTable: {
            name: "Siswa (Sesudah)",
            columns: ["id_siswa", "nama", "jurusan"],
            rows: [
              [1, "Budi", "TKJ"],
              [2, "Siti", "TKJ"]
            ],
            highlightCells: [{ row: 0, col: 2, color: "bg-yellow-100 text-yellow-800 font-bold" }]
          },
          explanation: "Jurusan Budi yang tadinya 'RPL' diubah menjadi 'TKJ'."
        }
      },
      {
        id: "delete",
        title: "DELETE (Menghapus Data)",
        description: "Menghapus data (baris) dari tabel.",
        detailedDescription: [
          "Gunakan DELETE FROM nama_tabel WHERE kondisi.",
          "Sama seperti UPDATE, AWAS lupa WHERE! Bisa-bisa satu tabel kehapus semua."
        ],
        analogy: "Menghapus nama murid dari daftar aktif karena dia udah lulus dari SMK atau pindah sekolah.",
        icon: Trash2,
        sqlExample: "DELETE FROM Siswa WHERE id_siswa = 2;",
        visualization: {
          type: 'before-after',
          tables: [
            {
              name: "Siswa (Sebelum)",
              columns: ["id_siswa", "nama", "jurusan"],
              rows: [
                [1, "Budi", "RPL"],
                [2, "Siti", "TKJ"]
              ],
              strikethroughRows: [1]
            }
          ],
          resultTable: {
            name: "Siswa (Sesudah)",
            columns: ["id_siswa", "nama", "jurusan"],
            rows: [
              [1, "Budi", "RPL"]
            ]
          },
          explanation: "Data Siti (id_siswa = 2) dihapus dari tabel sepenuhnya."
        }
      }
    ]
  },
  {
    id: "constraints",
    title: "Data Constraints (Batasan)",
    description: "Aturan yang diterapkan pada kolom tabel untuk membatasi tipe data yang bisa masuk, memastikan akurasi dan keandalan data.",
    detailedDescription: [
      "PRIMARY KEY: Unik untuk setiap baris, tidak boleh kosong (NULL). Contoh: NISN, NIK.",
      "FOREIGN KEY: Merujuk ke Primary Key di tabel lain untuk membuat relasi.",
      "UNIQUE: Datanya tidak boleh ada yang sama, tapi boleh kosong.",
      "NOT NULL: Kolom ini wajib diisi, tidak boleh dikosongi.",
      "CHECK: Memastikan data memenuhi syarat tertentu (misal: umur >= 15)."
    ],
    analogy: "Kayak aturan tata tertib SMK. 'Primary Key' itu NISN (Nggak boleh sama), 'NOT NULL' itu nama (Nggak boleh kosong alias ga ada murid ga bernama), dan 'CHECK' itu umur (masuk SMK harus minimal 14 tahun, kalo input 10 tahun otomatis ditolak sistem).",
    icon: Key,
    sqlExample: "CREATE TABLE Pendaftaran (\n  nisn VARCHAR(10) PRIMARY KEY,\n  nama VARCHAR(50) NOT NULL,\n  umur INT CHECK (umur >= 14)\n);",
  },
  {
    id: "joins",
    title: "JOINs (Menggabungkan Tabel)",
    description: "Perintah untuk menggabungkan baris dari dua atau lebih tabel, berdasarkan kolom yang saling terkait di antara tabel-tabel tersebut.",
    detailedDescription: [
      "Karena database relasional memecah data ke berbagai tabel (agar rapi dan tidak duplikat), kita butuh JOIN untuk menyatukannya kembali saat ingin dibaca utuh.",
      "Bayangkan kamu punya data di Tabel A dan Tabel B. JOIN akan mencari benang merah (biasanya Primary Key dan Foreign Key) untuk menempelkan data tersebut.",
      "Ada beberapa jenis JOIN utama: INNER, LEFT, RIGHT, dan FULL OUTER JOIN."
    ],
    analogy: "Ini ibarat gabungin 'Buku Daftar Siswa' dari ruang TU dengan 'Buku Daftar Nilai' dari Guru Kejuruan. Dicocokkan berdasarkan Nomor Absen atau NISN, biar di rapot akhir nanti lengkap: ada nama siswanya sekaligus ada nilainya.",
    icon: Link,
    subTopics: [
      {
        id: "inner-join",
        title: "INNER JOIN",
        description: "Mengembalikan data HANYA JIKA ada kecocokan di KEDUA tabel.",
        detailedDescription: [
          "Ini adalah jenis JOIN yang paling sering digunakan (default).",
          "Jika ada data di Tabel A tapi tidak punya pasangan di Tabel B, data itu TIDAK akan ditampilkan.",
          "Fokus pada 'Irisan' (Intersection) dari dua data."
        ],
        analogy: "Guru BK minta daftar siswa yang SUDAH mengumpulkan formulir magang. Siswa yang belum ngumpulin (nggak ada datanya di tabel formulir) nggak bakal dipanggil.",
        icon: Link,
        sqlExample: "SELECT Siswa.nama, Magang.perusahaan\nFROM Siswa\nINNER JOIN Magang ON Siswa.id_siswa = Magang.id_siswa;",
        visualization: {
          type: 'join',
          tables: [
            {
              name: "Siswa (Tabel Kiri)",
              columns: ["id_siswa", "nama"],
              rows: [
                [1, "Budi"],
                [2, "Siti"],
                [3, "Andi"] // Andi tidak ada di tabel magang
              ],
              highlightCells: [
                { row: 0, col: 0, color: "bg-purple-100 font-bold text-purple-800" },
                { row: 1, col: 0, color: "bg-purple-100 font-bold text-purple-800" }
              ]
            },
            {
              name: "Magang (Tabel Kanan)",
              columns: ["id_siswa", "perusahaan"],
              rows: [
                [1, "PT. Telkom"],
                [2, "CV. Media"]
              ],
              highlightCells: [
                { row: 0, col: 0, color: "bg-purple-100 font-bold text-purple-800" },
                { row: 1, col: 0, color: "bg-purple-100 font-bold text-purple-800" }
              ]
            }
          ],
          resultTable: {
            name: "Hasil INNER JOIN",
            columns: ["nama", "perusahaan"],
            rows: [
              ["Budi", "PT. Telkom"],
              ["Siti", "CV. Media"]
            ]
          },
          explanation: "Andi (id=3) tidak ditampilkan karena dia tidak memiliki pasangan data di tabel Magang."
        }
      },
      {
        id: "left-join",
        title: "LEFT JOIN",
        description: "Mengembalikan SEMUA data dari tabel KIRI, dan data yang cocok dari tabel KANAN. Jika tidak ada kecocokan, tabel kanan akan berisi NULL.",
        detailedDescription: [
          "Sangat berguna saat kita ingin melihat keseluruhan populasi data utama (Tabel Kiri), terlepas dari apakah mereka punya data terkait atau tidak.",
          "Data yang tidak punya pasangan akan diisi dengan nilai 'NULL' (kosong)."
        ],
        analogy: "Guru wali kelas mau ngecek daftar SEMUA siswa di kelasnya, dan ngeliat siapa aja yang udah bayar SPP. Yang udah bayar ada catatannya, yang belum bayar catatannya kosong (NULL), tapi nama siswanya tetep harus tampil semua di absen.",
        icon: Link,
        sqlExample: "SELECT Siswa.nama, SPP.status_bayar\nFROM Siswa\nLEFT JOIN SPP ON Siswa.id_siswa = SPP.id_siswa;",
        visualization: {
          type: 'join',
          tables: [
            {
              name: "Siswa (Tabel Kiri - Prioritas)",
              columns: ["id", "nama"],
              rows: [
                [1, "Budi"],
                [2, "Siti"],
                [3, "Andi"]
              ],
              highlightCells: [
                { row: 0, col: 1, color: "bg-blue-100 font-bold" },
                { row: 1, col: 1, color: "bg-blue-100 font-bold" },
                { row: 2, col: 1, color: "bg-blue-100 font-bold" }
              ]
            },
            {
              name: "SPP (Tabel Kanan)",
              columns: ["id", "status"],
              rows: [
                [1, "Lunas"],
                [2, "Lunas"]
              ]
            }
          ],
          resultTable: {
            name: "Hasil LEFT JOIN",
            columns: ["nama", "status"],
            rows: [
              ["Budi", "Lunas"],
              ["Siti", "Lunas"],
              ["Andi", "NULL"]
            ],
            highlightCells: [
              { row: 2, col: 1, color: "bg-red-100 text-red-600 font-bold italic" }
            ]
          },
          explanation: "Semua nama siswa (Tabel Kiri) tetap tampil. Karena Andi belum bayar SPP, statusnya menjadi NULL."
        }
      },
      {
        id: "right-join",
        title: "RIGHT JOIN",
        description: "Kebalikan dari LEFT JOIN. Mengembalikan SEMUA data dari tabel KANAN, dan data yang cocok dari tabel KIRI.",
        detailedDescription: [
          "Jarang digunakan karena biasanya programmer lebih suka menukar posisi tabel dan menggunakan LEFT JOIN agar lebih mudah dibaca.",
          "Tabel kanan menjadi prioritas utama."
        ],
        analogy: "Daftar absensi ekskul (Tabel Kanan). Pembina ekskul mau ngabsen semua anak yang hadir hari ini, trus dicocokin sama data kelasnya (Tabel Kiri). Kalo ada anak luar yang ikut nyusup dan ga ada di data sekolah, kelasnya bakal kosong (NULL).",
        icon: Link,
        sqlExample: "SELECT Siswa.kelas, Ekskul.nama_anak\nFROM Siswa\nRIGHT JOIN Ekskul ON Siswa.id_siswa = Ekskul.id_siswa;",
        visualization: {
          type: 'join',
          tables: [
            {
              name: "Siswa (Tabel Kiri)",
              columns: ["id", "kelas"],
              rows: [
                [1, "10-RPL"],
                [2, "10-TKJ"]
              ]
            },
            {
              name: "Ekskul (Tabel Kanan - Prioritas)",
              columns: ["id", "nama_anak"],
              rows: [
                [1, "Budi"],
                [2, "Siti"],
                [99, "Penyusup"]
              ],
              highlightCells: [
                { row: 0, col: 1, color: "bg-green-100 font-bold" },
                { row: 1, col: 1, color: "bg-green-100 font-bold" },
                { row: 2, col: 1, color: "bg-green-100 font-bold" }
              ]
            }
          ],
          resultTable: {
            name: "Hasil RIGHT JOIN",
            columns: ["kelas", "nama_anak"],
            rows: [
              ["10-RPL", "Budi"],
              ["10-TKJ", "Siti"],
              ["NULL", "Penyusup"]
            ],
            highlightCells: [
              { row: 2, col: 0, color: "bg-red-100 text-red-600 font-bold italic" }
            ]
          },
          explanation: "Semua anak ekskul tampil. Anak dengan ID 99 tidak ada di tabel Siswa, sehingga kelasnya NULL."
        }
      },
      {
        id: "full-outer-join",
        title: "FULL OUTER JOIN",
        description: "Mengembalikan SEMUA data ketika ada kecocokan baik di tabel KIRI maupun KANAN.",
        detailedDescription: [
          "Ini adalah gabungan dari LEFT JOIN dan RIGHT JOIN.",
          "Jika ada data di tabel kiri yang tidak punya pasangan, data kanannya NULL. Begitu juga sebaliknya.",
          "Berguna untuk menemukan 'data yatim piatu' (data yang tidak saling terhubung di kedua sisi)."
        ],
        analogy: "Penggabungan total data Siswa Baru (Kiri) dan data Seragam (Kanan). Bakal kelihatan: Siswa mana yang belum dapet seragam (Seragamnya NULL), dan Seragam ukuran apa yang sisa karena belum ada siswa yang ngambil (Siswanya NULL).",
        icon: Link,
        sqlExample: "SELECT Siswa.nama, Seragam.ukuran\nFROM Siswa\nFULL OUTER JOIN Seragam ON Siswa.id_siswa = Seragam.id_siswa;",
        visualization: {
          type: 'join',
          tables: [
            {
              name: "Siswa",
              columns: ["id", "nama"],
              rows: [
                [1, "Budi"],
                [2, "Siti"],
                [3, "Andi"] // Andi belum ambil seragam
              ]
            },
            {
              name: "Seragam",
              columns: ["id", "ukuran"],
              rows: [
                [1, "L"],
                [2, "M"],
                [4, "XL"] // Seragam XL sisa, ga ada yg punya ID 4
              ]
            }
          ],
          resultTable: {
            name: "Hasil FULL OUTER JOIN",
            columns: ["nama", "ukuran"],
            rows: [
              ["Budi", "L"],
              ["Siti", "M"],
              ["Andi", "NULL"],
              ["NULL", "XL"]
            ],
            highlightCells: [
              { row: 2, col: 1, color: "bg-red-100 text-red-600 font-bold italic" },
              { row: 3, col: 0, color: "bg-red-100 text-red-600 font-bold italic" }
            ]
          },
          explanation: "Menampilkan semuanya. Andi tampil dengan ukuran NULL, dan Seragam XL tampil dengan nama NULL."
        }
      }
    ]
  },
  {
    id: "aggregations",
    title: "Aggregate Functions",
    description: "Fungsi yang melakukan perhitungan pada sekumpulan nilai dan mengembalikan satu nilai tunggal.",
    detailedDescription: [
      "COUNT(): Menghitung jumlah baris.",
      "SUM(): Menjumlahkan total angka.",
      "AVG(): Mencari nilai rata-rata.",
      "MAX() & MIN(): Mencari nilai tertinggi dan terendah.",
      "GROUP BY: Mengelompokkan data berdasarkan kolom tertentu sebelum dihitung (Misal: hitung rata-rata PER jurusan)."
    ],
    analogy: "Kayak guru matematika ngitung rata-rata nilai kelas (AVG), total murid yang remidi (COUNT), atau mencari siapa nilai ulangan tertinggi di satu angkatan (MAX).",
    icon: BarChart,
    sqlExample: "SELECT jurusan, COUNT(id_siswa) as total_siswa\nFROM Siswa\nGROUP BY jurusan;",
    visualization: {
      type: 'before-after',
      tables: [
        {
          name: "Tabel Siswa Mentah",
          columns: ["nama", "jurusan"],
          rows: [
            ["Budi", "RPL"],
            ["Andi", "RPL"],
            ["Citra", "RPL"],
            ["Siti", "TKJ"],
            ["Doni", "TKJ"]
          ],
          highlightCells: [
            { row: 0, col: 1, color: "bg-blue-50 text-blue-700" },
            { row: 1, col: 1, color: "bg-blue-50 text-blue-700" },
            { row: 2, col: 1, color: "bg-blue-50 text-blue-700" },
            { row: 3, col: 1, color: "bg-green-50 text-green-700" },
            { row: 4, col: 1, color: "bg-green-50 text-green-700" }
          ]
        }
      ],
      resultTable: {
        name: "Hasil COUNT dan GROUP BY",
        columns: ["jurusan", "total_siswa"],
        rows: [
          ["RPL", 3],
          ["TKJ", 2]
        ],
        highlightCells: [
          { row: 0, col: 0, color: "bg-blue-100 font-bold text-blue-800" },
          { row: 1, col: 0, color: "bg-green-100 font-bold text-green-800" }
        ]
      },
      explanation: "Fungsi Agregasi meringkas banyak baris menjadi satu baris kesimpulan per grup (jurusan)."
    }
  }
];
