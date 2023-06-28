import React from 'react';
import GlobalStyle from './styled/Global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Ev from './pages/Ev';
import Evcharging from './pages/Evcharging';
import News from './pages/News';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import UserInfo from './pages/UserInfo';
import NotFound from './pages/NotFound';
import NewsDetail from './pages/NewsDetail';
import NewsLayout from './pages/NewsLayout';

const App = () => {
  return (
    <>
      <GlobalStyle/>

      <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ev' element={<Ev/>}/>
            <Route path='/evchaging' element={<Evcharging/>}/>
            <Route path='/news' element={<NewsLayout/>}>
              <Route index element={<News/>}/>
              <Route path=':newsID' element={<NewsDetail/>}/> 
            </Route>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/userinfo' element={<UserInfo/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;