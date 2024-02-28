interface ScheduleCardProps{
    time:string;
    title:string;
    description:string
    location:string;
}
const ScheduleCard = ({time, title, description, location}: ScheduleCardProps) => {

   
    return (
        
        <div className="fade-in w-screen">
            <div className="flex items-center flex-row gap-3 border-b-2 border-black mx-80 ">
                <p className="w-64 text-base">{time}</p>
                <div className="flex items-start flex-col">
                    <h3 className="text-red-600  text-lg">{title}</h3>
                    <p className="ml-6 text-sm text-left">{description}</p>
                </div>
                <p className="text-sm w-96">{location}</p>
            </div>
       </div>
    );
}

export default ScheduleCard;