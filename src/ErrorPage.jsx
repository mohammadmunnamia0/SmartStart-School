import React from "react";

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
    <p className="text-lg text-gray-600">
      The page you are looking for does not exist or an unexpected error has
      occurred.
    </p>
  </div>
);

export default ErrorPage;
