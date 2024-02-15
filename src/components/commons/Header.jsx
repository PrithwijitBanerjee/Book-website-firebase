import { Link } from "react-router-dom"


const Header = () => {
    return (
        <>
            <div className="header sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white" to="/">Book Project</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" to="/services">Our Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" to="/contactUs">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" to="/signIn">Sign In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header