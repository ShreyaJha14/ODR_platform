import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDb Connected Successfully');

    })

    await mongoose.connect(`${process.env.MONGODB_URI}/BYTEVERSE25`)
}

export default connectDB;