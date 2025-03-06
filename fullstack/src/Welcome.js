/*import React from "react";
import { Link } from "react-router-dom";
function Welcome(){
    return(
        <div>
            <h1>Welcome to welcome page</h1>
            <p>This is welcome page</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/demo"></Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}
export default Welcome;*/
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div>
            <h1>Welcome to Welcome Page</h1>
            <p>This is the welcome page</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/demo">Go to Demo Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Welcome;
