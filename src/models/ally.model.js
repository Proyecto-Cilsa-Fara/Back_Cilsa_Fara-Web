import mongoose from "mongoose"

const allySchema = new mongoose.Schema({
    order: {
        type: Number,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true,
        trim: true 
    },
    logo: {
        type: String,
        required: false,
        default: 'uploads/default-logo.jpg' 
    }
}, { timestamps: true }); 

const Ally = mongoose.model('Ally', allySchema);

export default Ally