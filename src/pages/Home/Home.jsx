import { useEffect, useState } from "react";
import CourseCard from "../../components/Home/CourseCard";

const Home = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
    },[])

  return (
    <div className="pt-10 font-medium bg-slate-100  ">
      <h2 className="text-center text-3xl">Course Registration</h2>
      <div className="grid grid-cols-[3fr,1fr] pt-10">

      <div className="w-5/6 mx-auto grid grid-cols-3 gap-x-8 gap-y-10">
        {
            courses?.map( course => <CourseCard key={course.id} course={course}/>)
        }
      </div>
      <div className="kart">
        Course Name
      </div>
      </div>
  
    </div>
  );
};

export default Home;
