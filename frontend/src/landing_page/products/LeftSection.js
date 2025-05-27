import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image section: full width on mobile, half on large+ */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
        {/* Text/buttons section: full width on mobile, half on large+ */}
        <div className="col-12 col-lg-6 p-3 p-lg-5 mt-0 mt-lg-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div className="d-flex flex-column flex-sm-row gap-3 mb-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo</a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3 d-flex flex-column flex-sm-row align-items-start gap-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="img-fluid" alt="Get it on Google Play" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                className="img-fluid"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;