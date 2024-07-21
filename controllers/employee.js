import Employee from '../models/employee.js';

export const getAllEmployees = async () => {
  try {
    const employees = await Employee.find();
    return employees;
  } catch (error) {
    throw new Error('Error fetching employees');
  }
};

export const getEmployeeById = async (id) => {
  try {
    const employee = await Employee.findById(id);
    return employee;
  } catch (error) {
    throw new Error('Error fetching employee');
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const newEmployee = new Employee(employeeData);
    await newEmployee.save();
    return newEmployee;
  } catch (error) {
    throw new Error('Error creating employee');
  }
};

export const updateEmployee = async (id, updateData) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updateData, { new: true });
    return updatedEmployee;
  } catch (error) {
    throw new Error('Error updating employee');
  }
};

export const deleteEmployee = async (id) => {
  try {
    await Employee.findByIdAndRemove(id);
    return "Employee deleted successfully";
  } catch (error) {
    throw new Error('Error deleting employee');
  }
};
