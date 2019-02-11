const buildSingleEmployee = (singleEmployee) => {
    return `<div>
                    <h2>${singleEmployee.firstName} ${singleEmployee.lastName}</h2>
                    <ul>
                    <li>${singleEmployee.emailAddress}</li>
                    <li>${singleEmployee.phoneNumber}</li>
                    <li>${singleEmployee.birthday}</li>
                    <li>${singleEmployee.department}</li>
                    </ul>

  </div>`
}