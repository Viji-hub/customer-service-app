import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import {Service_URL} from '../Config.js';
import ServiceCard, { TitleCard } from './ServiceCard.jsx';
import { ServiceContext } from '../App.js';


function Services() {
  const {serviceObj, updateServiceObj} = useContext(ServiceContext);

  async function fetchServices() {
    try {
      const resData = await axios.get(Service_URL);
      if(resData.data) {
        updateServiceObj('serviceData', resData.data);
        updateServiceObj('serviceTypes', resData.data['service-types'])
        const onlineService = resData.data.services.filter(service => service.type.includes('online-banking'));
        const mobileService = resData.data.services.filter(service => service.type.includes('mobile-banking'));
        updateServiceObj('onlineService', onlineService);
        updateServiceObj('mobileService', mobileService);
      }
    } catch (error) {
      throw new Error('Error on fetching service data..!!!'); 
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      {
        serviceObj['serviceTypes'].length && <div className='text-center my-4'>
          <h1 className='text-primary-emphasis'>Services</h1>
          <div className='service-header-cards d-flex justify-content-evenly p-4 flex-wrap'>
            {
              serviceObj['serviceTypes'].map(type => <TitleCard key={type} title={type.split('-')[0] + ' Services'}/>)
            }
          </div>
        </div>
      }
      {
          serviceObj['onlineService'].length && <div className='text-center my-4'>
            <h1 className='text-primary-emphasis'>Online Services</h1>
            <div className='online-service-cards d-flex justify-content-evenly p-4 flex-wrap'>
              {
                serviceObj['onlineService'].map(service => <ServiceCard {...service} key={service.id}/>)
              }
            </div>
        </div>
      }
      {
          serviceObj['mobileService'].length && <div className='text-center my-4'>
            <h1 className='text-primary-emphasis'>Mobile Services</h1>
            <div className='mobile-service-cards d-flex justify-content-evenly p-4 flex-wrap'>
              {
                serviceObj['mobileService'].map(service => <ServiceCard {...service} key={service.id}/>)
              }
            </div>
        </div>
      }
    </div>
  )
}

export default Services;