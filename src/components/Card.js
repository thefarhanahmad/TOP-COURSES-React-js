import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ courses }) {
  //usestate to set Like or unLike btn
  const [unlike, setUnlike] = useState(false);
  //function to handle like button and Toast
  function likeHandler() {
    if (unlike === true) {
      setUnlike(false);
      toast.warn("Like Removed");
    } else {
      setUnlike(true);
      toast.success("Liked Successfully");
    }
  }
  let description = courses.description;

  return (
    <div className="bg-gray-800 rounded-md text-white flex flex-col w-[31%] overflow-hidden">
      <div className="w-full relative">
        <img src={courses.image.url} alt="img" />
        <div
          onClick={likeHandler}
          className="bg-white cursor-pointer inline-block absolute -bottom-2 right-4 rounded-full text-2xl p-1"
        >
          {unlike ? <FcLike /> : <FcLikePlaceholder />}
        </div>
      </div>
      <div className="p-2 space-y-1">
        <h2 className="text-xl">{courses.title}</h2>
        <p className="text-md">
          {description.length >= 100
            ? `${description.substring(0, 100)}....`
            : description}
        </p>
      </div>
    </div>
  );
}
export default Card;
