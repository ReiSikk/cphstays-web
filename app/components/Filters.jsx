import React from 'react'
import SelectLocation from './SelectLocation'
import SelectRooms from './SelectRooms'
import SelectPrice from './SelectPrice'

function Filters(props) {
  return (
    <div className="filters-container">
    <SelectLocation  locationChanged={props.locationChanged}/>
    <SelectRooms   roomsChanged={props.roomsChanged} />
    <SelectPrice priceChanged={props.priceChanged}/>
    </div>
  )
}

export default Filters