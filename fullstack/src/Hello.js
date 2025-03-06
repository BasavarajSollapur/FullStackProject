/*import React from "react";
import { Link } from "react-router-dom";
function Hello(){
    return(
        <div>
            <h1>Welcome to hello page</h1>
            <p>This is hello page</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/welcome"></Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}
export default Hello;*/
import React from "react";
import { Link } from "react-router-dom";

function Hello() {
    return (
        <div>
            <h1>Welcome to Hello Page</h1>
            <p>This is the hello page</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/welcome">Go to Welcome Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Hello;
