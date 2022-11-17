import React, { useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import axios from "axios";

const EmployeesTable = () => {

    const [search, setSearch] = useState("");
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const getEmployees = async () => {
      try {
        const response = await axios.get("https://random-data-api.com/api/users/random_user?size=3");
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } catch (error){
        console.log(error);  
      }
    };
   
    const columns =[
      {
        name: "ID",
        selector: (row) => row.id,
        
      },
      {
        name: "USERNAME",
        selector: (row) => row.username,
        
      },
      {
        name: "E-Mail",
        selector: (row) => row.email,
        
      },
      {
        name: "GENDER",
        selector: (row) => row.gender,
      },
      {
        name: "Action",
        cell: (row) => <button className="btn btn-primary" onClick={() => alert(row.alpha2Code)} >Edit</button>
      },
    ];
  
    useEffect(() => {
      getEmployees();
    }, []);

    useEffect(() => {
      const result =  employees.filter((employees) =>{
          return employees.name.toLowerCase().match(search.toLowerCase());
      });
      setFilteredEmployees(result);       
    }, [search]); 

  return (
    <DataTable 
        title="Employee List" 
        columns={columns} 
        data={filteredEmployees} 
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        actions={<button className="btn btn-sm btn-info">Export File</button>}
        subHeader
        subHeaderComponent={<input type="text" placeholder="Search here" className="w-25 form-control" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
  }
  /> 
  
  );

};

export default EmployeesTable;
