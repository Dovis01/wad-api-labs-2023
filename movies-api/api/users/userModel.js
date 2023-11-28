import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true},
    password: {type: String, required: true }
});

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
const passwordValidator = (password) => {
    return passwordRegex.test(password);
}
UserSchema.path("password").validate(passwordValidator, "Password must be between 8 and 15 characters long and contain at least one number, one letter and one special character.");
export default mongoose.model('User', UserSchema);