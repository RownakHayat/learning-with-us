import { useRef, useState, useEffect, useContext } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Share_context/AuthContext/AuthProvider";
// import {getAuth} from 'firebase/auth'
// import app from '../firebase/firebaseConfiguer'

// const auth = getAuth(app);

const Register = () => {
    const {register} = useContext(AuthContext);
    // console.log(register);

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [matchPassword, setMatchPassword] = useState("");


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        let regis = { user, email, password, matchPassword };
        // console.log(regis);
        // fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(regis)
        // }).then((res) => {
        //     toast.success('Registered successfully')
            // navigate('/login');
        // }).catch((err) => {
        //     toast.error('Failed :' + err.message);
        // });
        // console.log(regis);
            register(email, password)
            .then(result => {
                const user = result.user;
                navigate('/login')
                console.log('reg', user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    
    return (
        <div className="MainPage">
            {/* {success ? (
                <div className='login-section'>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </div>
            ) : ( */}
            <div className='login-section w-96 flex p-6' >
                {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                <h1>Register</h1>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        // ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
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
                        // ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        className="outline-none"
                    // aria-invalid={validEmail ? "false" : "true"}
                    // aria-describedby="uidnote"
                    // onFocus={() => setUserFocus(true)}
                    // onBlur={() => setUserFocus(false)}
                    />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        className="outline-none"
                    // aria-invalid={validPwd ? "false" : "true"}
                    // aria-describedby="pwdnote"
                    // onFocus={() => setPwdFocus(true)}
                    // onBlur={() => setPwdFocus(false)}
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
            {/* )} */}
        </div>
    )
}

export default Register
