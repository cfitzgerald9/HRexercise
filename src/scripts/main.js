printAllEmployees();

document.querySelector("#addEmployeeButton").addEventListener("click", () => {
  const firstNameValue = document.querySelector("#firstNameInput").value;
  const lastNameValue = document.querySelector("#lastNameInput").value;
  const emailAdressValue = document.querySelector("#emailAddressInput").value;
  const telephoneValue = document.querySelector("#telephoneInput").value;
  const birthdayValue = document.querySelector("#birthdayInput").value;
  const departmentValue = document.querySelector("#departmentInput").value;

  const employeeToAdd = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    emailAddress: emailAdressValue,
    phoneNumber: telephoneValue,
    birthday: birthdayValue,
    department: departmentValue,
  };
  createEmployee(employeeToAdd).then(() => {
    printAllEmployees();
  });
});

document.querySelector("body").addEventListener("click", () => {
  if(event.target.classList.contains("deleteButton")){
    const employeeId = event.target.id.split("-")[1];
    deleteEmployee(employeeId)
    .then(() => {
      printAllEmployees()
    })
  }
})

document.querySelector("body").addEventListener("click", () => {
  if(event.target.classList.contains("editButton")){
    const employeeId = event.target.id.split("-")[1]
    getSingleEmployee(employeeId)
    .then(singleEmployeeData => {
      document.querySelector(`#employeeContainer-${employeeId}`).innerHTML = buildEditForm(singleEmployeeData);
    })
  }
})

document.querySelector("body").addEventListener("click", () => {
  if(event.target.classList.contains("editSaveButton")){
    const employeeId = event.target.id.split("-")[1];
    const editedEmployeeObject = {
      id: employeeId,
      firstName: document.querySelector(`#employeeFirstNameEdit-${employeeId}`).value,
      lastName: document.querySelector(`#employeeLastNameEdit-${employeeId}`).value,
      emailAddress: document.querySelector(`#employeeEmailEdit-${employeeId}`).value,
      phoneNumber: document.querySelector(`#employeePhoneEdit-${employeeId}`).value,
      firstName: document.querySelector(`#employeeFirstNameEdit-${employeeId}`).value,
      birthday:document.querySelector(`#employeeBirthdayEdit-${employeeId}`).value,
      department: document.querySelector(`#employeeDepartmentEdit-${employeeId}`).value
    }
    editEmployee(employeeId, editedEmployeeObject)
    .then(() => {
      getAllEmployees();
      printAllEmployees();
    })
  }
})






