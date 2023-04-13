import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center mt-5 ">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
