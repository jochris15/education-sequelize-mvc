# Game App (Sequelize MVC)

## **Setup**
Database : game_app

```
npm init -y
npm i express pg ejs sequelize  sequelize-cli
npm i -D nodemon
touch .gitignore
npx sequelize init
npx sequelize db:create
```

## **Migration**
Table Games

| Column name     | type      |
|-----------------|:---------:|
| name            | string    |
| gameImg         | string    |
| releaseDate     | date      |
| developer       | string    |

```
npx sequelize model:generate --name Game --attributes name:string,gameImg:string,releaseDate:date,developer:string

npx sequelize db:migrate
```

## **Custom Migration**

Buat custom migration / migrasi tambahan untuk menambahkan table `genre`.
```
npx sequelize migration:generate --name add-column-genre
```

## **Seeder**

Buatlah sebuah seed file untuk memasukan data ke tabel `Games`. Data berasal dari `games.json`.
```
npx sequelize seed:generate --name seeder-games

npx sequelize db:seed:all
```

## **Endpoint**

| Method | Route             | Deskripsi                                                              |
| :----- | :----             | :--------------------------------------------------------------------- |
| GET    | /                 | Menampilkan data seluruh `Game`                                        |
| GET    | /moba             | Menampilkan data `Game` dengan genre `MOBA`                            |
| GET    | /add              | Form untuk menambahkan `Game`                                          |
| POST   | /add              | Menambahkan data game ke database                                      |
| GET    | /:id              | Menampilkan detail data `Game`                                         |
| DELETE | /:id/delete       | Menghapis suatu data dari `Game`                                       |

## **Searching**
Buatlah fitur search dengan menggunakan `[Op.iLike]`

## **Sort**
Buatlah fitur sort untuk mengurutkan data bedasarkan nama game

## **Static Method**
Buatlah static method untuk mendapatkan data game dengan genre `MOBA`

## **Instance Method**
Buatlah instance method untuk menampilkan kolom baru yaitu `gameplay` yang terbagi menjadi 3 kategori yaitu:
- `Tactical Multiplayer Online Battle Arena` jika genrenya `MOBA`
- `Team Based First Person Shooter` jika genrenya `FPS`
- `Player VS Player Fight in Battle Royale` jika genrenya `BR`

## **Getter**
Buatlah sebuah getter untuk menampilkan tanggal `releaseDate` yang telah diformat.