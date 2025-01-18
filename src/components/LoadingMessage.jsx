import React from "react";

const LoadingMessage = ({
  title = "Loading...",
  message = "Please wait while we fetch the data for you.",
}) => {
  return (
    <div className="products-container">
      <div className="loading-message">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LoadingMessage;
