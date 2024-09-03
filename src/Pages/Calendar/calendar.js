import React from 'react'
import Sidebar from '../../components/Sidebar';
import EventCalendar from '../../components/EventCalendar';
import '../../globals.css';



const calendar = () => {
  return (
    <div className='DashboardContainer'>
        <Sidebar />

        <div className='ContentArea'>
            <EventCalendar/>
        </div>
    </div>
  )
}

export default calendar;