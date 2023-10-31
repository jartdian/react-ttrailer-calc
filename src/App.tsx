import './App.css'
import Inputs from './Inputs';


function App() {
  return (
    <div>
      <h1 style={{ color: 'lightblue', textAlign: 'center' }}>
        Trailer Truck Calculator
      </h1>
      <div
        className="container"
        style={{ display: 'flex', gap: '5em', justifyContent: 'space-evenly' }}
      >
        <div className="semi-trailer">
          <Inputs trailer_length_size={1360} />
        </div>
        <div className="swap-body">
          <Inputs trailer_length_size={782} />
        </div>
      </div>
    </div>
  );
}

export default App
