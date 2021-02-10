import react,{useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
const User = () => {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
        salary:""

    });
    const { id } = useParams();
    useEffect(() =>{
        loadUser();
    },[]);
    const loadUser = async () => {
        const res= await axios.get(
            `http://localhost:3006/users/${id}`
        );
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                BackToHome
            </Link>
            <div className="container w-90 mx-auto shadow p-5">
            <h1>Employee Details</h1>
            <h3 className="display-5">User ID:{id}</h3>
            <hr />
            <h5><b>Employee Name: </b>{user.name}<br /><br />
            <b>Employee UserName:</b> {user.username}<br /><br />
            <b>Employee Email:</b> {user.email}<br /><br />
            <b>Employee PhoneNo:</b> {user.phone}<br /><br />
            <b>Employee Salary:</b> {user.salary}<br /><br />
            <b>Website:</b> {user.website}</h5>
            </div>
        </div>
    )
};
export default User;