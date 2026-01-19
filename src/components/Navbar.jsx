import logo from "../assets/img/dc-logo.png";


function Navbar() {
    return (
        <nav>
            <img className="logo" src="../assets/img/dc-logo.png" alt="DC Logo" />
            <ul className="menu">
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