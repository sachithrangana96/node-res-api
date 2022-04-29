var dbconn = require('../../config/db.config');

var Employee = function(employee){
   
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email  = employee.email;
    this.phone = employee.phone;
    this.is_deleted = employee.is_deleted;
}

// get All employee
Employee.getAllEmployees = (result) => {
    dbconn.query('SELECT * FROM employee WHERE is_deleted=0',(err,res) => {
        if(err){
            console.log('Error while fetching employee',err)
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}

// get employee by ID from DB
Employee.getAllEmployeeByID = (id, result) => {
    dbconn.query('SELECT * FROM employee  WHERE id=?',id,(err,res)=>{
        if(err){
            console.log(`Error while fetching employee by id`,err)
            result(null,err);
        }else{
            result(null,res);
        }
    })
}


// create new employee
Employee.createEmployee = (employeeReqData,result) => {
    dbconn.query('INSERT INTO employee SET ?', employeeReqData,(err,res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null,err)
        }else{
            console.log('Employee created successfully');
            result(null,res)
        }
    })
}

// update employee
Employee.updateEmployee = (id, employeeReqData, result) => {
    dbconn.query('UPDATE employee SET first_name=?,last_name=?,email=?,phone=? WHERE id=?',[employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,id],(err,res)=>{
        if(err)
        {
            console.log('Error while updating the employee');
            result(null,err);
        }else{
            console.log('Employee updated successfully');
            result(null,res);

        }
    })
}

// delete employee
Employee.deleteEmployee = (id,result)=>{
    // dbconn.query('DELETE FROM employee WHERE id=?',[id],(err,res)=>{
    //     if(err){
    //       console.log('Error while deleting the employee');
    //       result(null,err);
    //     }else{
    //         result(null,res);
    //     }
    // })

    // soft delete
    dbconn.query('UPDATE employee SET is_deleted=? WHERE id=?',[1,id],(err,res)=>{
        if(err)
        {
            console.log('Error while softdeleting the employee');
            result(null,err);
        }else{
            console.log('Employee SoftDelete successfully');
            result(null,res);

        }
    })


}

module.exports = Employee;