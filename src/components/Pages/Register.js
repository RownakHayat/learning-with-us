import { useRef, useState, useEffect, useContext } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Share_context/AuthContext/AuthProvider";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc"
import fbLogo from '../../../src/assest/image/facebook.png'

// import {getAuth} from 'firebase/auth'
// import app from '../firebase/firebaseConfiguer'

// const auth = getAuth(app);

const Register = () => {
  const {register: userData, logInwithGoogle,logInWhithFaccbook } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errMsg },
      } = useForm()
    

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [matchPassword, setMatchPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const formSubmit = (data) => {
        console.log(data);
        // if button enabled with JS hack
        let regis = { user, email, password, matchPassword };
        // console.log(regis);
        // fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(data)
        // }).then((res) => {
        //     toast.success('Registered successfully')
        //     navigate('/login');
        // }).catch((err) => {
        //     toast.error('Failed :' + err.message);
        // });
        
        userData(data?.email, data?.password)
            .then(result => {
                const user = result.user
                navigate('/login')
                console.log('reg', user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGoogleLogin =() =>{
        logInwithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    const handleFacebookLogIn =() =>{
        logInWhithFaccbook()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => 
            console.error(error));
    }
    return (
        <div className="MainPage">
            {success ? (
                <div className='login-section'>
                    <h1>Success!</h1>
                    <p>
                        <a href="/login">Sign In</a>
                    </p>
                </div>
            ) : (
            <div className='login-section w-96 flex p-6' >
                {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                <h1>Register</h1>
                <div className="flex">
                    <div className="">
                        <button className="border-none text-5xl" 
                        onClick={handleGoogleLogin}
                        > <FcGoogle /> </button>
                    </div>
                    <div className="">
                        <button
                        onClick={handleFacebookLogIn}
                         className="border-none"> <img src={fbLogo} alt="" className="w-10" /> </button>
                    </div>
                </div>
                <form onSubmit={handleSubmit(formSubmit)} >
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        // ref={userRef}
                        {...register("user")}
                        required
                        className="outline-none"
                    // aria-invalid={validName ? "false" : "true"}
                    // aria-describedby="uidnote"
                    // onFocus={() => setUserFocus(true)}
                    // onBlur={() => setUserFocus(false)}
                    />
                    <label htmlFor="email">
                        User Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="outline-none"
                        {...register("email")}
                    />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="outline-none"
                        {...register("password")}
                    />

                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPassword(e.target.value)}
                        value={matchPassword}
                        required
                        className="outline-none"
                    // aria-invalid={validMatch ? "false" : "true"}
                    // aria-describedby="confirmnote"
                    // onFocus={() => setMatchFocus(true)}
                    // onBlur={() => setMatchFocus(false)}
                    />

                    <button >Sign Up</button>
                </form>
                <p>
                    Already registered?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <a href="/login">Login</a>
                    </span>
                </p>
            </div>
            )} 
        </div>
    )
}

export default Register
