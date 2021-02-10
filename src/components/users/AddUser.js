import axios from "axios";
import React,{useState} from "react";
import {useHistory} from 'react-router-dom'
const AddUser = () => {
    const history = useHistory();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
        salary:""

    });
    const {name,username,email,phone,website,salary}=user;
    const onInputChange = e =>{
    setUser({...user,[e.target.name]:e.target.value})    
};
const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3006/users",user);
    history.push("/");
}
    return(
<div className="container" >
    <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>
<form onSubmit={e => onSubmit(e)}>
  <div class="form-group">
    <label>Name:</label>
    <input type="text" class="form-control form-control-lg"
    placeholder="Enter your name" 
    name="name"
    value={name} 
    onChange={e => onInputChange(e)}
    />
  </div>
  <div class="form-group">
    <label>UserName:</label>
    <input type="text" class="form-control form-control-lg"
    placeholder="Enter your Username" 
    name="username"
    value={username} 
    onChange={e => onInputChange(e)}
    />
  </div>
  
  <div class="form-group">
    <label>Email:</label>
    <input type="email" class="form-control form-control-lg"
    placeholder="Enter your E-mail Address" 
    name="email"
    value={email} 
    onChange={e => onInputChange(e)}

    />
  </div>
  <div class="form-group">
    <label>Phone Number:</label>
    <input type="text" class="form-control form-control-lg"
    placeholder="Enter your Phone Number" 
    name="phone"
    value={phone}
    onChange={e => onInputChange(e)}
 
    />
  </div>
  <div class="form-group">
    <label>Salary:</label>
    <input type="text" class="form-control form-control-lg"
    placeholder="Enter your Salary" 
    name="salary"
    value={salary}
    onChange={e => onInputChange(e)}
 
    />
  </div>
  <div class="form-group">
    <label>Website:</label>
    <input type="text" class="form-control form-control-lg"
    placeholder="Enter your Website name" 
    name="website"
    value={website} 
    onChange={e => onInputChange(e)}

    />
  </div>
  
  <button type="submit" class="btn btn-primary">AddUser</button>
</form>  
</div>
</div> )
}
export default AddUser;