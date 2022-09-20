import React, { useContext  } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from 'react-router-dom';
import { appContext } from '../App';



function Delete() {
  
    let {id}= useParams()
    console.log(id);
    const navigate1=useNavigate()
    // const datas=Data.filter(item=> item.ID!==id)
  const [value,setvalue]= useContext(appContext)
  console.log(value);

  const navigate=useNavigate()
  const handlecancel=()=>{
    navigate(-1)
  }
  const Delete=()=>{
    const ondelete=value.filter((item)=>item.ID != id)
    console.log(ondelete);
    setvalue(ondelete)
  }
  
  return (
    <div>
          <Modal.Dialog>
      
       
      <Modal.Body>
        <p>Are you sure want to delete?</p>

      </Modal.Body>

      <Modal.Footer>
        <div style={{marginRight:"50px"}}>

        <Button className='delete' variant="secondary" onClick={handlecancel}>Cancel</Button></div>
        <div style={{marginRight:"50px"}}>
        <Button variant="btn btn-danger" onClick={Delete}>Delete</Button></div>
      </Modal.Footer>
    </Modal.Dialog>

    </div>
  )
}

export default Delete