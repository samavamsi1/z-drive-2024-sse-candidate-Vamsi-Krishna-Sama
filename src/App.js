import { useState } from 'react'

import './App.css'
import Calender from './component/Calender'
import EventForm from './component/EventForm'
import EventList from './component/EventList'

function App() {





  return (
   <div>
    <h1>Calender</h1>
    <Calender></Calender>
    <EventForm></EventForm>
    <EventList></EventList>
   </div>
  )
}

export default App
