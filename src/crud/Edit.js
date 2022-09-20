// import React, { useContext, useState } from 'react'
// import {  Button, Form } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'
// import { appContext } from '../App'
// import data from './Data'

// function Edit() {

//   const {id}=useParams()
//   const datas=data.filter(item => item.ID==id)
//   const[value,setvalue]=useContext(appContext)
//   console.log("init",value);


//   // const[addformdata,setAddformdata]=useState(null)

//   const[editdata,seteditdata]= useState(
    
//   [    {
//       ID:"",
//       NAME:"",
//       POSITION:"",
//       AGE:"",
//       PLACE:""
  
//     }]
    
//   )
//   const handleaddformchange=(event)=>{
//     seteditdata({...editdata,[event.target.name]:event.target.value})
//     console.log(editdata);
//   } 
//   function submit(e) {
//     e.preventDefault();
//     setvalue(value[id-1] = editdata)
//     console.log("submit",value);
//   }
  
//   return (
//        <div>
//        <Form onSubmit={submit}>
//        <div class="form-group">
//           <label>ID</label>
//           <input type="text"    onChange={ handleaddformchange} name="ID"/>
//         </div>
//         <div class="form-group">
//           <label>NAME</label>
//           <input type="text"   onChange={ handleaddformchange} name="NAME"/>
//         </div>
//         <div class="form-group">
//           <label>POSITION</label>
//           <input type="text"  onChange={ handleaddformchange} name="POSITION" />
//         </div>
//         <div class="form-group">
//           <label>AGE</label>
//           <input type="text" onChange={ handleaddformchange} name="AGE"/>
//         </div>
//         <div class="form-group">
//           <label>PLACE</label>
//           <input type="text"  onChange={ handleaddformchange} name="PLACE"/>
//         </div>
        
      
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">  
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         ADD
//       </Button> 
//     </Form>

//     </div>
//   )
// }

// export default Edit
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { appContext } from '../App'

function Edit() {
 
  const [value, setvalue] = useContext(appContext)
  const navi =useNavigate()
  const randomnumber=parseInt(Math.random()*1000);

    const[dataEdit,setDataedit]=useState({
     
        ID:randomnumber,
        NAME:"",
        POSITION:"",
        AGE:"",
        PLACE:"",
        

    })
   
   
   const handleAddFormChange=(event)=>{
    event.preventDefault()

    setDataedit({...dataEdit,[event.target.name]:event.target.value})
        
        console.log(dataEdit);}


    const submit=(event)=>{



    
          event.preventDefault()

          setvalue(pre=>{
            return[...pre,dataEdit]
          })
          
          navi("/")

          
        }

    

  return (
    <div>
       <form 
       onSubmit={submit}
       >


       
<label>
    ID:
    <input type="text"  onChange={ handleAddFormChange} name="ID" />
  </label>
  <label>
    NAME:
    <input     onChange={ handleAddFormChange} type="text" name="NAME" />
  </label>
  <label>
    POSITION:
    <input onChange={ handleAddFormChange} type="text" name="POSITION" />
  </label>
  <label>
    AGE:
    <input   onChange={ handleAddFormChange} type="text" name="AGE" />
  </label>
  <label>
    PLACE:
    <input   onChange={ handleAddFormChange} type="text" name="PLACE" />
  </label>
  <Button variant="primary" type="submit">
         ADD
     </Button> 
               
 {/* <button>Add</button> */}
</form>



    </div>
  )
}

export default Edit