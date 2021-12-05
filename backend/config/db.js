import mongoose from "mongoose"

const connectDB = async () => {
  try {
    // You must pass in your MONGO_URI that you will get from creating your mongodb cluster. Make sure to store your URI in your .env file
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
