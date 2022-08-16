import React from 'react';
import './App.css';

import { HeadTags } from './HeadTags';

const imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/15/08/blank-792125__340.jpg';
const { href } = window.location;
const FB_DOMAIN = 'https://facebook.com/sharer.php?u=';

const openPopup = (link, e) => {
  e.preventDefault();
  window.open(link, 'newwindow', 'width=300, height=250');
};
const dataLink = 'https://fb-test-app-v1.herokuapp.com/';

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
      <div
        className="fb-share-button"
        data-href={dataLink}
        data-layout="button_count" data-size="small">
        <a target="_blank"
           href={`https://www.facebook.com/sharer/sharer.php?u=${dataLink}`}
        >
          Поширити</a>
      </div>
      <iframe
        src={`https://www.facebook.com/plugins/share_button.php?href=${dataLink}&layout=button_count&size=small&width=77&height=20&appId`}
        width="77"
        height="20"
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      >
      </iframe>
    </div>
  );
}

export default App;
