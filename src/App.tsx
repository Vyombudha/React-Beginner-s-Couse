
// import Counter from "./Day 1/Counter";

import StudentCard from "./Day 2 Assignment/StudentCard"
import type { StudentCardProps } from "./Day 2 Assignment/StudentCard";

// import Card from "./Day 2/Card";
export default function App() {
  const STUDENTS_DATA: Array<StudentCardProps> = [
    {
      userName: "Vyom Budha",
      id: "1",
      classNumber: "f254",
      address: "Imadole, Lalitpur"
    },
    {
      userName: "Aarav Sharma",
      id: "2",
      classNumber: "f254",
      address: "Baneshwor, Kathmandu"
    },
    {
      userName: "Sita Thapa",
      id: "3",
      classNumber: "f255",
      address: "Patan, Lalitpur"
    },
    {
      userName: "Rohan Gurung",
      id: "4",
      classNumber: "f255",
      address: "Pokhara, Kaski"
    },
    {
      userName: "Anisha Rai",
      id: "5",
      classNumber: "f256",
      address: "Dharan, Sunsari"
    },
    {
      userName: "Bibek Kc",
      id: "6",
      classNumber: "f256",
      address: "Bhaktapur, Nepal"
    },
    {
      userName: "Priya Adhikari",
      id: "7",
      classNumber: "f257",
      address: "Chitwan, Nepal"
    },
    {
      userName: "Nischal Lama",
      id: "8",
      classNumber: "f257",
      address: "Boudha, Kathmandu"
    },
    {
      userName: "Samjhana Karki",
      id: "9",
      classNumber: "f258",
      address: "Kirtipur, Kathmandu"
    },
    {
      userName: "Suman Basnet",
      id: "10",
      classNumber: "f258",
      address: "Hetauda, Makwanpur"
    },
    {
      userName: "Muskan Poudel",
      id: "11",
      classNumber: "f259",
      address: "Butwal, Rupandehi"
    }
  ]


  return (
    <div className="flex flex-col bg-gray-300 min-h-screen w-full p-4">
      {STUDENTS_DATA.map(student => (
        <StudentCard
          key={student.id}
          userName={student.userName}
          id={student.id}
          address={student.address}
          classNumber={student.classNumber}
        />
      ))}
    </div>
  )
}