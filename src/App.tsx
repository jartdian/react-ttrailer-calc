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
      >
        <div className="semi-trailer">
        <u>
        <h3 style={{ color: 'lightgreen', textAlign: 'center' }}>Semi-trailer</h3>
      </u>
          <Inputs trailer_length_size={1360} />
        </div>
        <div className="swap-body">
        <u>
        <h3 style={{ color: 'lightgreen', textAlign: 'center' }}>Swap-body</h3>
      </u>
          <Inputs trailer_length_size={782} />
        </div>
      </div>
    </div>
  );
}

export default App
