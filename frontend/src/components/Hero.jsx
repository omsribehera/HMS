// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Hero = ({ title, imageUrl }) => {
    return (
        <div className="hero container">
            <div className="banner">
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, est. Praesentium minima non saepe repellat. Voluptatem deleniti molestias fugit beatae animi voluptatibus culpa! Repudiandae error, aut dignissimos beatae voluptatem iste.
                </p>
            </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className="animated-image" />
            <span>
                <img src="/Vector.png" alt="vector" />
            </span>
        </div>
        </div>
    )
}

export default Hero