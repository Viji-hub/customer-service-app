import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const carousel = [{
    "head": "Mobile Banking",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMpcBGgk4s2NPjXObFvwMWAL5uDgNTAJnJtNoJMzRztv-hkTmlhlIJeHEwBU1-98XEoI&usqp=CAU"
},
{
    "head": "Online Banking",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aS4L9kUiilPrUEOI6u8WvhanOd6o6IMfBw&usqp=CAU"

},
{
    "head": "24/7 Support Services",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYi3LTWQxYjy7daHif_J5QMqsAufB6IJ-mEw&usqp=CAU"

}];
function Body() {
  return (
    <div className='body-container'>
      {
        carousel.map((item, index) => (
          <Carousel data-bs-theme="dark" key={index}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.head}
              />
              <Carousel.Caption>
                <h5>{item.head}</h5>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ))
      }
    </div>
  )
}

export default Body;