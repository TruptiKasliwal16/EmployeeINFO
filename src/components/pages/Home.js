import  React, {useState,useEffect}  from "react";
import axios from "axios";
import {Link} from "react-router-dom"
const Home = () => {
    const [users,setUser]=useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3006/users");
setUser(result.data);   }
const deleteUser = async id =>{
await axios.delete(`http://localhost:3006/users/${id}`);
loadUsers();
}

    return (
        <div className="container">
            <div className="py-4">
                <h1>EmployeeList
                <Link className="btn btn-primary float-right" to="/users/add">Add Employee</Link>
                </h1>
                
                <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Salary</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index) => (
            <tr>
                <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email }</td>
            <td>{user.phone}</td>
            <td>{user.salary}</td>
            <td>
                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    <span className="material-icons">visibility</span></Link>
                <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                <span className="material-icons">edit</span>
                </Link>
                <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>
                <span className="material-icons">delete</span>
                </Link>

            </td>
            </tr>
        ))
    }
  </tbody>
</table>


  
            </div>
        </div>
    );
};
export default Home;