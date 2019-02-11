const printAllEmployees = () => {
    document.querySelector("#employeeListContainer").innerHTML = "";
    getAllEmployees().then(allEmployees => {
        allEmployees.forEach(singleEmployee => {
            document.querySelector("#employeeListContainer").innerHTML += buildSingleEmployee(singleEmployee)
        })
    })
}
