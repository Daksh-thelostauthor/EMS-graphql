import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dateOfJoining: Date,
  title: String,
  department: String,
  employeeType: String,
  currentStatus: Boolean,
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
