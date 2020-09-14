import React from 'react';
import avatar from '../../assets/icons8-test-account-96.png';
import './CourseCard.css';

const CourseCard = (props) =>{
    return(
        <div className='card'>
            <div className="video-card">
                <video
                    // src = {}
                    // alt = 'video about html'
                    // className = 'video-card'
                />
            </div>
            <div className='about-card'>
                <h4>{props.title}</h4>
                <p>{props.detail}</p>
            </div>
            <div className='avatar-card'>
                <img 
                    src = {avatar}
                    alt = 'avatar'
                    className = 'avatar-card'
                />
            </div>
            
        </div>
    );
}

export default CourseCard;