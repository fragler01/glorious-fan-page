import { Link } from "react-router-dom"
import '../styles/Error.scss'
export default function Error404(){
    return(
        <div className="Error">
            <h1>This page is unfortunately not awailable</h1>
            <p>I will check the <Link to='/'>Homepage</Link> then</p>
        </div>
    )
}