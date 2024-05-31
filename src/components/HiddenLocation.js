import "../App.css"

function HiddenLocation({location}) {
    return (
        <div className="hidden-location">
            <p>{location.image}</p>
        </div>
    )
}

export default HiddenLocation;