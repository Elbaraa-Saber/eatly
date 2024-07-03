import "./style.css";
import dish1 from "../../imgs/Dish.png";
import dish2 from "../../imgs/dish2.png";
import dish3 from "../../imgs/dish3.png";
import Dish from "../../Shared/UI/Dish/ui";

function TopDishes() {
  const dishes = [
    {
      title: "Chicken Hell",
      img: dish1,
      type: "Healthy",
      time: "24min",
      rating: "4.8",
      price: "$12",
    },
    {
      title: "Swe Dish",
      img: dish2,
      type: "Trending",
      time: "34min",
      rating: "4.9",
      price: "$19",
    },
    {
      title: "Swe Dish",
      img: dish3,
      type: "Supreme",
      time: "34min",
      rating: "4.9",
      price: "$19",
    },
    {
      title: "Chicken Hell",
      img: dish1,
      type: "Healthy",
      time: "24min",
      rating: "4.8",
      price: "$12",
    },
    {
      title: "Swe Dish",
      img: dish2,
      type: "Trending",
      time: "34min",
      rating: "4.9",
      price: "$19",
    },
  ];
  return (
    <div className="container">
      <div className="topDishes">
        <h2 className="topDishes__headOfComp">
          Our Top <span>Dishes</span>
        </h2>
        <div className="topDishes__dishesList">
          {dishes.map((dish) => (
            <div className="topDishes__box">
              <svg
                className="topDishes__heart"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.0214844 6.66277C0.0214844 3.27527 2.99334 0.666992 6.48165 0.666992C8.2798 0.666992 9.86206 1.51012 10.9975 2.60107C12.1329 1.51012 13.7152 0.666992 15.5133 0.666992C19.0016 0.666992 21.9735 3.27527 21.9735 6.66277C21.9735 8.98325 20.9839 11.0239 19.6129 12.7488C18.2443 14.4707 16.4541 15.9322 14.74 17.1197C14.0852 17.5732 13.4229 17.9917 12.8167 18.3004C12.2475 18.5903 11.593 18.8558 10.9975 18.8558C10.402 18.8558 9.74747 18.5903 9.17827 18.3004C8.57208 17.9917 7.90974 17.5732 7.25503 17.1197C5.54091 15.9322 3.75066 14.4707 2.38204 12.7488C1.01106 11.0239 0.0214844 8.98325 0.0214844 6.66277ZM6.48165 2.54859C3.87344 2.54859 1.90309 4.4667 1.90309 6.66277C1.90309 8.42332 2.65044 10.0625 3.85505 11.578C5.06202 13.0966 6.68602 14.4365 8.32655 15.573C8.94732 16.003 9.53203 16.369 10.0322 16.6237C10.5693 16.8972 10.8804 16.9742 10.9975 16.9742C11.1146 16.9742 11.4257 16.8972 11.9628 16.6237C12.463 16.369 13.0477 16.003 13.6684 15.573C15.309 14.4365 16.933 13.0966 18.1399 11.578C19.3445 10.0625 20.0919 8.42332 20.0919 6.66277C20.0919 4.4667 18.1215 2.54859 15.5133 2.54859C14.0154 2.54859 12.6167 3.44351 11.7433 4.57937C11.5652 4.81098 11.2896 4.94671 10.9975 4.94671C10.7053 4.94671 10.4298 4.81098 10.2517 4.57937C9.37831 3.44351 7.97959 2.54859 6.48165 2.54859Z"
                  fill="#323142"
                />
              </svg>
              <Dish
                title={dish.title}
                img={dish.img}
                type={dish.type}
                time={dish.time}
                rating={dish.rating}
                price={dish.price}
              />
            </div>
          ))}
        </div>
        <div className="topDishes__arrow">
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

export default TopDishes;
