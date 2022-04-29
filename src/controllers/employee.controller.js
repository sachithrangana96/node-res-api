
// const Employee = require('../models/employee.model');
const EmployeeModel = require('../models/employee.model');

// get employee list
exports.getAllEmployeeList = (req,res) => {
//   console.log('here all employees list');
    EmployeeModel.getAllEmployees((err,employees) => {
        console.log('we are here')
        if(err)
        res.send(err);
        console.log('employees',employees);
        res.send(employees)
    })
}

// get employee by id
exports.getEmployeeByID = (req,res) => {
    // console.log(object)
    EmployeeModel.getAllEmployeeByID(req.params.id,(err,employee) =>{
        if(err)
        res.send(err)
        console.log(`single employee data`,employee);
        res.send(employee);
    })
}

// Create new employee 
exports.createNewEmployee = (req,res) => {
    console.log(`request`,req.body);
    const employeeReqData = new EmployeeModel(req.body);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length===0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid dsta');
        EmployeeModel.createEmployee(employeeReqData,(err,employee)=>{
            if(err)
                res.send(err);
                res.json({status:true,message:'Employee Created Succesfully',data: employee.insertId})
           
        })
    }
}

// update employee
exports.updateEmployee = (req,res) => {
    console.log(`request`,req.body);
    const employeeReqData = new EmployeeModel(req.body);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length===0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid dsta');
        EmployeeModel.updateEmployee(req.params.id,employeeReqData,(err,employee)=>{
            if(err)
                res.send(err);
                res.json({status:true,message:'Employee updated Succesfully',data: employee.insertId})
           
        })
    }
}

// delete employee
exports.deletEmployee = (req,res) =>{
    EmployeeModel.deleteEmployee(req.params.id,(err,employee)=>{
        if(err)
        res.send(err);
        res.json({success:true,message:'Employee deleted successfully'});
    })
}