import React, { createContext, useState } from 'react';

import './App.css';
import View from './crud/View';
import Edit from './crud/Edit';
import Delete from './crud/Delete';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Table1 from './crud/Table';

import { Table } from 'react-bootstrap';
import Data from './crud/Data';

const appContext=createContext()
function App() {
  const [value,setvalue]=useState(Data)
  // console.log(value);
  return (
    <div className="App">
      <appContext.Provider value={[value,setvalue]}>
 <BrowserRouter> 
     <Table1/>
  <Routes>
  <Route path ="/view/:id" element={<View/>}> </Route>
  <Route path ="/edit" element={< Edit/>}> </Route>
  <Route path ="/delete/:id" element={ <Delete/>}> </Route>
  
  </Routes>
  </BrowserRouter>
  </appContext.Provider>
    </div>
  );
}

export default App;
export {appContext}
