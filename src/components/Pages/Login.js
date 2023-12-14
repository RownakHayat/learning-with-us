import { useCallback, useContext, useRef, useState, } from 'react';
import axios from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Share_context/AuthContext/AuthProvider';
import { useForm } from 'react-hook-form';


// const LOGIN_URL = '/auth';


const Login = () => {    
const {login : userData} = useContext(AuthContext)


 const {
    register,
    handleSubmit,
    reset,
    formState: { errMsg },
 } = useForm();

const resetForm = useCallback(async () => {
    const result = await fetch("")
    reset(result)
}, [reset])

 const navigate = useNavigate();

    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])
    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    const loginSubmit = (data) => {
       console.log(data);
       let logIn = { user, email, pwd};
        // console.log(logIn);
        // const form = event.target;
        
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
        userData( email, pwd )
           .then(result => {
                const user = result.user;
                resetForm.reset();
                navigate('/')
                console.log(user);
            })
           .catch(errMsg => {
            console.error(errMsg);
           })
    };

    return (
        <div className='MainPage'>
            {success ? (
                <div className='login-section'>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </div>
            ) : (
                <div className='login-section w-86 h-86 p-6'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit(loginSubmit)}>
                        <label htmlFor="userName">User Name:</label>
                        <input
                            type="text"
                            id="username"
                            {...register("user")}
                            required
                            className='w-50 h-6 outline-none'
                        />
                        <label htmlFor="userEmail">User Email:</label>
                        <input
                            type="text"
                            id="email"
                            required
                            {...register("email")}
                            className='w-50 h-6 outline-none text-sm'
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            required
                            {...register("pwd")}
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
