import React from 'react'
import Card from './Card';
import './style.css'
const DisplayCard = () => {
  return (
  <div className='parent'>

<Card header='News' title='Snow in Turkey Brings Travel Woes' description='Heavy snowstorm in Turkey creates havoc as hundreds of villages of roads closed.' color='yellow'/>

<Card header='News' title='Landslide Leaving Thousands Homeless' description='An aburt lanslide in the  Silicon Valley has left thousands homeless and on the streets.' color='lightblue'/>

<Card header='News' title='Hail the size of baseballs in New York' description='a rare and unexpected event occurred today as hail the size of snowfall hits New York citizens.' color='orange'/>

<Card header='News' title='Earthquake destroying San Fransisco' description='A massive earthquake just hit San Frasisco  leaving behind a giant crater.' color='purple'/>

  </div>
  );
}

export default DisplayCard