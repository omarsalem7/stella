import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome in Stella Stays Task</h1>
      <h3>There are two routes in this app, you can navigate between them</h3>
      <div className="links">
        <Link to="/route1">route1</Link>
        <Link to="/route2">route2</Link>
      </div>
    </div>
  );
}

export default App;
