import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import './Login.css';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in Successfully", "Success")
            Navigate("/");
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
           
            <div className=' container login my-4'>
                <form onSubmit={handleSubmit}>
                    <div className='loginheading'>
                    <h2>Login</h2></div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                    </div>
                     
                    <div className='Loginbutton'> 
                    <button type="submit" className="btn">Submit</button></div> 
                </form>
            </div>
        
        <BottomNav/>
        </>
    )
}

export default Login