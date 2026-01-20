

export default function Card({ info }) {



    return (
        <div className="card">
            <img src={info.thumb} />
            <h3>{info.title}</h3>
            <span>{info.price}</span>
        </div>
    )
}
