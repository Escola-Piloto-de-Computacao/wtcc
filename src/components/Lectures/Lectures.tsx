import React from 'react';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import lectureMain from "../../assets/Rectangle217.png";

const Lectures = () => {
    return (
        <div className="w-full grid grid-cols-12 gap-10 mt-20">
            <img src={lectureMain} alt="Palestra do VIII WTCC" className="col-start-2 col-span-5" />
            <div className="col-start-7 col-span-5 mt-4 ml-6 flex flex-row row-span-1 flex-wrap">
                <div className="">
                    <h2 className="text-3xl font-bold text-left font-poppings">Título da Palestra</h2>
                    <p className="mt-5 ml-6 text-justify">Conheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCC</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-left font-poppings">Nome o Palestrante</h3>
                    <div className="h-10 mt-5 ml-6 grid grid-cols-6 gap-2">
                        <div className="mt-1 mr-2">
                            <Avatar
                                size={64}
                                icon={<AntDesignOutlined />}
                            >
                                <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Palestrante" />
                            </Avatar>
                        </div>
                        <p className="text-justify col-span-5">Conheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII WTCCConheça as palestras que acontecerão no VIII</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lectures;