import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const err = useRouteError();
    console.log(err);
    return(<div>
        <h1>Opps !!!</h1>
        <h1>Page Not Found!</h1>
        <h1>{err.status}: {err.statusText}.</h1>
    </div>)
}

export default ErrorPage;