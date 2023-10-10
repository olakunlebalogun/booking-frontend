import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Table = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 20;
    const lastIndex = recordsPerPage * currentPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(data.length / recordsPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== nPage) {
            setCurrentPage(currentPage + 1)
        }
    }
     const PrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
     }
     const changeCurrentPage = (id) => {
        setCurrentPage((id) => {
            return id;
        } )
     }

     

  return (
    <div>
      <div className='card-header bg-dark text-light'>
        <i className='fas fa-table me-1'></i>
        DataTable Example
      </div>

      <div className='card-body'>
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li className='page-item'>
              {/* <a className='page-link' href={link} onClick={PrevPage}>
                Previous
              </a> */}
              <Link className='page-link' onClick={PrevPage}>
                Previous
              </Link>
            </li>
            {numbers.map((number, index) => (
              <li
                className={`page-item ${
                  currentPage === number ? 'active' : ''
                }`}
              >
                {/* <a
                  className='page-link'
                  href={link}
                  onClick={() => changeCurrentPage()}
                >
                  {number}
                </a> */}
                <Link className='page-link' onClick={() => changeCurrentPage()}>
                  {number}
                </Link>
              </li>
            ))}
            <li className='page-item'>
              {/* <a className='page-link' href={link} onClick={nextPage}>
                Next
              </a> */}
              <Link className='page-link' onClick={nextPage}>
                Next
              </Link>
            </li>
          </ul>
        </nav>
        <table
          id=''
          className='table table-striped table-hover table-dark'
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Appointment Date</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rs) => (
              <tr>
                <td>{rs.id}</td>
                <td>{rs.firstName}</td>
                <td>{rs.lastName}</td>
                <td>{rs.email}</td>
                <td>{rs.phone}</td>
                <td>{rs.appointmentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table