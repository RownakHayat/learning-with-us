import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cetagory = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            
        </div>
    );
};

export default Cetagory;