import {Link} from "react-router-dom";
import '../styles/Navigation.css'

export const NavigationBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            HomePage
                        </Link>
                    </li>
                    <li>
                        <Link to="/calculator">
                            Calculator
                        </Link>
                    </li>
                    <li>
                    <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                            Contacts
                        </Link>
                    </li>


                </ul>
            </nav>


        </div>
    )
}