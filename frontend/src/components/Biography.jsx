// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Biography = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="aboutImg" className="banner-img" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who we are</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur? Reprehenderit vero fuga dolore! Delectus deleniti mollitia odit, autem voluptatum velit placeat voluptates quis commodi. Cumque id quisquam sint iste.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, tenetur? Reprehenderit vero fuga dolore! Delectus deleniti mollitia odit, autem voluptatum velit placeat voluptates quis commodi. Cumque id quisquam sint iste.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat vel similique quos vero dolor error, asperiores, ullam delectus nostrum, voluptas eius optio cumque.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat vel similique quos vero dolor error, asperiores, ullam delectus nostrum, voluptas eius optio cumque.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat vel similique quos vero dolor error, asperiores, ullam delectus nostrum, voluptas eius optio cumque.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat vel similique quos vero dolor error, asperiores, ullam delectus nostrum, voluptas eius optio cumque.</p>
            </div>
        </div>
    )
}

export default Biography