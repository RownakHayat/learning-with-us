import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() =>{
        fetch('http://localhost:3001/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="my-5">
            <p className="fs-5 cat-head">All Categories</p>
            {
                categories.map(category => <div key={category.id} className="text-start course-menu border-bottom">
                    <Link className="text-success text-decoration-none" to={`/enrollcourses/${category.id}`}>{category.name}</Link>
                </div>
                    )
            }
            
        </div>
    );
};

export default LeftSide;