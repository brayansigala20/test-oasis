import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique:true,
        require: true,
        trim: true
    }
},
    {
        timestamps: true,
    })

const User = mongoose.model('User', UserSchema)
export default User