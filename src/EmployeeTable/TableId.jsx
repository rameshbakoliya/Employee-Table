import React from 'react';
import './Table_Style.css';
import './EmployeeData';
import EmployeeData from './EmployeeData';

const TableId = () => {
  return (
    <><h1 style={{ textAlign: 'center' }}>Employee Details</h1>
      {EmployeeData.map((props) => {
        return (
          <div>
            <table>
              <tr>
                <th><spin className="card__category">S.Number</spin></th>
                <th> <h2 className="card__title">Name  </h2></th>
                <th> <h2 className="card__title"> Gender</h2></th>
                <th> <h2 className="card__title">City</h2></th>
                <th> <h2 className="card__title">Phone Number</h2></th>
                <th> <h2 className="card__title"> Salary</h2></th>
              </tr>
            </table>

          </div>
        )
      })}
      <button > Next</button>
    </>
  )
}
export default TableId;