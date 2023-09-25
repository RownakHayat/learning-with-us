import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className="max-w-[1240px] flex justify-between mx-auto">
                <div className="text-2xl font-bold">
                    Learning With Us
                </div>
                <ul className='flex text-white gap-5'>
                 
                    <Link to='/'>Home</Link>
                    <Link to="/course">Course</Link>
                    <Link to="/enrollCourse">Enroll-Course</Link>
                    <Link to="/curses">Courses</Link>
                    <Link to="/coursesDetails">Course Details</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/login" className='btn btn-primary'>Login</Link>
                </ul>
            </div>
        </div>
    );
};

export default Home;