import { Link } from "react-router";
import "../css/Error.css";

function Error() {
    return (
        <section className="error-section">
            <h1>404</h1>
            <p>
                Looks like something broke! 
                Don't worry, your backend 
                friend will be back up eventually!
            </p>
            <Link to="/">Return Safely</Link>
        </section>
    );
}

export default Error