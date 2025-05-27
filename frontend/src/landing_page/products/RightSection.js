import React from 'react'

function RightSection({ imageURL, productName, productDesription, learnMore }) {
    return ( 
         <div className="container mt-5">
            <div className="row align-items-center">
                {/* Text section: full width on mobile, half on large+ */}
                <div className="col-12 col-lg-6 p-3 p-lg-5 mt-0 mt-lg-5 order-2 order-lg-1">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More</a>
                    </div>
                </div>
                {/* Image section: full width on mobile, half on large+ */}
                <div className="col-12 col-lg-6 d-flex justify-content-center order-1 order-lg-2 mb-4 mb-lg-0">
                    <img src={imageURL} className="img-fluid" alt={productName} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;