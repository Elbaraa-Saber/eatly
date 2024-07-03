import "./subscribe.css";
import dish from "../../imgs/Dish.png";

function Subscribe() {
  return (
    <div className="container">
      <div className="subscribe">
        <div className="photos">
          <div className="info-back">
            <p>GET 50%</p>
            <form className="email">
              <input placeholder="Enter your email address" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="right-back">
            <img className="dish" src={dish} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
