/* eslint-disable react/prop-types */
import React from 'react';

const Kart = ({selectedCourses, totalRemainingCreditHour,selectedCoursePrice}) => {
    return (
        <div className='bg-white rounded-xl px-5 py-7'>

            <h3>Credit Hour Remaining {totalRemainingCreditHour} hr</h3>
            <hr />
           
            <div className="text-slate-600">
                <h3 className='text-xl text-black mt-2'>Course Name</h3>
            {
                selectedCourses?.map((course, index )=><h3 key={course.id} className='my-3'>{index + 1}. {course.courseName}</h3> )
            }
            </div>
            <hr />
            <p>Total Credit Hour: {20- totalRemainingCreditHour}</p>
            <hr />
            <p>Total Price: {selectedCoursePrice}USD</p>
        </div>
    );
};

export default Kart;