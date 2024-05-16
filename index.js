// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
        console.log('connection open...')
    } catch(err){
        console.log('=err==', err)
    }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})
// it will create collection with plural name movies, making M to m and plural
// Movie Modal
const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({title: 'Amadeus', year: 1990, score: 9, rating: 'A+'})
// const batman = new Movie({title: 'batman begins', year: 2005, score: 9, rating: 'A+'})

// node index.js to directly insert in db

// Movie.insertMany([
//     {title: 'Amadeus', year: 1990, score: 9, rating: 'A+'},
//     {title: 'batman begins', year: 2005, score: 9, rating: 'A+'},
//     {title: 'The Dark Knight', year: 2008, score: 9, rating: 'A+'},
//     {title: 'The Dark Knight Rises', year: 2012, score: 9, rating: 'A+'}
// ])
// .then (data=> {
//     console.log('It worked...')
//     console.log('==data==', data)
// })
// in cmd
// this is used as node then .load <fileName> then......
// use amadeus.save() - to make the changes in db