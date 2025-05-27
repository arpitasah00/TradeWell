import React from 'react';

function Stats() {
    return ( 
        <div className="container p-3">
            <div className="row p-3 p-lg-5">
                {/* Text content: full width on mobile, half on large+ */}
                <div className="col-12 col-lg-6 p-3 p-lg-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">
                        That's why 1.6+ crore customers trust TradeWell with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">
                        No gimmicks, spam, "gamification", or annoying push notifications.
                        High quality apps that you use at your pace, the way you like.
                        <a href="https://www.tradewell.in/services/effective-customer-support" style={{ textDecoration: "none" }}> Our philosophies.</a>
                    </p>
                    <h2 className="fs-4">The TradeWell universe</h2>
                    <p className="text-muted">
                        Not just an app, but a whole ecosystem. Our investments in 30+
                        fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">
                        With initiatives like <a href="#" style={{ textDecoration: "none" }}>Nudge</a> and <a href="#" style={{ textDecoration: "none" }}>Kill Switch</a>, we don't just
                        facilitate transactions, but actively help you do better with your
                        money.
                    </p>
                </div>
                {/* Image and links: full width on mobile, half on large+ */}
                <div className="col-12 col-lg-6 p-3 p-lg-5 mt-5 mt-lg-0 d-flex flex-column align-items-center justify-content-center">
                    <img src="media/images/ecosystem.png" className="img-fluid mb-4" style={{ width: "90%" }} alt='ecosystem' />
                    <div className="text-center">
                        <a href="#" className="mx-3" style={{ textDecoration: "none" }}>
                            Explore our products{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href="#" className="mx-3" style={{ textDecoration: "none" }}>
                            Try Kite demo{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;