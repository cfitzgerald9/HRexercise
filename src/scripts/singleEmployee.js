const buildSingleEmployee = (singleEmployee) => {
    return `<div id ="employeeContainer-${singleEmployee.id}">
                    <h2>${singleEmployee.firstName} ${singleEmployee.lastName}</h2>
                    <ul>
                    <li>${singleEmployee.emailAddress}</li>
                    <li>${singleEmployee.phoneNumber}</li>
                    <li>${singleEmployee.birthday}</li>
                    <li>${singleEmployee.department}</li>
                    <button class = "editButton" id= "editButton-${singleEmployee.id}"> Update</button>
                    <button class = "deleteButton" id= "deleteButton-${singleEmployee.id}"> Delete</button>
                    </ul>

  </div>`
}

const buildEditForm = (singleEmployee) => {
  return `<div class= "employeeEditContainer" id ="employeeContainer-${singleEmployee.id}">First Name<input id="employeeFirstNameEdit-${singleEmployee.id}" type="text" value=${singleEmployee.firstName}>
    Last Name<input id="employeeLastNameEdit-${singleEmployee.id}" type="text" value=${singleEmployee.lastName}>
   Email Address<input id="employeeEmailEdit-${singleEmployee.id}" type="text" value=${singleEmployee.emailAddress}>
   Phone Number<input id="employeePhoneEdit-${singleEmployee.id}" type="text" value=${singleEmployee.phoneNumber}>
   Birthday<input id="employeeBirthdayEdit-${singleEmployee.id}" type="text" value=${singleEmployee.birthday}>
   Department<input id="employeeDepartmentEdit-${singleEmployee.id}" type="text" value=${singleEmployee.department}>
  <button class="editSaveButton" id="editSaveButton-${singleEmployee.id}">Save</button>
 </div>`




}