# paw-kelompok-2

Tugas Pengembangan Aplikasi Web untuk fungsi CRUD

*description*

API yang ada di dokter hewan, terdiri dari 2 fungsi CRUD yaitu Patients dan Queue. Patients terdiri dari informasi data ownerName, petName, petType, homeAddress, phoneNumber, description, dan currentTreatments.
Sedangkan bagian queue terdiri dari date, ownerName, petName, petType, homeAddress, dan phoneNumber. Pemilik hewan peliharaan yang membawa hewannya untuk berobat ke dokter hewan dapat melihat antrean mereka sudah berada pada urutan keberapa, kemudian dokter hewan dapat mengedit pasien yang sudah selesai dan juga melihat siapa saja yang belum diperiksa.

*Anggota Kelompok*:
- Hafizh Aradhana Harimurti (19/444053/TK/49249)
- Syafiq Muhammad Alaudin (19/444073/TK/49269)
- Muhammad Afdiansyah (19/444060/TK/49256)
- Yosep Engelbert Christo (19/446788/TK/49893)
- Arifah Amelia Tijani (19/446767/TK/49872)

*Cara Menggunakan*

Ketika file server.js dinyalakan, alamat http://localhost:3000/ dapat digunakan sebagai URL untuk melakukan permintaan POST, GET, PUT, dan DELETE. Berikut adalah permintaan untuk setiap path yang tersedia:

- '/queue'
Skema yang digunakan untuk request dalam path ini:

date: Date,
ownerName: String,
petName: String,
petType: String,
homeAddress: String,
phoneNumber: String

Setiap permintaan yang dapat dilakukan:

POST '/queue' : API akan memasukkan data yang sesuai dengan skema ke dalam MongoDB. Dari skema, data 'date', 'ownerName', 'petName', 'petType', 'homeAddress', dan 'phoneNumber' adalah data-data yang wajib diisi.

GET '/queue' : API akan mengembalikan list berisi semua data dalam _collection_ 'queues' dari MongoDB.

PUT '/queue' : API akan mencari data dengan id yang sesuai dengan permintaan dan mengubah data tersebut sesuai isi permintaan.

DELETE '/queue' : API akan mencari data dengan id yang sesuai dengan permintaan dan menghapus data tersebut dari MongoDB.


- '/patients'
Skema yang digunakan untuk request dalam path ini:

ownerName: String,
petName: String,
petType: String,
homeAddress: String,
phoneNumber: String,
description: String,
currentTreatments: [String]

Setiap permintaan yang dapat dilakukan:

POST '/patients' : API akan memasukkan data yang sesuai dengan skema ke dalam MongoDB. Dari skema, data 'ownerName', 'petName', 'petType', 'homeAddress', dan 'phoneNumber' adalah data-data yang wajib diisi.

GET '/patients' : API akan mengembalikan list berisi semua data dalam _collection_ 'patients' dari MongoDB.

PUT '/patients' : API akan mencari data dengan id yang sesuai dengan permintaan dan mengubah data tersebut sesuai isi permintaan.

DELETE '/patients' : API akan mencari data dengan id yang sesuai dengan permintaan dan menghapus data tersebut dari MongoDB.
