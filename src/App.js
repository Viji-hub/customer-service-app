import React, {createContext, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


export const ServiceContext = createContext({});

localStorage.setItem('token', 'invalid');
function App() {
  debugger;
  const [serviceObj, setServiceObj] = useState({
    'serviceData': [],
    'serviceTypes': [],
    'onlineService': [],
    'mobileService': [],
    'requests': [],
    'loggedInUser': null,
    'isUserLoggedIn': false
  });

  function updateServiceObj(name, value) {
    setServiceObj(oldObj => ({...oldObj, [name] : value}));
  }

  return (
    <ServiceContext.Provider value={{serviceObj, updateServiceObj}}>
      <div className="App">
        <Header/>
        <div className='body-container h-100 text-center'>
          <Outlet/>
        </div>

        {/* <Footer/> */}
      </div>
    </ServiceContext.Provider>
  );
}

export default App;
