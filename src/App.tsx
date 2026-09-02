
// import Counter from "./Day 1/Counter";
import Card from "./Day 2/Card";
export default function App() {
  return (
    <>

      <div className="bg-red-400 text-3xl text-white p-8">
        This is a Div
      </div>


      <Card name="Ram" id={1} />
      <Card name="Shyam" id={2} />
      <Card name="Hari" id={3} />
      <Card name="Sita" id={4} />
      <Card name="Gita" id={5} />
    </>
  )
}