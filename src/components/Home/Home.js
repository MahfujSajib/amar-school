import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Home;