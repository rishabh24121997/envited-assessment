import React from 'react';
import './home.css';
import { ReactComponent as Landing } from '../../assets/landing-page.svg';
import { GiPartyPopper } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `create`; 
        navigate(path);
    }

  return (
    <div className='row'>
        <div className='heading-text' align='center'>
            <p>
                Imagine if<br /> 
                <span>Snapchat</span><br /> 
                had events
            </p>
        </div>
        <div className='heading-sub-text'>
            <p>
                Easily host and share events with your friends across any social media.
            </p>
        </div>
        <div className='landing-page-img col-6'>
            <Landing 
                className='landing-image'
            />
        </div>
        <div className='create-event-button' align='center'>
            <button onClick={routeChange}><GiPartyPopper /><span>Create an Event</span></button>
        </div>
    </div>
  )
}

export default Home