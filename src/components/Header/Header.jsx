import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">World Countries </Link>

                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/contact">Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;