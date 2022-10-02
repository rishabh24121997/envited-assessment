import React, { useEffect } from 'react';
import './event.css';
import { BsCalendarWeek } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

const EventDetail = (props) => {
    return (
        <div className='event-detail'>
            <props.image 
                className='event-detail-image'
            />
            <div className='text'>
                {props.top}<br />
                {props.bottom}
            </div>
        </div>
    )
}

const Event = (props) => {
    
    const location = useLocation()

  return (
    <div>
        <div className='event-image'>
            <img src={require('../../assets/birthday-cake.png') }/>
        </div>
        <div className='birthday-details' align='left'>
            <span className='event-name'>{location.state.event}</span><br />
            <span className='event-host'>Hosted by {location.state.host}</span>

            <div className='birthday-insights'>
                <EventDetail
                    image  = {BsCalendarWeek}
                    top    = {<span className='top'>{location.state.start}</span>}
                    bottom = {<span className='bottom'>to <strong>{location.state.end} </strong> PM UTC+10</span>}
                />
                <EventDetail
                    image  = {BiMap}
                    top    = {<span className='top'>Street Name</span>}
                    bottom = {<span className='bottom'>{location.state.location}</span>}
                />
            </div>
        </div>
    </div>
  )
}

export default Event;