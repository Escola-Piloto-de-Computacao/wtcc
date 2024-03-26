import React from 'react';
import ccen from '../../assets/sponsors/ccen.png';
import proec from '../../assets/sponsors/proec.png';
import ufersa from '../../assets/sponsors/ufersa.png';
import prograd from '../../assets/sponsors/prograd.png';
import compLicen from '../../assets/sponsors/compLicen.png';

//TODO padronize all images to square size

const sponsors = [
    {
        nome: "CCEN",
        alt: "Centro de Ciências Exatas e da Natureza",
        imagem: ccen
    },
    {
        nome: "PROEC",
        alt: "Pró-Reitoria de Extensão e Cultura",
        imagem: proec
    },
    {
        nome: "UFERSA",
        alt: "Universidade Federal Rural do Semi-Árido",
        imagem: ufersa
    },
    {
        nome: "PROGRAD",
        alt: "Pró-Reitoria de Graduação",
        imagem: prograd
    },
    {
        nome: "Computação Licenciatura",
        alt: "Licenciatura Curso de Computação",
        imagem: compLicen
    }
];

const Circle = () => {
    return (
        <div className="absolute z-10 top-[80px]"> {/* fix to make resposive */}
            <svg xmlns="http://www.w3.org/2000/svg" width="488" height="147" fill="none" viewBox="0 0 488 147">
                <path fill="#000" d="M3.588 110.105c43.826 67.747 464.944 32.792 482.764-30.09 28.083-99.1-355.076-90.09-409.688-57.658-2.023 1.201-1.692 3.42 0 2.943C224.66-16.442 494.223 9.925 471.387 80.015c-26.334 53.393-457.79 91.591-459.539 18.078-1.152-48.403 192.017-93.994 331.754-79.46 4.179-.6.889-3.226-3.692-3.783C190.066-.662-29.486 45.468 3.588 110.105Z" />
            </svg>
        </div>
    );
};

const Sponsorship = () => {
    return (
      <div className="mt-52">
        <div className="relative pt-36 flex justify-center pb-32">
          <Circle />
          <h1 className="text-4xl">PATROCINADORES</h1>
        </div>
        <div className="flex flex-wrap justify-center mx-52 gap-6">
          {sponsors.map((sponsor, index) => {
            return (
              <div className="bg-slate-300 w-60 h-60 p-12 rounded-md m-4 flex items-center justify-center" key={index}>
                <img src={sponsor.imagem} alt={sponsor.alt} className="max-w-full max-h-full h-auto"/>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default Sponsorship;
