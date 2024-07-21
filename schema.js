export const typeDefs = `
  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
    currentStatus: Boolean!
  }

  type Query {
    getAllEmployees: [Employee]
    getEmployeeById(id: ID!): Employee
    getEmployeesByTitle(title: String!): [Employee]
  }

  type Mutation {
    updateEmployee(
      id: ID!
      firstName: String
      lastName: String
      age: Int
      dateOfJoining: String
      title: String
      department: String
      employeeType: String
      currentStatus: Boolean
    ): Employee
    deleteEmployee(id: ID!): String
    createEmployee(
      firstName: String!
      lastName: String!
      age: Int!
      dateOfJoining: String!
      title: String!
      department: String!
      employeeType: String!
      currentStatus: Boolean!
    ): Employee
  }

  type Subscription {
    employeeUpdated: Employee
  }
`;
