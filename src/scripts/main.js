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



