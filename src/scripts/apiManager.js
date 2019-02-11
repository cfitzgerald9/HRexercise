
const createEmployee = employeeToAdd => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeToAdd)
    });
  };

  const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json());
  };


