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

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

const Product = mongoose.model('Product', productsSchema)
// if addes addtional props not defined in schema they will be ignored
// const bike = new Product({name: 'Mountain bike anbsdfsfsdjfdkfshkjdf', price: -999})
// bike.save().then(d=> {
//     console.log('=da', d);
// }).catch(err=> {
//     console.log(err);
// })

// while update the runvalidator is false by default so pass true to run validators
Product.findOneAndUpdate({name: 'Mountain bike'}, {price: 199}, {new: true, runValidators: true})
.then(d=> {
    console.log(d)
}).catch(err=> {
    console.log(err);
})