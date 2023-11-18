import './App.css'
import Inputs from './Inputs';


function App() {
  return (
    <div>
      <h2 style={{ color: 'lightblue', textAlign: 'center' }}>
        Trailer Calculator
      </h2>
      <div
        className="container"
      >
        <div className="semi-trailer">
        <h3 style={{ color: 'lightgreen', textAlign: 'center' }}>Semi-trailer</h3>
      
          <Inputs trailer_length_size={1360} />
        </div>
        <div className="swap-body">
        <h3 style={{ color: 'lightgreen', textAlign: 'center' }}>Swap-body</h3>
          <Inputs trailer_length_size={782} />
        </div>
      </div>
    </div>
  );
}

export default App
