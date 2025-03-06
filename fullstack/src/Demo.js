/*import React from "react";
import { Link } from "react-router-dom";
function Demo(){
    return(
        <div>
            <h1>Welcome to demo page</h1>
            <p>This is demo page</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/Hello"></Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}
export default Demo;*/
import React from "react";
import { Link } from "react-router-dom";

function Demo() {
    return (
        <div>
            <h1>Welcome to Demo Page</h1>
            <p>This is the demo page</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Go to Hello Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Demo;
