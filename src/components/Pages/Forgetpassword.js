import React from 'react';
import Header from '../Common/Header';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Forgetpassword = () => {
    const navigate = useNavigate();
   
const resethandle = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    // resetPassword(email)
    // .then(() => {
    //     toast.success("Verify your email");
    //     navigate("/login");
       
    // })
    // .catch((error) => {
    //     toast.error(error.message)
    // })
}

    return (
        <div>
            <Header></Header>
            <div className='login-section w-86 h-86'>
                <h1>Login</h1>
                    <form onSubmit={resethandle}>
                        <label htmlFor="userName">User Name:</label>
                        <input
                            type="text"
                            id="username"
                            required
                            className='w-50 h-6 outline-none'
                        />
                        <label htmlFor="userEmail">User Email:</label>
                        <input
                            type="text"
                            autoComplete="off"
                            required
                            className='w-50 h-6 outline-none text-sm'
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className='w-50 h-6 outline-none'
                        />
                        <button>Reset Password</button>
                    </form>
                </div>
        </div>
    );
};

export default Forgetpassword;