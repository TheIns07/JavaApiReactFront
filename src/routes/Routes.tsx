import { BrowserRouter, Link } from "react-router-dom";
import { NoPage } from "../components/NoPage";
import { MoviesList } from "../components/Movies";

export default function Routes() {
    return (
        <BrowserRouter>
            <Link to="/"><MoviesList/></Link>
        </BrowserRouter>
    );
}