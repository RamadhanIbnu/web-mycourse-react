import React from 'react';
import avatar from '../../assets/icons8-test-account-96.png';
import './CourseCard.css';

const CourseCard = (props) =>{
    return(
        <div className='card'>
            <div className="video-card">
                <iframe title="video-course" width="200" height="100" src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
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