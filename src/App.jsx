import React from 'react';
import GlobalStyle from './styled/Global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tamra from './pages/Tamra';
import Header from './pages/Header';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
          {/* <Header/> */}
        <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<Tamra/>}/>
              
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;