export interface CardProps {
    name: string;
    id: number;
}


function Card(props: CardProps) {
    return (
        <div id='Card' className="bg-green-300 border-2 p-4 text-3xl w-fit h-32 ">
            <h1>Student Name: {props.name}</h1>
            <h2>Student ID: {props.id}</h2>
        </div>
    )
}

export default Card