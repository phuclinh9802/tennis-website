import React from "react";
import Gallery from "react-grid-gallery"

const MainImages =
    [
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0176.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0176.JPG",
            thumbnailWidth: 220,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0221.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0221.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0223.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0223.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0224.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0224.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0225.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0225.JPG",
            thumbnailWidth: 220,
            thumbnailHeight: 320,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0226.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0226.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0230.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0230.JPG",
            thumbnailWidth: 220,
            thumbnailHeight: 320,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0633.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0633.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0637.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0637.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0639.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0639.JPG",
            thumbnailWidth: 220,
            thumbnailHeight: 320,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0651.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0651.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0781.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0781.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_0913.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_0913.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_1322.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_1322.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_1924.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_1924.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_2117.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_2117.JPG",
            thumbnailWidth: 220,
            thumbnailHeight: 320,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_2148.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_2148.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_3630.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_3630.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_3791.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_3791.JPG",
            thumbnailWidth: 220,
            thumbnailHeight: 320,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_4677.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_4677.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_4757.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_4757.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_4760.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_4760.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_4761.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_4761.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_4771.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_4771.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_4932.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_4932.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 320,
        },
        {
            src: process.env.PUBLIC_URL + "/images/IMG_5016.JPG",
            thumbnail: process.env.PUBLIC_URL + "/images/IMG_5016.JPG",
            thumbnailWidth: 320,
            thumbnailHeight: 220,
        },
    ]

function Image() {
    return (
        <Gallery
            images={MainImages}
            enableImageSelection={false} />
    )
}

export default Image
