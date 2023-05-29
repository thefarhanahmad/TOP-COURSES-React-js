import Card from "./Card";

function Cards({ course, category, setCategory }) {
  function getCourses() {
    if (category === "All") {
      let allCourses = [];

      Object.values(course).forEach((c) => {
        c.forEach((cd) => {
          allCourses.push(cd);
        });
      });
      return allCourses;
    } else {
      return course[category];
    }
  }

  return (
    <div className="w-8/12 h-auto flex gap-3 p-2 justify-center rounded-md overflow-hidden flex-wrap">
      {getCourses().map((courseData) => {
        return <Card courses={courseData} key={courseData.id} />;
      })}
    </div>
  );
}
export default Cards;
