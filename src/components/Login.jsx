import React, { useState, useEffect, useContext } from 'react';
import { Users_URL } from '../Config';
import { ServiceContext } from '../App';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('management');
    const {serviceObj, updateServiceObj} = useContext(ServiceContext);
    const navigate = useNavigate();

    async function fetchUsers() {
        try {
            const resData = await axios.get(Users_URL);
            if(resData.data) {
                updateServiceObj('users', resData.data);
            }
        } catch (error) {
            throw new Error('Error on fetching service data..!!!'); 
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        const loggedInUser = serviceObj.users.find(user => {
            // return user.email === email && user.pwd === password && user.role === role;
            return true;
        });

        if(loggedInUser) {
            updateServiceObj('loggedInUser', loggedInUser);
            updateServiceObj('isUserLoggedIn', true);
            localStorage.setItem('token', 'valid');
            navigate('/login/user');
        }
        else {
            alert('Enter valid login details..!!!');
            updateServiceObj('isUserLoggedIn', false);
            setEmail('');
            setPassword('');
            setRole('management');
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);



  return (
    <div className='p-5 text-center'>
       {
        serviceObj.isUserLoggedIn === false ? <div>
            <h1>Login</h1>
            <form className='d-flex justify-content-center mx-auto row w-50' action="Submit" onSubmit={handleSubmit}>
                <input className='border m-3 p-2 rounded w-75' 
                    type="email" placeholder='Enter email' 
                    value={email} name="email" id="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                required/>
                <input className='border m-3 p-2 rounded w-75'
                    type="password" placeholder='Enter password' 
                    value={password} name="password" id="password" 
                    onChange={(e) => setPassword(e.target.value)}  
                required/>
                <select className='border m-3 p-2 rounded w-75'
                    name="role" id="role" 
                    onChange={e => setRole(e.target.value)}
                required>
                    <option value="role" defaultValue='customer' disabled>Role</option>
                    <option value="management">Management</option>
                    <option value="customer">Customer</option>
                </select>
                <button className='text-white bg-primary border m-3 p-2 px-3 rounded w-25'  type="submit">Submit</button>
            </form>
        </div> : <Outlet/>
       }
    </div>     
  )
}

export default Login;