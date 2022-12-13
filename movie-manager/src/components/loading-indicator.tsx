import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";

const LoadingIndicator = () => {
    return (
        <div className="d-flex flex-column align-items-center my-4">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">
                    Loading...
                </span>
            </Spinner>
            <span className="my-2">Please wait while our elves check the shelves...</span>
        </div>
    )
}

export default LoadingIndicator;