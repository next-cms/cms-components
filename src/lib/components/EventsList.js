import React from 'react'

const EventsList = () => {

    const events = [
        {
            title: "WDBE 2019",
            description: "Word Summit on Digital Environment....",
            tags: ["Business"],
            date: "Septenber 24,2019",
            place: "Helsink"
        },
        {
            title: "Smart City & Buildings",
            description: "Word Summit on Digital Environment....",
            tags: ["Business", "Future", "Society"],
            date: "Septenber 30,2019",
            place: "Helsink"
        },
        {
            title: "Lorem ipsum dolor sit amet",
            description: "Word Summit on Digital Environment....",
            tags: ["Business", "Society"],
            date: "Septenber 28,2019",
            place: "Helsink"
        }

    ]

    return (
        <div>
            <div className="container" style={{backgroundColor:"whitesmoke"}}>
                <h2>Events</h2>
                <ul>
                        {
                            events.map(event =>(
                                <li>
                                    <div className="event">
                                        <div className="title-tag" style={{display: "flex"}}>
                                            <div>
                                                <h4>{event.title}</h4>
                                            </div>
                                            <div style={{margin:"0 50px", display: "flex", padding: "0 20px"}}>
                                                {
                                                    event.tags.map(tag => (
                                                        <h4 style={{padding:"0 10px"}}>{tag}</h4>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="description-date">
                                                <div>
                                                    {event.description}
                                                </div>
                                                <div>
                                                    <span><p>{event.date},{event.place}</p></span>
                                                </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                </ul>
                <div>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}
export default EventsList;
