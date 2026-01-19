import Navbar from "./Header";
import links from "../data/links.js";
import logo from "../assets/img/dc-logo.png"


const Header = () => {

    console.log(links);

    return (
        <>
            <div class="navbar">
                <img src={logo}></img>
                {
                    links.map(link => {
                        return (
                            <div key={link.id}>
                                <span>{link.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Header;