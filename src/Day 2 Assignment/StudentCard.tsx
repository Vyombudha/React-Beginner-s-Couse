import { useState } from "react";
import Avatar from "./Avatar";


export interface StudentCardProps {
  userName: string;
  id: string;
  classNumber: string;
  address: string
};


function StudentCard(props: StudentCardProps) {
  const [isPresent, setIsPresent] = useState(false);
  return (
    <div
      className={`
        flex h-10/12 w-1/3 items-center
        border-2 p-8 text-2xl m-16 rounded-3xl
        shadow-md shadow-gray-800
        transition duration-150 hover:-translate-y-1.5
        ${isPresent ? "bg-green-200 border-green-700" : "bg-red-200 border-red-700"
        }
      `}
      onClick={() => setIsPresent(prev => !prev)}
    >
      <Avatar userName={props.userName} />
      <div>
        <p className="text-4xl text-blue-400">{props.userName}</p>
        <p><span className="font-semibold">Class:</span> {props.classNumber}</p>
        <p><span className="font-semibold">Id:</span> {props.id}</p>
        <p><span className="font-semibold">Address:</span> {props.address}</p>
      </div>
    </div>
  )
}

export default StudentCard