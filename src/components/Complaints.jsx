import axios from 'axios';
import {Service_URL} from '../Config.js';

function Complaints() {
  return (
    <div className='text-center my-4'>
        <h1 className='text-primary-emphasis'>Add Service</h1>
        <form action="">
            <input placeholder='Enter Service Name' type="text" name="service-name" id="service-name" />
            <textarea placeholder='Enter Service Description' name="service-desc" id="service-desc"></textarea>
            <select name="banking-type" id="banking-type">
                <option value="both">Both</option>
                <option value="online-banking">Online Banking</option>
                <option value="mobile-banking">Mobile Banking</option>
            </select>

        </form>
    </div>
  )
}

export default Complaints;