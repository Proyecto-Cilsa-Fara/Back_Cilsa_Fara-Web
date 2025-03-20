import mongoose from "mongoose"

const memberSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: false,
        default: 'uploads/default-member.jpg' 
    },
    name: {
        type: String,
        required: true,
        trim: true 
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true 
    }
}, { timestamps: true }); 

const Member = mongoose.model('Member', memberSchema)

export default Member