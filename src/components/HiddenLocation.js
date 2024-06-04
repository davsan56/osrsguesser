import "../App.css";

function HiddenLocation({ location }) {
  return (
    <div className="hidden-location">
      <img
        src={require("../../public/locations/" + location.image + ".png")}
        alt={location.image}
        className="hidden-location-image"
      />
    </div>
  );
}

export default HiddenLocation;
