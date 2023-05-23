import React from 'react'
import SelectLocation from './SelectLocation'
import SelectRooms from './SelectRooms'
import {useState } from 'react'
import ApartmentsList from './ApartmentsList'

function Filters(props) {
  return (
    <div className="filters-container">
    <SelectLocation handleLocation={props.handleLocation} location={props.location}/>
    <SelectRooms handleRooms={props.handleRooms}  rooms={props.rooms}/>
    </div>
  )
}

export default Filters