import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Link to="/">
        <img src="/public/images/errorPage.gif" alt="" />
      </Link>
    </div>
  );
};

export default ErrorPage;
