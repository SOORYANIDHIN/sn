import React, { useContext, useState } from 'react'
// import Soorya from "../crud/Data"
import { Button, Modal, Table} from "react-bootstrap"
import { Link } from 'react-router-dom';
 import "./Table.css"
 import "bootstrap/dist/css/bootstrap.min.css";

import { appContext } from '../App';

function Table1() {
  
  const[value,setvalue]=useContext(appContext)
  const [searchterm, setsearchterm] = useState("")
  const [isediting,setisediting] = useState(false)
   const [editingstudent,seteditingstudent] = useState(null)
 function onsubmitsearch(e){
  e.preventDefault()
  setvalue(value.filter(item=>item.NAME.toLowerCase().includes(searchterm.toLowerCase())))
 }


  const oneditstudent=(item)=>{
    setisediting(true)
    seteditingstudent({...item})
    console.log(editingstudent);

  }
  // console.log(value);
  return (
    <div className='table'>
      <input type="text" placeholder='search' onChange={event=>{setsearchterm(event.target.value)}}></input>
      <button onClick={onsubmitsearch}>SEARCH</button>
      <Link style={{marginLeft:"1220px"}} to="/edit" className='btn btn-success'>Add</Link>



        <Table striped bordered hover>

          
      <thead>
              <tr>


          <th>ID</th>
          <th>NAME</th>
          <th>POSITION</th>
          <th>AGE</th>
          <th>PLACE</th>
          
          
          

        </tr>

      </thead>
      <tbody>
      {value.map((item)=>{

          return(
            <>
        <tr>
             <td>{item.ID}</td>
          <td>{item.NAME}</td>
          <td>{item.POSITION}</td>
          <td>{item.AGE}</td>
          <td>{item.PLACE}</td>

       <td>  <Link to={`/view/${item.ID}`} className='btn btn-primary'>VIEW</Link></td>
       <td> <Button onClick={()=>{oneditstudent(item)}}>EDIT </Button></td>
      
     <td> <Link to={`/delete/${item.ID}`} className='btn btn-danger'>DELETE</Link></td>
     


        </tr>
        </>
          )
        })}
        
        
      </tbody>
    </Table>
     {isediting ?<Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{ setisediting (false)
        seteditingstudent(null)}}>Close</Button>
        <Button variant="primary" onClick={()=>{setvalue(value.map(student=>{if(student.ID==editingstudent.ID){
          return editingstudent
        }
        else
        {
          return student
        }}))}}>Save</Button>
      </Modal.Footer>
     {editingstudent && 
    <>
     <input value={editingstudent?.ID} onChange={(e)=>{seteditingstudent(pre=>{return{...pre,ID:e.target.value}})}} ></input>
             <input value={editingstudent?.NAME} onChange={(e)=>{seteditingstudent(pre=>{return{...pre,NAME:e.target.value}})}}></input>
              <input value={editingstudent?.POSITION} onChange={(e)=>{seteditingstudent(pre=>{return{...pre,POSITION:e.target.value}})}}></input>
              <input value={editingstudent?.AGE} onChange={(e)=>{seteditingstudent(pre=>{return{...pre,AGE:e.target.value}})}}></input>
              <input value={editingstudent?.PLACE} onChange={(e)=>{seteditingstudent(pre=>{return{...pre,PLACE:e.target.value}})}}></input>
  




    
    </>} 
             
    </Modal.Dialog> :""  }

    
    </div>
  )
}

export default Table1