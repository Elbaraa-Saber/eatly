import Dashboard from "../../Shared/UI/DashBoard/ui";
import Card from "../../Shared/UI/PurchasesCard/ui";
import dish from "../../imgs/Dish.png";
import dish2 from "../../imgs/dish2.png";
import dish3 from "../../imgs/dish3.png";
import "./style.css";

function Control() {
  const dashBoards = [
    {
      title: "Fish Hell Veg",
      status: "Cancelled",
      time: "Yesterday",
      img: dish3,
    },
    { title: "Chicken Hell", status: "On The Way", time: "3:09 PM", img: dish },
    { title: "Swe Dish", status: "Delivered", time: "Yesterday", img: dish2 },
  ];
  return (
    <div className="container">
      <div className="control">
        <div className="control__leftSide">
          <h3>
            Control <span>Purchases</span> Via Dashboard
          </h3>
          <div className="control__dashboards">
            {dashBoards.map((dashboard) => (
                <div className="control__dashboard">
                <Dashboard
                    title={dashboard.title}
                    status={dashboard.status}
                    time={dashboard.time}
                    img={dashboard.img}
                />
                </div>
            ))}
          </div>
        </div>
        <div className="control__rightSide">
          <div className="control__head">
            <h5>Purchases</h5>
            <div className="control__select">
              <label for="time">This Month</label>
              <select id="time">
                <option></option>
              </select>
            </div>
          </div>
          <Card title="Expense" desc="Increased By 10%" total="$409.00" />
          <Card title="Vocher Usage" desc="Increased By 5%" total="$45.78" />
        </div>
      </div>
    </div>
  );
}
export default Control;
