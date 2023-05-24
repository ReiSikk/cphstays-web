import React from 'react'
import SelectLocation from './SelectLocation'
import SelectRooms from './SelectRooms'
import {useState } from 'react'
import ApartmentsList from './ApartmentsList'

function Filters(props) {
  return (
    <div className="filters-container">
    <SelectLocation  locationChanged={props.locationChanged}/>
    <SelectRooms   roomsChanged={props.roomsChanged} />
    </div>
  )
}

export default Filters