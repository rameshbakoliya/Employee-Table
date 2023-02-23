import React from 'react'
import './Table_Style.css'
import EmployeeData from './EmployeeData';


function Table() {

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Employee Details</h1>
      <table style={{ textAlign: "center" }}>
        <tbody className='table_data'>
          <tr>
            <th>S.No.</th>
            <th> Name </th>
            <th> Gender</th>
            <th> City</th>
            <th> Phone Number</th>
            <th>  Salary</th>
          </tr>


          {EmployeeData.map((employee) => {
            return (

              <tr className="card__title">
                <th>{employee.id}</th>
                <th>{employee.name}</th>
                <th>{employee.gender}</th>
                <th>{employee.City}</th>
                <th>{employee.PhoneNumber}</th>
                <th>{employee.Salary}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
          
     {/* <div className='pagination_btn'>
     <button onClick={()=> getPrevPage()}>Previous </button>
      <p>{page}of{nbpage}</p>  
      <button onClick={()=> getNextPage}>Next</button>  
     </div> */}
    </>
  )
}
export default Table;
