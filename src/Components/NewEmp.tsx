import React from 'react'

interface Employee{
    EmpName: String;
    JobTitle: String;
    Salary: number;
}

function Welcome(Props:Employee) {
    const {EmpName, JobTitle, Salary} = Props;
    return (<tr><td>{EmpName}</td><td>{JobTitle}</td> <td>{Salary}</td></tr>)
}

const NewEmp = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                <Welcome EmpName="Muhammad Siddique" JobTitle="WordPress developer" Salary={30000}/>
                <Welcome EmpName="Muhammad Tariq" JobTitle="AI developer" Salary={300000}/>
                <Welcome EmpName="Muhammad Asif" JobTitle="Android developer" Salary={50000}/>
                <Welcome EmpName="Muhammad Shoaib" JobTitle="ProJect Manager" Salary={120000}/>
                </tbody>
            </table>
            
        </div>
    )
}
export default NewEmp;