import { useEffect, useState } from "react";
import CourseCard from "../../components/Home/CourseCard";
import Kart from "../../components/Home/Kart";

const Home = () => {

    const [courses, setCourses] = useState([])
    const [selectedCourses, setSelectedCourses] = useState([])
    const [totalRemainingCreditHour, setTotalCreditHour] = useState(20)
    const [selectedCoursePrice, setSelectedCoursePrice] = useState(0)


    useEffect(() => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setCourses(data))
    const getRemainingHour = () => {
      let selectedHour = 0;
      let selectedPrice = 0;
      for (const course of selectedCourses) {
        selectedHour = selectedHour + course.credit
        selectedPrice = selectedPrice + course.price
      }
      const remainingHour = 20 - selectedHour;
      setTotalCreditHour(remainingHour)
      setSelectedCoursePrice(selectedPrice)
    }
    getRemainingHour();
    },[selectedCourses])

  const handleSelectCourse = (course) => {
    if(totalRemainingCreditHour - course.credit < 0){
      window.alert('Exiting remaining credit hour')
    }else {
      const selectedCoursesIds = selectedCourses.map(course => course.id);
      if(selectedCoursesIds.length > 0 && selectedCoursesIds.includes(course.id)){
       window.alert('Already Selected')
      }
      else{
       setSelectedCourses( (prev) => [...prev, course])
      }
    }
   
  }


  return (
    <div className="pt-10 font-medium bg-slate-100  ">
      <h2 className="text-center text-3xl">Course Registration</h2>
      <div className="grid grid-cols-[3fr,1fr] pt-10 w-11/12 mx-auto">

      <div className="w-5/6 mx-auto grid grid-cols-3 gap-x-8 gap-y-10">
        {
            courses?.map( course => <CourseCard key={course.id} course={course} handleSelectCourse={handleSelectCourse} />)
        }
      </div>
      <div className="kart">
       <Kart selectedCoursePrice={selectedCoursePrice} totalRemainingCreditHour={totalRemainingCreditHour} selectedCourses={selectedCourses}/>
      </div>
      </div>
  
    </div>
  );
};

export default Home;
