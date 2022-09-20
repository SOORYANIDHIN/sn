import React, {} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> 
     <Table/>
  <Routes>
  <Route path ="/view/:id" element={<View/>}> </Route>
  <Route path ="/edit/:id" element={< Edit/>}> </Route>
  <Route path ="/delete/:id" element={ <Delete/>}> </Route>
  
  </Routes>
  </BrowserRouter> */}
  <App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
