import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p className="mt-4">Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{(error as any).statusText || (error as any).message}</i>
      </p>
    </div>
  );
}
