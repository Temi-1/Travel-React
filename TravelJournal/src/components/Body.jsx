export default function Body(props) {
    return (
        <div>
            <div className="section">
                    <img classname="thumbnail" src={props.imageUrl} alt="Location image" />
                    <div className="details">
                        <div className="location">
                            <img src="./src/assets/pin.png" alt="location pin" />
                            <p className="location-name">{props.location}</p>
                            <a href={props.googleMapsUrl} className="location-link">View on Google Maps</a>
                        </div>
                        <h1>{props.title}</h1>
                        <p className="date">{props.startDate} - {props.endDate}</p>
                        <p className="desc">{props.description}</p>
                    </div>
            </div>
        </div>
    )
}