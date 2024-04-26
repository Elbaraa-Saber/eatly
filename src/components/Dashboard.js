function Dashboard (props){
    return (
        <>
            <div>
                <img src={props.img} alt=''/>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.status}</p>
                </div>
            </div>
            <span className='time'>{props.time}</span>
        </>
    )
}

export default Dashboard;