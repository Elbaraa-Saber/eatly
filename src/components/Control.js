import Dashboard from "./Dashboard";
import dish from '../imgs/Dish.png'
import dish2 from '../imgs/dish2.png'
import dish3 from '../imgs/dish3.png'
import '../css/Control.css'
import Card from "./Card";

function Control (){
    return (
        <div className="container">
            <div className="control">
                <div className="left-side">
                    <h3>Control <span>Purchases</span> Via Dashboard</h3>
                    <div className="dashboards">
                        <div className="dashboard">
                            <Dashboard title="Fish Hell Veg" status='Cancelled' time='Yesterday' img={dish3}/>                        
                        </div>
                        <div className="dashboard">
                            <Dashboard title="Chicken Hell" status='On The Way' time='3:09 PM' img={dish}/>
                        </div>
                        <div className="dashboard">
                            <Dashboard title="Swe Dish" status='Delivered' time='Yesterday' img={dish2}/>   
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="head">
                        <h5>Purchases</h5>
                        <div className="select">
                            <label for='time'>This Month</label>
                            <select id='time'>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <Card title="Expense" desc='Increased By 10%' total='$409.00'/>
                    <Card title='Vocher Usage' desc='Increased By 5%' total='$45.78'/>
                </div>
            </div>
        </div>
    )
}
export default Control;