import React from "react";
import "./StudentInfo.css";

const StudentInfo = (props) =>{
    return(
        <div className="studentinfo-container">
            <h2>{props.name}</h2>
            <h3>{props.status}</h3>
            <p>{props.bio}</p>
        </div>
    );
}

export default StudentInfo;