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
    title: 'Laugh Pepe',
    path: './img/pepe img/laugh-pepe.png',
    alt: 'Laugh Pepe',
    id: 'laugh-pepe',
  },
  {
    title: 'Pepe with sword and shield',
    path: './img/pepe img/fight-pepe.png',
    alt: 'Pepe with sword and shield',
    id: 'fight-pepe',
  },
  {
    title: 'Nervous Pepe',
    path: './img/pepe img/nervous-pepe.png',
    alt: 'Nervous Pepe',
    id: 'nervous-pepe',
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
