import axios from "axios";
import React,{useState,useEffect} from "react";
import {useHistory , useParams} from 'react-router-dom';
const EditUser = () => {
    const history = useHistory();
    const { id } = useParams();
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
useEffect(() => {
    loadUser()
},[]);
const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3006/users/${id}`,user);
    history.push("/");
}
const loadUser = async () => {
    const result =await axios.get(`http://localhost:3006/users/${id}`);
    setUser(result.data);
};

    return(
<div className="container" >
    <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
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
    placeholder="Enter your salary" 
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
  
  <button type="submit" class="btn btn-warning">UpdateUser</button>
</form>  
</div>
</div> )
}
export default EditUser;