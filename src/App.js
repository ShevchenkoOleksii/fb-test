import React from 'react';
import './App.css';
// import {HeadTags} from './HeadTags';
const imageUrl = 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=';
const { href } = window.location;
const FB_DOMAIN = 'https://facebook.com/sharer.php?u=';

const openPopup = (link, e) => {
  e.preventDefault();
  window.open(link, 'newwindow', 'width=300, height=250');
};
// const dataLink = 'https://developers.facebook.com/docs/plugins/';
const dataLink = 'https://fb-test-app-v1.herokuapp.com/';

function App() {
  return (
    <div className="App">
      {/*<HeadTags />*/}
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
      {/*<iframe*/}
      {/*  src={`https://www.facebook.com/plugins/share_button.php?href=${dataLink}&layout=button_count&size=small&width=77&height=20&appId`}*/}
      {/*  width="77"*/}
      {/*  height="20"*/}
      {/*  scrolling="no"*/}
      {/*  frameBorder="0"*/}
      {/*  allowFullScreen="true"*/}
      {/*  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"*/}
      {/*>*/}
      {/*</iframe>*/}
      {/*<iframe*/}
      {/*  src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fnotes-meneger-test.herokuapp.com%2Fapi%2Fauth&layout=button_count&size=small&width=77&height=20&appId"*/}
      {/*  width="77"*/}
      {/*  height="20"*/}
      {/*  scrolling="no"*/}
      {/*  frameBorder="0"*/}
      {/*  allowFullScreen="true"*/}
      {/*  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"*/}
      {/*>*/}
      {/*</iframe>*/}
      {/*<iframe*/}
      {/*  src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&width=96&height=20&appId"*/}
      {/*  width="96"*/}
      {/*  height="20"*/}
      {/*  scrolling="no"*/}
      {/*  frameBorder="0"*/}
      {/*  allowFullScreen="true"*/}
      {/*  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"*/}
      {/*>*/}

      {/*</iframe>*/}
      {/*<div*/}
      {/*  className="fb-share-button"*/}
      {/*  data-href="https://developers.facebook.com/docs/plugins/"*/}
      {/*  data-layout="button_count" data-size="small">*/}
      {/*  <a target="_blank"*/}
      {/*    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"*/}
      {/*  >*/}
      {/*    Поширити</a>*/}
      {/*</div>*/}
      <div
        className="fb-share-button"
        data-href={dataLink}
        data-layout="button_count" data-size="small">
        <a target="_blank"
           href={`https://www.facebook.com/sharer/sharer.php?u=${dataLink}&amp;src=sdkpreparse`}
        >
          Поширити</a>
      </div>
    </div>
  );
}

export default App;
