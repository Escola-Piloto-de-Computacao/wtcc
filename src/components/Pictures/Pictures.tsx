import React, { useState, useEffect } from 'react';
import { Pagination, Image } from 'antd';
import i1 from '../../assets/gallery/1.jpeg';
import i2 from '../../assets/gallery/2.jpeg';
import i3 from '../../assets/gallery/3.jpeg';
import i4 from '../../assets/gallery/4.jpeg';
import i5 from '../../assets/gallery/5.jpeg';
import i6 from '../../assets/gallery/6.jpeg';
import i7 from '../../assets/gallery/7.jpeg';
import i8 from '../../assets/gallery/8.jpeg';
import i9 from '../../assets/gallery/9.jpeg';
import i10 from '../../assets/gallery/10.jpeg';
import i11 from '../../assets/gallery/11.jpeg';
import i12 from '../../assets/gallery/12.jpeg';
import i19 from '../../assets/gallery/19.jpg';
import i35 from '../../assets/gallery/35.jpg';
import i36 from '../../assets/gallery/36.jpg';
import i38 from '../../assets/gallery/38.jpg';
import i39 from '../../assets/gallery/39.jpg';
import i40 from '../../assets/gallery/40.jpg';
import i41 from '../../assets/gallery/41.jpg';
import i42 from '../../assets/gallery/42.jpg';

//TODO add descriptions to the images

const imageFiles = [
    { link: i1, description: "" },
    { link: i2, description: "" },
    { link: i3, description: "" },
    { link: i4, description: "" },
    { link: i5, description: "" },
    { link: i6, description: "" },
    { link: i7, description: "" },
    { link: i8, description: "" },
    { link: i9, description: "" },
    { link: i10, description: "" },
    { link: i11, description: "" },
    { link: i12, description: "" },
    { link: i19, description: "" },
    { link: i35, description: "" },
    { link: i36, description: "" },
    { link: i38, description: "" },
    { link: i39, description: "" },
    { link: i40, description: "" },
    { link: i41, description: "" },
    { link: i42, description: "" }
];

const Pictures = () => {

    //will be used to trigger a re-render
    const [key, setKey] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6;

    // calculate the images for the current page
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = imageFiles.slice(indexOfFirstImage, indexOfLastImage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setKey(prevKey => prevKey + 1);
    };

    currentImages.map((image, index) => {
        if (image.description === "") {
            image.description = "Imagem de eventos passados";
        }
        return image;
    });

    // calculate the number of empty divs required
    const emptyDivsCount = imagesPerPage - currentImages.length;

    return (
        <div className="pt-36 mb-20 flex flex-col flex-wrap items-center" id="Galeria">
            <h2 className="bg-yellow-400 text-4xl p-1 rounded-lg mb-12">GALERIA</h2>
            <div className="grid grid-cols-12 gap-8 mx-36">
                {currentImages.map((image, index) => (
                    <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4">
                        <Image
                            key={index + key} // add key here
                            src={image.link}
                            alt="Imagem de eventos passados"
                            className="w-200 h-100 rounded-lg image-fade-in"
                        />
                        <p className="ml-6 text-left text-sm">{image.description}</p>
                    </div>
                ))}
                {/* render the empty divs */}
                {Array.from({ length: emptyDivsCount }, (_, index) => (
                    <div
                        key={index + currentImages.length}
                        className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 bg-gray-200 rounded-lg"
                    />
                ))}
            </div>
            <div className="mt-5">
                <Pagination
                    defaultCurrent={1}
                    total={imageFiles.length}
                    pageSize={imagesPerPage}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default Pictures;