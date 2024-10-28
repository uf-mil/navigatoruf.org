import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Sorry, an error occurred!</h1>
      <p>
        <b>Error message:</b> <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
