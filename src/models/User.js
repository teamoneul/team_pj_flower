import bcrypt from "bcrypt"
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {type: String, required: true, unique: true},
  password: { type :String, required: true},
  username: {type: String, required: true, unique: true},
});


userSchema.pre('save', async function(){
  this.password = await bcrypt.hash(this.password, 5)
  console.log(this.password);
})

const User = mongoose.model('User', userSchema);
export default User;