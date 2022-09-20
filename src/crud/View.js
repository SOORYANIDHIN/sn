import React from 'react'
import { useParams } from 'react-router-dom'
import data from './Data';

function View() {
    let {id}= useParams()
    const datas=data.filter(item => item.ID ==id)
    console.log(datas);
  return (
    <div>
     
    
        <h6>Name : {datas[0].NAME}</h6>
        <h6>Position : {datas[0].POSITION}</h6>
        <h6>Age : {datas[0].AGE}</h6>
        <h6>Place : {datas[0].PLACE}</h6>
        
    </div>
  )
}

export default View