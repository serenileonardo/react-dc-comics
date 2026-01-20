import Navbar from "./Header";
import links from "../data/links.js";
import logo from "../assets/img/dc-logo.png"


const Header = () => {

    console.log(links);

    return (
        <>
            <section className="bg-white">
                <div className="container">
                    <div class="navbar">
                        <img src={logo} />
                        <ul className="navbar-links">
                            {
                                links.map(link => {
                                    return (
                                        <li key={link.id}>
                                            <a href="#">{link.description}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;