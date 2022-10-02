import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Event from '../event/event';
import { addEvent } from '../../actions/index';
import './create.css';
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [ eventData, setEventData ] = useState({});
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `event`; 
        navigate(path,{state: eventData});
    }

    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //     let path = `event`; 
    //     navigate(path);
    // }
    // const [ next, setNext ] = useState([0,-1,-1,-1,-1,-1])

    // const indexCal = (name) => {
    //     switch(name) {
    //         case 'host':
    //           return 0;
    //         case 'event':
    //           return 1;
    //         case 'start':
    //           return 2;
    //         case 'end':
    //             return 3;
    //         case 'location':
    //             return 4;
    //       }
    // }

    const setValue = (e) => {
        e.preventDefault()
        let temp = eventData
        temp[e.target.name] = e.target.value
        setEventData(temp)
    }

    // const allowNext = (e) => {
    //     let tempEvent = eventData
    //     tempEvent[e.target.name] = e.target.value;
    //     const index = indexCal(e.target.name)
    //     let temp = next
    //     setEventData(tempEvent)
    //     if(e.target.value !== '') {               
    //         temp[index] = 1  
    //     } else {
    //         temp[index] = 0   
    //     }
    //     setNext(temp)
    // }

   const submitEvent = (e) => {
        e.preventDefault()
        routeChange()
   }


 
    return (
        <div className='create' align='center'>
            <div className='from-div col-8'>
                <h2>Welcome! <br/>Create and Host your own private event</h2>
                <form align='left'>
                    <div className='form-input-group-show'>
                        <label><span className='label-text'>Let's get started with your name</span></label><br />
                        <input type={'text'} name='host' className='event-input' placeholder='Host Name' onChange={setValue} />
                        {/* {next[0] === 1 ? <button onClick={moveNext}><span>Next</span></button> : null} */}
                    </div>
                    {/* <div className={next[1] !== -1 ? 'form-input-group-show' : 'form-input-group-hide'}> */}
                    <div className={'form-input-group-show'}>
                        <label><span className='label-text'>What's the name for your party</span></label><br />
                        <input type={'text'} name='event' className='event-input' placeholder='Event Name' onChange={setValue} />
                        {/* {next[1] === 1 ? <button onClick={moveNext(1)}><span>Next</span></button> : null} */}
                    </div>
                    {/* <div className={next[2] !== -1 ? 'form-input-group-show' : 'form-input-group-hide'}> */}
                    <div className={'form-input-group-show'}>
                        <label><span className='label-text'>When does it start</span></label><br />
                        <input type={'datetime-local'} name='start' className='event-input' placeholder='Start Time' onChange={setValue} />
                        {/* {next[2] === 1 ? <button onClick={moveNext(2)}><span>Next</span></button> : null} */}
                    </div>
                    {/* <div className={next[3] !== -1 ? 'form-input-group-show' : 'form-input-group-hide'}> */}
                    <div className={'form-input-group-show'}>
                        <label><span className='label-text'>When will it end</span></label><br />
                        <input type={'datetime-local'} name='end' className='event-input' placeholder='End Time' onChange={setValue} />
                        {/* {next[3] === 1 ? <button onClick={moveNext(3)}><span>Next</span></button> : null} */}
                    </div>
                    {/* <div className={next[4] !== -1 ? 'form-input-group-show' : 'form-input-group-hide'}> */}
                    <div className={'form-input-group-show'}>
                        <label><span className='label-text'>Final question, Where should the guests arrive</span></label><br />
                        <input type={'text'} name='location' className='event-input' placeholder='Location' onChange={setValue} />
                        {/* {next[4] === 1 ? <button onClick={moveNext(4)}><span>Next</span></button> : null} */}
                    </div>
                    {/* <div className={next[5] !== -1 ? 'form-button' : 'form-input-group-hide'} align='center'> */}
                    <div className='form-button' align='center'>
                        <button onClick={submitEvent}><span>Submit your event</span></button>
                    </div>
                </form>
            </div>
        </div>
      )
  
}

export default Create