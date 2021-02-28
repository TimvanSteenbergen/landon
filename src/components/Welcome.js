import React, { useState, useEffect } from 'react';

const Welcome = () => {
    const [galleryImagesData, setGalleryImagesData] = useState([]);

    const linkGalleryImages = async () => {
        //Query the database for gallery images
        const resp = await fetch('https://mxkrp9o184.execute-api.eu-west-1.amazonaws.com/Production/gallery_images');
        let GalleryImagesJson = await resp.json();

        //Link the received data to the images
        setGalleryImagesData(GalleryImagesJson);
    }

    useEffect(() => {
        linkGalleryImages()
    }, []
    )
    return (
        <div className="scene" id="welcome">
            <article className="content">
                <div className="gallery">
                    {
                        alert(galleryImagesData)}{
                        galleryImagesData.map((image) =>
                            <img src={image.src} alt={image.alt} className={image.className} />
                        )
                    }
                </div>
                <h1>Welcome to Tim's Landon&nbsp;Hotel</h1>
                <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
        </div>

    );
}

export default Welcome;