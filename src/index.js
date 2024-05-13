import './style.css';
import homeContainer from './loadHome';
import aboutContainer from './loadAbout';
import menuContainer from './loadMenu'

const content = document.getElementById('content');
content.appendChild(homeContainer);

const homebtn = document.querySelector('#home');
homebtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.appendChild(homeContainer);
});

const aboutbtn = document.querySelector('#about');
aboutbtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.appendChild(aboutContainer);
});

const menubtn = document.querySelector('#menu');
menubtn.addEventListener('click', () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  content.appendChild(menuContainer);
});