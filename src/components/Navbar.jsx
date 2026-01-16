import logo from "../assets/img/dc-logo.png";


function Navbar() {
    return (
        <nav>
            <img src={logo} alt="DC Logo" />
            <ul>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Collectibles</li>
                <li>Videos</li>
                <li>Fans</li>
                <li>News</li>
                <li>Shop</li>
            </ul>
        </nav>
    );
}