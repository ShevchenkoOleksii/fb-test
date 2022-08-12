import React from 'react';
import './App.css';
import {HeadTags} from './HeadTags';
const imageUrl = 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=';
const { href } = window.location;
const FB_DOMAIN = 'https://facebook.com/sharer.php?u=';

const openPopup = (link, e) => {
  e.preventDefault();
  window.open(link, 'newwindow', 'width=300, height=250');
};


function App() {
  return (
    <div className="App">
      <HeadTags />
      <div>
        <img src={imageUrl} alt="bg"/>
      </div>
      <div>
        <a
          href={`${FB_DOMAIN}${href}`}
          onClick={e => openPopup(`${FB_DOMAIN}${href}`, e)}
        >
          Share!
        </a>
      </div>
    </div>
  );
}

export default App;
