import React from "react";

const Button = () => {
    return (
        <button>
            <a className="font-bold text-white bg-green-700 rounded-md px-3 py-1 text-2xl" href="https://www.google.com.br/?hl=pt-BR">Inscreva-se!</a>
        </button>
    );
}

const Home = () => {
    return (
        <div className="flex flex-row row-span-2 mx-32 mt-40 gap-10">
            <div className="w-1/2">
                <div className="mb-14 flex flex-col col-span-1 gap-4">
                    <div className="text-4xl text-left font-thin rounded pb-1">
                        <h1 className="bg-yellow-600 inline px-2 py-1">Comece sua jornada no mundo da computação</h1>
                    </div>
                    <p className=" w-9/12 ml-3 text-justify indent-4 text-balance hyphens-auto break-words">With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up.  Flex is the only saas business platform that lets you run your business on one CERTIFICADO, seamlessly across all digital channels.</p>
                </div>
                <div className="flex flex-col col-span-1 gap-4">
                    <div className="text-3xl text-left font-thin rounded pb-1 gap-4">
                        <h1 className="bg-yellow-600 inline px-2 py-1">Segundo título chamativo</h1>
                    </div>
                    <p className=" w-10/12 ml-3 text-justify indent-4 text-balance hyphens-auto break-words">With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up.  Flex is the only saas business platform that lets you run your business on one CERTIFICADO, seamlessly across all digital channels.</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </div>
    );
}

export default Home;
