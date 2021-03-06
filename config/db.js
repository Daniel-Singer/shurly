import mongoose from 'mongoose';


const connectDB = async () => {
  try{
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser:true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected')
  } catch(err){
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;