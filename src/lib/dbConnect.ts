import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject ={

}

async function dbConnect(): Promise<void> {
    if (connection.isConnected){
        console.log("Already connected to batabase");
    }

    try{
        const db=await mongoose.connect(process.env.MONGODB_URI
             || '',{}
        )

        connection.isConnected=db.connections[0].readyState

        console.log("DB Connected Successfull");

    }catch (error){
        console.log("DB Connected failed", error);


        process.exit(1)

    }
}

export default dbConnect;