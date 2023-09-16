
/* eslint-disable react/prop-types */
import React from "react";
import {BsCurrencyDollar,BsBook} from 'react-icons/bs'
const CourseCard = ({course, handleSelectCourse}) => {
    const { id ,courseName, courseDetail,courseImage, price, credit} = course;
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <div className="thumbnail">
        <img src={courseImage} className="w-full" alt={courseName} />
      </div>
      <h3 className="my-3 text-xl">{courseName}</h3>
      <p className="text-sm text-slate-600 font-light">{courseDetail}</p>
      <div className="flex items-center my-5 text-center justify-around text-slate-700 text-xl">
       <span className="mr-2 flex items-center"> 
        <BsCurrencyDollar className="mr-3"/>
       price: {price}</span>
     <span className="mr-2 flex items-center">
       <BsBook className="mr-3"/>
      credit: {credit}hr</span>
        </div>
    <div className="text-center">
          <button onClick={()=> {handleSelectCourse(course)}} className="btn px-3 py-2 w-4/5  bg-blue-600 rounded text-white hover:bg-blue-700">Select</button>
    </div>
    </div>
  );
};

export default CourseCard;
