import comics from "../data/comics"
import Card from "./Card.jsx"


const MainContent = () => {

    return (
        <>

            <div className="card-container">
                {
                    comics.map(comic => {
                        return (
                            <Card info={comic} />

                        )
                    })
                }
            </div>

        </>
    );


}



export default MainContent
