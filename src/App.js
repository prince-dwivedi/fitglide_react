
import './App.css';
import Welcome from '../src/component/welcome';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  

  return (
    <div className="App container-fluid">
      <Welcome/> {/* Pass visitor's name to Welcome component */}
    </div>
  );
};

export default App;
