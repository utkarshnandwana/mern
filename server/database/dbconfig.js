import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@inshorts-clone.mofvccl.mongodb.net/`
    try {
         await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
         console.log("MongoDB is connected successfully");
        
    } catch (error) {
     console.log("Error while connecting the database", error);        
    }
}

export default Connection;