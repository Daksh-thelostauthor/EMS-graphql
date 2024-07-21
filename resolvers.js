const employees = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      age: 30,
      dateOfJoining: "2023-01-01",
      title: "Manager",
      department: "Engineering",
      employeeType: "FullTime",
      currentStatus: true,
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
      dateOfJoining: "2022-05-15",
      title: "Engineer",
      department: "Engineering",
      employeeType: "FullTime",
      currentStatus: true,
    },
  ];
  
  export const resolvers = {
    Query: {
      getAllEmployees: () => employees,
      getEmployeeById: (_, { id }) => employees.find(employee => employee.id === id),
      getEmployeesByTitle: (_, { title }) => employees.filter(employee => employee.title.includes(title)),
    },
    Mutation: {
      updateEmployee: (_, { id, firstName, lastName, age, dateOfJoining, title, department, employeeType, currentStatus }) => {
        const employeeIndex = employees.findIndex(employee => employee.id === id);
        if (employeeIndex === -1) {
          throw new Error("Employee not found");
        }
        employees[employeeIndex] = {
          ...employees[employeeIndex],
          firstName,
          lastName,
          age,
          dateOfJoining,
          title,
          department,
          employeeType,
          currentStatus,
        };
        return employees[employeeIndex];
      },
      deleteEmployee: (_, { id }) => {
        const employeeIndex = employees.findIndex(employee => employee.id === id);
        if (employeeIndex === -1) {
          throw new Error("Employee not found");
        }
        employees.splice(employeeIndex, 1);
        return "Employee deleted successfully";
      },
      createEmployee: (_, { firstName, lastName, age, dateOfJoining, title, department, employeeType, currentStatus }) => {
        const newEmployee = {
          id: String(employees.length + 1),
          firstName,
          lastName,
          age,
          dateOfJoining,
          title,
          department,
          employeeType,
          currentStatus,
        };
        employees.push(newEmployee);
        return newEmployee;
      },
    },
  };
  