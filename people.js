// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
        console.log('connection open...')
    } catch(err){
        console.log('=err==', err)
    }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const personsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
})
// this property only exists in mongoose i.e. js side and not in the db
personsSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
})
personsSchema.pre('save', async function () {
    this.firstName = 'Yo Mama'
    console.log('About to SAVE!!')
})
personsSchema.post('save', async function () {
    console.log('SAVED!!')
})
const Person = mongoose.model('Person', personsSchema)
// while update the runvalidator is false by default so pass true to run validators
Person.insertMany({firstName: 'Harvey', lastName: 'Dent'}, {new: true, runValidators: true})
.then(d=> {
    console.log(d)
}).catch(err=> {
    console.log(err);
})