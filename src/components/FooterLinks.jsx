import links from "../data/links.js";


const FooterLinks = () => {

    console.log(links);

    return (
        <>
            <section className="dc-section">
                <div className="container-dc">
                    <div class="footer-list">
                        <ul className="footer-links">
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
                        <ul className="footer-links">
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
                        <ul className="footer-links">
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

export default FooterLinks;