import React from 'react';
import './OpenAccount.css';

function OpenAccount() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center justify-content-center">
                <h1 className="mt-5">Open TradeWell Account</h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary signup-btn">
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;