require('dotenv').config();

const mongoose=  require('mongoose');
const connectDatabase = async()=>{
    try{
        
    const client = await mongoose.connect(`${process.env.MONGO_URI}`);
    }catch(e){
        console.log(e);
    }
}
 connectDatabase();

const citySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        state:{
            type:String
        },
        country:{
            type:String,
            required: true
        },
        lat:{
            type:String,
            required:true
        },
        lon:{
            type: String,
            required: true
        }
});
const City =  mongoose.model('City',citySchema);
module.exports = City;  




// const newCity = new City({name:"dewdew",state:"dwdewdwe",country:"dewdedw",lat:"edewdedew",lon:"dewdewdwedw"});