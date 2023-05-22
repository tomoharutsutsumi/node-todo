import mongoose from "mongoose";

export const add = (): void => {
    mongoose.connect('mongodb://root:example@mongo:27017', {
        //useNewUrlParser: true,
        //useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));
}

// mongoose.connect('mongodb://root:example@mongo:27017/test', {
//     //useNewUrlParser: true,
//     //useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB Connected...'))
// .catch(err => console.log(err));
