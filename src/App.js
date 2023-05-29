import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { filterData } from "./data";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { apiUrl } from "./data";
import Spinner from "./components/Spinner";

function App() {

  // store variable to show spinner 
  const[loader,setLoader] = useState(true)

  //to filter card on basis of title/category
  const [category, setCategory] = useState(filterData[0].title);

  //using useState hook to render the courses in card components
  const [course, setCourse] = useState([]);

  //function to fetch data from API
  async function getData() {
   setLoader(true)
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setCourse(data.data);
    } catch (error) {
      console.log(error);
    }
    setLoader(false)
  }

  //useEffect has been used to avoid side effects
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 bg-gray-700 w-full h-[1000px]">
      <Navbar></Navbar>
      <Filter data={filterData} category={category} setCategory={setCategory} />
     <div className="flex justify-center ">
      {
        loader ? <Spinner/> : 
          <Cards course={course} category={category} setCategory={setCategory} />
      }
     </div>
    </div>
  );
}

export default App;
