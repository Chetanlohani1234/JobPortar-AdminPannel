import React, { useEffect, useState, Fragment } from "react";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
//import './Employers.css'
import 'react-toastify/dist/ReactToastify.css';
import './User.css'

import axios from 'axios';
import * as XLSX from 'xlsx';

let page_no = 1;
let limit = 15;
let search = "";
let status = "";

const User = () => {
    const [data, setData] = useState([]);
    const [filteredData, setfilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [location,setLocation] = useState("");
    const [category, setCategory] = useState("");
    const categories = ["All", "Designation", "Location"];

    const [masterSearch,setMasterSearch] = useState("");
    const [uniqueDesignations, setUniqueDesignations] = useState([]);
    const [uniqueLocation,setUniqueLocation] = useState([]);


    const storedUserId = JSON.parse(localStorage.getItem("userId"));

    useEffect(() => {
        const fetchJobs = async () => {
          try {
            const response = await axios.get('https://jobpartal-backend.onrender.com/api/User');
            const users = response.data.Response;
            setData(users);
            setfilteredData(users);
            setUniqueDesignations([...new Set(users.map(user => user.Designation))]);
            setUniqueLocation([...new Set(users.map(user => user.CurrentLocation))])
          } catch (err) {
            //setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchJobs();
      }, []);

      console.log("sdcsdxsd",filteredData);

      useEffect(() => {
        filterData();
    }, [name, designation,location,masterSearch]);

    const filterData = () => {
        let result = data;

        if (masterSearch) {
            result = result.filter(user =>
                user.UserName.toLowerCase().includes(masterSearch.toLowerCase()) ||
                user.EmailAddress.toLowerCase().includes(masterSearch.toLowerCase()) ||
                user.MobileNumber.toLowerCase().includes(masterSearch.toLowerCase()) ||
                user.CurrentLocation.toLowerCase().includes(masterSearch.toLowerCase())||
                user.Designation.toLowerCase().includes(masterSearch.toLowerCase())

            );
        } else {
            if (name) {
                result = result.filter(user => 
                    user.UserName.toLowerCase().includes(name.toLowerCase())
                );
            }

            if (designation) {
                result = result.filter(user =>
                    user.Designation === designation
                );
            }

            if (location) {
                result = result.filter(user =>
                    user.CurrentLocation === location
                );
            }
        }

        setfilteredData(result);
    };


      const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
        XLSX.writeFile(workbook, "FilteredUsers.xlsx");
    };
    


    return (
        <div className="row">
            <ToastContainer></ToastContainer>
            <div className="col-md-12">
                <h4 className="f-700 mb-4">All User</h4>    
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <div className="table-header d-flex align-items-center mb-3 filter-row">
                        
  
                    
                    <div className="row w-100">
                    <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Search ... "
                            value={masterSearch}
                            onChange={e => setMasterSearch(e.target.value)}
                            className="form-control"
                        />
                      </div>

                     <div className="col-md-3">
                        <input
                            type="text"
                            placeholder="Search Name ..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="form-control"
                        />
                     </div>   
                     <div className="col-md-3">
                        <select
                            value={designation}
                            onChange={e => setDesignation(e.target.value)}
                            className="form-control"
                        >
                            <option value="">Select Designation</option>
                            {uniqueDesignations.map(des => (
                                <option key={des} value={des}>
                                    {des}
                                </option>
                            ))}
                        </select>
                     </div>   
                     <div className="col-md-3">
                        <select
                           value={location}
                           onChange={e => setLocation(e.target.value)}
                           className="form-control"
                        >
                           <option value="">Select Location</option>
                           {uniqueLocation.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                           ))

                           }
                        </select>
                      </div>     
                    </div>

                    <button className="btn btn-primary ms-3 download-btn" 
                    onClick={handleDownload}
                    >
                        Download
                    </button>
                </div>
                <div className="col-lg-6 m-auto">
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Mobile No.</th>
                            <th scope="col">Current Location</th>
                            <th scope="col">Designation</th>
                            {/* <th scope="col">Description</th> */}
                            <th scope="col" className="text-end">Action</th>


                        </tr>
                    </thead>
                    <tbody>
                          
                    {filteredData?.map(job => (
                            <tr key={job.Id}>
                                <td>{job.UserName}</td>
                                <td>{job.EmailAddress}</td>
                                <td>{job.MobileNumber}</td>
                                {/* <td>{job.SalaryMin} to {job.SalaryMax}</td> */}
                                {/* <td>{(job.SalaryMin / 100000).toFixed(2)} Lakh to {(job.SalaryMax / 100000).toFixed(2)} Lakh</td> */}
                                <td>{job.CurrentLocation}</td>
                                <td>{job.Designation}</td>
                                <td width="150">
                                    <span className="d-flex justify-content-end">
                                        <Link to={`/admin/User/${job.Id}`} className="mx-2">
                                            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.6951 6.47656C16.6951 6.47656 13.6951 0.976562 8.69507 0.976562C3.69507 0.976562 0.695068 6.47656 0.695068 6.47656C0.695068 6.47656 3.69507 11.9766 8.69507 11.9766C13.6951 11.9766 16.6951 6.47656 16.6951 6.47656ZM1.86777 6.47656C1.92469 6.38977 1.98961 6.29333 2.06234 6.18898C2.39723 5.70849 2.89138 5.06947 3.52718 4.43367C4.8161 3.14474 6.57569 1.97656 8.69507 1.97656C10.8145 1.97656 12.574 3.14474 13.863 4.43367C14.4988 5.06947 14.9929 5.70849 15.3278 6.18898C15.4005 6.29333 15.4654 6.38977 15.5224 6.47656C15.4654 6.56335 15.4005 6.65979 15.3278 6.76414C14.9929 7.24463 14.4988 7.88366 13.863 8.51946C12.574 9.80838 10.8145 10.9766 8.69507 10.9766C6.57569 10.9766 4.8161 9.80838 3.52718 8.51946C2.89138 7.88366 2.39723 7.24463 2.06234 6.76414C1.98961 6.65979 1.92469 6.56335 1.86777 6.47656Z" fill="#228B22" />
                                                <path d="M8.69507 3.97656C7.31436 3.97656 6.19507 5.09585 6.19507 6.47656C6.19507 7.85727 7.31436 8.97656 8.69507 8.97656C10.0758 8.97656 11.1951 7.85727 11.1951 6.47656C11.1951 5.09585 10.0758 3.97656 8.69507 3.97656ZM5.19507 6.47656C5.19507 4.54357 6.76207 2.97656 8.69507 2.97656C10.6281 2.97656 12.1951 4.54357 12.1951 6.47656C12.1951 8.40956 10.6281 9.97656 8.69507 9.97656C6.76207 9.97656 5.19507 8.40956 5.19507 6.47656Z" fill="#228B22" />
                                            </svg>
                                        </Link>

                                        <a href={`http://job.uttarbharti.com/login?rplog=${job.logId}`} className="mx-2">
                                            <svg
                                                width="17"
                                                height="12"
                                                viewBox="0 0 17 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M1 6H11M11 6L8 3M11 6L8 9"
                                                stroke="#228B22"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                />
                                                <path
                                                d="M5 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V9C17 9.53043 16.7893 10.0391 16.4142 10.4142C16.0391 10.7893 15.5304 11 15 11H5"
                                                stroke="#228B22"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>

                                    <a  className="mx-2">
                                        <svg
                                            width="17"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 4.5C7.30558 4.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 19.5 12 19.5C16.6944 19.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 4.5 12 4.5ZM12 18C8.41015 18 5.5 15.0899 5.5 12C5.5 8.91015 8.41015 6 12 6C15.0899 6 18 8.91015 18 12C18 15.0899 15.0899 18 12 18Z"
                                                stroke="#228B22"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 9.5C10.067 9.5 8.5 11.067 8.5 13C8.5 14.933 10.067 16.5 12 16.5C13.933 16.5 15.5 14.933 15.5 13C15.5 11.067 13.933 9.5 12 9.5Z"
                                                stroke="#228B22"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>

                                    </span>
                                </td>
                            </tr>
                        ))}
                            
      
                    </tbody>
                </table>
            
            </div>


        </div>
    );
};

export default User;