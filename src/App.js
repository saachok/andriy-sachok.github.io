import classes from './App.module.css';

const DUMMY_GALLERY = [
  {
    title: 'Happy Pepe',
    path: './img/pepe img/happy-pepe.png',
    id: 'happy-pepe',
  },
];

function App() {
  return (
    <div className={classes.app}>
      <div className={classes['gallery-control']}>
        <button>Prev img</button>
        <img
          src={DUMMY_GALLERY[0].path}
          alt="Image of Pepe"
          className={classes['current-img']}
        />
        <button>Next img</button>
      </div>
    </div>
  );
}

export default App;
