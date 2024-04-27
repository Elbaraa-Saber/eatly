function Dashboard (props){
    return (
        <>
            <div>
                <img src={props.img} alt=''/>
                <span>
                    <h4>{props.title}</h4>
                    <p>{props.status}</p>
                </span>
            </div>
            <span className='time'>{props.time}</span>
        </>
    )
}

export default Dashboard;