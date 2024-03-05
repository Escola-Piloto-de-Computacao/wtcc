import React, { useState } from 'react';
import { Modal, Button, Avatar } from 'antd';

//TODO: add corresponding colors? / add button to see on schedule (the specific minicourse)

interface Teacher {
    name: string,
    image: string,
    shortDescription: string
}

interface Minicourse {
    title: string,
    subTitle: string,
    image: string,
    shortDescription: string,
    description: string,
    teachers: Teacher[]
}

interface CardProps {
    minicourse: Minicourse
}

const ModalHeader: React.FC<CardProps> = ({ minicourse }: { minicourse: Minicourse }) => {
    return (
        <div>
            <h1 className="text-3xl">
                {minicourse.title}
            </h1>
            <h2 className="mt-1 ml-5 text-xl text-gray-600">
                {minicourse.subTitle}
            </h2>
        </div>
    );
}

const ModalContent: React.FC<CardProps> = ({ minicourse }: { minicourse: Minicourse }) => {
    return (
        <div className="mx-5 mt-2 grid grid-cols-2">
            <div className="mt-6 mr-5 col-span-1">
                <p className="text-justify">{minicourse.description}</p>
                <div className="mt-6 grid grid-cols-3">
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<img src={minicourse.teachers[0].image} alt="Imagem do professor" />}
                    />
                    <p className="col-span-1">{minicourse.teachers[0].name}</p>
                </div>
            </div>
            <img className="col-span-1" src={minicourse.image} alt="Imagem do minicurso" />
        </div>
    );
}

const Card: React.FC<CardProps> = ({ minicourse }: { minicourse: Minicourse }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-blue-500">
            <a href="#!">
                <img
                    className="rounded-t-lg"
                    src={minicourse.image}
                    alt="" />
            </a>
            <div className="p-6">
                <h5
                    className="mb-2 text-lg font-medium leading-tight text-white">
                    {minicourse.title}
                </h5>
                <p className="h-16 mb-4 text-sm text-gray-200">
                    {minicourse.shortDescription}
                </p>
                <Button
                    style={{ backgroundColor: "#2bd63f" }}
                    type="primary"
                    onClick={() => setOpen(true)}>
                    Ver detalhes
                </Button>
                <Modal
                    title={<ModalHeader minicourse={minicourse} />}
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={"65%"}
                >
                    <ModalContent minicourse={minicourse} />
                </Modal>
            </div >
        </div >
    );
}

export default Card;