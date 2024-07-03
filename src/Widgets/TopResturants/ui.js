import "./style.css";
import rest1 from "../../imgs/resturant1.jpeg";
import rest2 from "../../imgs/resturant2.jpeg";
import Resturant from "../../Shared/UI/Resturant/ui";

function TopResturants() {
  const resturants = [
    {
      title: "The chicken King",
      type: "Healthy",
      time: "24min",
      rating: "4.8",
    },
    {
      title: "The Burger King",
      type: "Trending",
      time: "24min",
      rating: "4.9",
    },
    {
      title: "The chicken King",
      type: "Healthy",
      time: "24min",
      rating: "4.8",
    },
  ];
  return (
    <div className="container">
      <div className="topResturants">
        <h2 className="topResturants__headOfComp">
          Our Top <span>Restaurants</span>
        </h2>
        <div className="topResturants__list">
          {resturants.map((resturant) => (
            <Resturant
              title={resturant.title}
              type={resturant.type}
              time={resturant.time}
              rating={resturant.rating}
            />
          ))}
        </div>
        <div className="topResturants__arrow">
          View All
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9.90234H17.8041"
              stroke="#ACADB9"
              stroke-width="2.25773"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.90234 2L17.8044 9.90206L9.90234 17.8041"
              stroke="#ACADB9"
              stroke-width="2.25773"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default TopResturants;
