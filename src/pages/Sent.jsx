import { Link } from "react-router-dom";

export default function Sent(){
    return(
        <div>
            Your message have been sent.
            <Link to="/">Back to Homepage</Link>
        </div>
    )
}