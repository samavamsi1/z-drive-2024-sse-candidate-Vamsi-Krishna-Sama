import React, { useState } from 'react'


export default function EventForm(){

    const [eventName,  setEventName] = useState('');
    const [startTime , setStartTime] = useState('');
    const [endTime , setEndTime] = useState(new Date());
    const [participants,  setParticipants] = useState([]);





    <div>
        <div> 
            <h1>Create Event</h1>

            <form>
                <label>Event Name</label>
                <input type="text" id="event-name" value={eventName}  ></input>

                <label> Start Time</label>


            </form>

        </div>
    </div>


}