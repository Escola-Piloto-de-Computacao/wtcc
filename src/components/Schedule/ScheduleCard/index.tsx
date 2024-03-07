import React from 'react';
import { Popover } from 'antd';

interface ScheduleCardProps {
    time: string;
    title: string;
    description: string
    location: string;
};

const Loc = () => {
    return (
        <div className="col-start-1 col-span-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
                    <path fill="#D9D9D9" d="M0 0h24v24H0z" />
                </mask>
                <g mask="url(#a)">
                    <path fill="#1C1B1F" d="M12 12c.55 0 1.02-.196 1.412-.588.392-.391.588-.862.588-1.412 0-.55-.196-1.02-.588-1.412A1.926 1.926 0 0 0 12 8c-.55 0-1.02.196-1.412.588A1.926 1.926 0 0 0 10 10c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Zm0 7.35c2.033-1.867 3.542-3.563 4.525-5.088C17.508 12.738 18 11.383 18 10.2c0-1.817-.58-3.304-1.738-4.462C15.104 4.579 13.683 4 12 4c-1.683 0-3.104.58-4.263 1.737C6.58 6.896 6 8.383 6 10.2c0 1.183.492 2.538 1.475 4.063.983 1.524 2.492 3.22 4.525 5.087ZM12 22c-2.683-2.283-4.688-4.404-6.013-6.363C4.662 13.68 4 11.867 4 10.2c0-2.5.804-4.492 2.412-5.975C8.021 2.742 9.883 2 12 2s3.98.742 5.587 2.225C19.197 5.708 20 7.7 20 10.2c0 1.667-.663 3.48-1.988 5.438C16.688 17.595 14.683 19.716 12 22Z" />
                </g>
            </svg>
        </div>
    );
};

const locPop = () => {
    return (
        <div>
            <h1 className="text-md">Clique para ver no mapa!</h1>
        </div>
    );

};

const ScheduleCard = ({ time, title, description, location }: ScheduleCardProps) => {
    return (
        <div className="fade-in">
            <div className="grid grid-cols-12 items-center gap-1 border-b-2 border-black mx-60 pb-3">
                <p className="col-start-1 col-span-2 text-base font-semibold">{time}</p>
                <div className="col-start-3 col-span-8 flex items-start flex-col">
                    <h3 className="text-red-600  text-lg">{title}</h3>
                    <p className="w-11/12 ml-6 text-sm text-justify text-balance hyphens-auto break-words">{description}</p>
                </div>
                <Popover content={locPop} placement='right' className="flex align-middle gap-6 cursor-pointer">
                    <div className="grid grid-cols-12"> {/* TODO add link to map + responsiveness */}
                        <Loc />
                        <p className="text-sm font-semibold col-span-6">{location}</p>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default ScheduleCard;