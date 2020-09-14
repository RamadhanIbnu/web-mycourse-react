import React from "react";
import Avatar from "./components/Avatar/Avatar.js";
import "./Header.css";
import StudentInfo from "./components/StudentInfo/StudentInfo.js";

function Header() {
  return (
    <div>
      <div className="containerStudent">
        <Avatar/>
        <StudentInfo 
          name="Ramadhan Ibnu" 
          status="Bootcamp Student" 
          bio="coding membuat saya belajar bagaimana berpikir"
        />
      </div>
    </div>
    
  );
}

export default Header;
