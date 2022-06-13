<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeesController extends Controller
{
    //get employee list
    public function getEmployeeList()
    {
        $employees = Employee::all();
        return response()->json($employees);
    }

    // get individual employee details
    public function getEmployeeDetail(Request $request)
    {
        $employee = Employee::find($request->get('id'));
        return response()->json($employee);
    }

    // update employee data
    public function updateEmployeeData(Request $request)
    {   
        $employeeId =  $request->get('id');
        $employeeName = $request->get('employee_name');
        $salary = $request->get('salary');

        Employee::where('id', $employeeId)->update(['employee_name' => $employeeName, 'salary' => $salary]);
        return response()->json(['success' => 'Employee data updated successfully']);
    }

    // delete employee data
    public function destroy(Employee $id)
    {
        $id->delete();
        return response()->json(['success' => 'Employee data deleted successfully']);
    }

    // store employee data
    public function store(Request $request)
    {
      
        $employeeName = $request->get('employee_name');
        $employeeSalary = $request->get('salary');
        Employee::create(['employee_name' => $employeeName, 'salary' => $employeeSalary]);
        return response()->json(['success' => 'Employee data stored successfully']);
    }

}
