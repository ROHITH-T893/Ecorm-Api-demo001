const mongoose=require('mongoose')

const connectdb=async()=>{
    try{
    await mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log(con.connection.host);
    })
    console.log('mongodb is connected');
    }catch(err){
        console.log(err);
        console.log('error in mongodb connection');    
    }
}
module.exports=connectdb