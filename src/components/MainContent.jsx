import comics from "../data/comics"

const MainContent = () => {

    return (
        <>
            <h1>Questo è il mio Main</h1>
            {
                comics.map(comic => {
                    return (
                        <div key={comic.id}>
                            <h3>{comic.title}</h3>
                            <span>{comic.price}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MainContent