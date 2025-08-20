# Sequelize MVC

Pada demo sebelumnya, kita sudah melakukan setup menggunakan sequelize. Pada demo kali ini kita akan melanjutkan aplikasinya dan menggabungkan dengan `MVC` & `EJS`

[Dokumentasi Sequelize - Basic Querying](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)    
[Dokumentasi Sequelize - Finder Querying](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)    

## Endpoint
| Method | Route             | Deskripsi                                                              |
| :----- | :----             | :--------------------------------------------------------------------- |
| GET    | /games            | Menampilkan data seluruh `Game`                                        |
| GET    | /games/rpg        | Menampilkan data `Game` khusus genre `RPG`                             |
| GET    | /games/:id        | Menampilkan detail data `Game` berdasarkan `id`                        |
| GET    | /games/add        | Menampilkan form untuk menambahkan data `Game`                         |
| POST   | /games/add        | Menambahkan data `Game` ke dalam database                              |
| GET    | /games/edit/:id   | Menampilkan form untuk mengedit data `Game` berdasarkan `id`           |
| POST   | /games/edit/:id   | Mengupdate data `Game` berdasarkan `id` yang diberikan                 |
| GET    | /games/delete/:id | Menghapus data `Game` berdasarkan `id` yang diberikan                  |

## **Searching**
Buatlah fitur search dengan menggunakan `[Op.iLike]`

## **Sort**
Buatlah fitur sort untuk mengurutkan data bedasarkan nama game

## **Static Method**
Buatlah static method untuk mendapatkan data game dengan genre `RPG`

## **Instance Method**
Buatlah instance method untuk menampilkan kolom baru yaitu `gameplay` yang terbagi menjadi 3 kategori yaitu:
- `5v5 MOBA` jika genrenya `MOBA`
- `5v5 Tactical FPS` jika genrenya `FPS`
- `Battle Royale` jika genrenya `BR`
- `Open World RPG` jika genrenya `RPG`

## **Getter**
Buatlah sebuah getter untuk menampilkan tanggal `releaseDate` yang telah diformat.