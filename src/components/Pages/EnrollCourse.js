import React, { useEffect, useState } from 'react';
import Course from './Course';
import { Link } from 'react-router-dom';


const EnrollCourse = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() =>{
        fetch('http://localhost:3001/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
           <h2>Pease Enroll Course: {categories.length}</h2>

           <div className="flex gap-4 bg-red-300">
            {
                categories.map(category => <div key={category.id}>
                    <Link>{category.name}</Link>
                </div>
                    )
            }
           </div>
        </div>
    );
};

export default EnrollCourse;