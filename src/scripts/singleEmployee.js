const buildSingleEmployee = (singleEmployee) => {
    return `<div>
                    <h2>${singleEmployee.firstName} ${singleEmployee.lastName}</h2>
                    <ul>
                    <li>${singleEmployee.emailAddress}</li>
                    <li>${singleEmployee.phoneNumber}</li>
                    <li>${singleEmployee.birthday}</li>
                    <li>${singleEmployee.department}</li>
                    <button class = "updateButton" id= "updateButton-${singleEmployee.id}"> Update</button>
                    <button class = "deleteButton" id= "deleteButton-${singleEmployee.id}"> Delete</button>
                    </ul>

  </div>`
}

