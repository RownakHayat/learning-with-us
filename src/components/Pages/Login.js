import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../Share_context/AuthContext/AuthProvider';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';


const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])
    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        
        // try {
        //     const response = await axios.post(LOGIN_URL,
        //         JSON.stringify({ user, email, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response));
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ user, email, pwd, roles, accessToken });
        //     setUser('');
        //     setEmail('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        // }
        console.log(pwd, email, user);
    }

    return (
        <div className='MainPage'>
            {success ? (
                <div className='login-section'>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </div>
            ) : (
                <div className='login-section w-86 h-86 p-6'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="userName">User Name:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            className='w-50 h-6 outline-none'
                        />
                        <label htmlFor="userEmail">User Email:</label>
                        <input
                            type="text"
                            id="useremail"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className='w-50 h-6 outline-none text-sm'
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className='w-50 h-6 outline-none'
                        />


                        <button>Login</button>
                       <p className='text-blue-500'>
                        <Link to='/forgetpass'>Forget Password</Link>
                       </p>
                    </form>
                    <p className=''>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/register" >Register</a>
                        </span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Login
