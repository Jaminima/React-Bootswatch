import logo from './logo.svg';
import './App.css';
import CenteredDiv from "./components/centeredDiv";

function App() {
  return (
    <div className="App">
      <CenteredDiv height={50} sizerHeight={"vh"} width={50} sizerWidth={"vw"}>
          <div className="card border-primary mb-3" style={{maxWidth: "50rem"}}>
              <div className="card-header">Header</div>
              <div className="card-body">
                  <h4 className="card-title">Primary card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
      </CenteredDiv>
    </div>
  );
}

export default App;
