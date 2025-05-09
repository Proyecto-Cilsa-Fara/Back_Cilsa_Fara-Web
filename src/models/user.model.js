import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
      required: false,
      default: "uploads/default-user.jpg",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Por favor ingresa un email válido"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Middleware para hashear la contraseña antes de guardar
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

const mUser = {
  create: async (body) => {
    try {
      const existingUser = await User.findOne({ email: body.email });
      if (existingUser) {
        throw { message: "El correo electrónico ya está registrado" };
      }

      // 🔹 Eliminado el hashing manual de la contraseña
      const user = new User({
        name: body.name,
        email: body.email,
        password: body.password, // Se pasa tal cual, el middleware `pre("save")` se encargará de hashearla
        profilePicture: body.profilePicture,
      });

      await user.save();
      return user;
    } catch (err) {
      throw { message: err.message };
    }
  },

  getUser: async (id) => {
    return await User.findById(id);
  },

  getAll: async () => {
    return await User.find({});
  },

  update: async (id, body) => {
    try {
      // 🔹 Eliminado el hashing manual en `update`
      if (body.password) delete body.password; // La contraseña no debe actualizarse directamente aquí

      const userDb = await User.findByIdAndUpdate(id, body, {
        runValidators: true,
        new: true, // Para devolver el usuario actualizado
      });

      return userDb;
    } catch (err) {
      throw { message: err.message };
    }
  },

  delete: async (id) => {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) throw { message: "Usuario no encontrado" };
    } catch (error) {
      throw { message: error.message };
    }
  },
};

export { User, mUser };
