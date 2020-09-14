import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import './Course.css';

const Course = () =>{
    return(
        <div className='container-course'>
            <div className='course-header'>
                <h1>My Course</h1>
            </div>
            <div className='container-course-card'>
                <CourseCard 
                    title='HTML Foundation' 
                    detail='Learn HTML Fundamental for building website'
                />

                <CourseCard
                    title='CSS Foundation'
                    detail='Learn CSS Fundamental for design website'
                />
            </div>
        </div>
    );
}

export default Course;