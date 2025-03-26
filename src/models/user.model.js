import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    profilePicture: {
        type: String,
        required: false,
        default: 'uploads/default-user.jpg'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un email válido']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

const mUser = {
    create: async (body) => {

        const password = body.password
        const hashed = bcrypt.hashSync(password, 1)        
        try {
            const existingUser = await User.findOne({ email: body.email });
            if (existingUser) {
                throw { message: "El correo electrónico ya está registrado" }
            }

            const res = await User.create({
                name: body.name, 
                email: body.email, 
                password: hashed,
                profilePicture: body.profilePicture
            })
            return res
        } catch(err) {
            throw {message: err.message}
        }
    },

    getUser: async (id) => {
        const user = await User.findById(id)
        return user
    }, 

    getAll: async () => {
        const users = await User.find({})
        return users
    }, 

    update: async(id, body) => {

        const password = body.password

        if (password.length !== 0){
            const hashed = bcrypt.hashSync(password, 1)        
            body.password = hashed
        }

        try {
            const userDb = await User.findByIdAndUpdate(
                id, body, {runValidators: true}
            )
            return userDb
    
        } catch (err) {
            throw {message: err.message}
        }
    },

    delete : async (id) => {
        await User.findByIdAndDelete(id)
        .then(deletedUser => {
            if (!deletedUser) {
            //   console.log('Usuario borrado exitosamente:', deletedUser);
            // } else {
              throw {message: 'Usuario no encontrado'}
            }
          })
          .catch(error => {
            throw {message: error.message}
        });
    }

}
export default mUser;