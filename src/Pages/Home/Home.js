import React from 'react';
import Sidebar from '../../components/Sidebar';
import PastEvents from '../../components/pastEvents';
import '../../globals.css';

function Home() {
    return (
        <div className="DashboardContainer">
            <Sidebar />
            <div className="ContentArea">
                <div className="home">       
                    <div className="main-content">
                        <div className="past-events-container">
                            <h2>
                                Past Events
                            </h2>
                            
                            <PastEvents />
                        </div>
                        <div className="upcoming-events">
                            <h2>Upcoming Events</h2>
                            <p>Nothing yet, to be delivered by events pair</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Home;
