import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { AuthContext } from '../../Share_context/AuthContext/AuthProvider';

const Home = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('user', user);
const handleLogOut = () =>{
    logOut()
     .then(() =>{})
     .catch(error => console.error(error));

}
    return (
        <>
            <div className='bg-[#2699fb] h-36 min-w-fit'>
                <div className="">
                    <div className="flex justify-between w-full py-8">
                        <div className="text-1xl font-bold">
                            Learning With Us
                        </div>
                        <div className="flex">
                            <ul className='flex text-white gap-4'>
                                <Link to='/home'>Home</Link>
                                <Link to="/course">Course</Link>
                                <Link to="/enrollCourse">Enroll-Course</Link>
                                <Link to="/curses">Courses</Link>
                                <Link to="/coursesDetails">Course Details</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/faq">FAQ</Link>
                                <Link to="/login" className='btn btn-primary'>Login</Link>
                                <Link onClick={handleLogOut}>Log out</Link>
                            </ul>
                            <div className="user text-white">
                                <FaUser />
                                <img src="" alt="" />
                                <p>{user?.displayName && <span>{user.displayName}</span>}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;