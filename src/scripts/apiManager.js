
const createEmployee = employeeToAdd => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeToAdd)
    });
  };

  const getSingleEmployee = (employeeId) =>{
    return fetch(`http://localhost:8088/employees/${employeeId}`)
    .then(response => response.json())
  }
  const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees").then(employees => employees.json());
  };

  const deleteEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
      method: "DELETE"
    })
  }

  const editEmployee = (employeeId, employeeObject) => {
    return fetch (`http://localhost:8088/employees/${employeeId}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(employeeObject)
    })
  }


