import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
       <div className="d-grid gap-2 col-12 col-sm-6 col-md-4 mx-auto mb-5">
          <button
            className="btn btn-primary fs-5"
            type="button"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
