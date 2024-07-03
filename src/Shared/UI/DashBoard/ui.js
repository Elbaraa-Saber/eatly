import './style.css'

function Dashboard (props){
    return (
        <>
            <div className='dashBoard'>
                <img className='dashBoard__img' src={props.img} alt=''/>
                <span className='dashBoard__text'>
                    <h4 className='dashBoard__title'>{props.title}</h4>
                    <p className='dashBoard__status'>{props.status}</p>
                </span>
            </div>
            <span className='dashBoard__time'>{props.time}</span>
        </>
    )
}

export default Dashboard;