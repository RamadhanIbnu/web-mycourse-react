import React from "react";
import "./StudentInfo.css";

const StudentInfo = (props) =>{
    return(
        <div className="studentinfo-container">
            <h1>{props.name}</h1>
            <h3>{props.status}</h3>
            <p>{props.bio}</p>
        </div>
    );
}

export default StudentInfo;