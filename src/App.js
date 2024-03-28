
import './App.css';
import Welcome from '../src/component/welcome';


const App = () => {
  

  return (
    <div className="App">
      <Welcome/> {/* Pass visitor's name to Welcome component */}
    </div>
  );
};

export default App;
