import Gallery from './components/Gallery';

import classes from './App.module.css';

const DUMMY_GALLERY = [
  {
    title: 'Happy Pepe',
    path: './img/pepe img/happy-pepe.png',
    alt: 'Happy Pepe',
    id: 'happy-pepe',
  },
  {
    title: 'Cry Pepe',
    path: './img/pepe img/cry-pepe.jpg',
    alt: 'Cry Pepe',
    id: 'cry-pepe',
  },
  {
    title: 'Pepe with juice',
    path: './img/pepe img/juice-pepe.jpg',
    alt: 'Pepe with juice',
    id: 'juice-pepe',
  },
  {
    title: 'Pepe with microphone',
    path: './img/pepe img/sing-pepe.webp',
    alt: 'Pepe with microphone',
    id: 'sing-pepe',
  },
];

function App() {
  return (
    <div className={classes.app}>
      <Gallery gallery={DUMMY_GALLERY} />
    </div>
  );
}

export default App;
