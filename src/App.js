import { Link, NavLink, Route } from 'react-router-dom';
import './App.css';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      {/* <AlbumFeature />
      <ColorBox />
      <Counter /> */}
      <h2>Header</h2>

      <p>
        <Link to="/todos">Todos</Link> <Link to="/albums">Albums</Link>
      </p>

      <p>
        {/*
          Link not have class active 
          NavLink default have class active, can set class active to other class 
        */}
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>{' '}
        <NavLink to="/albums">Albums</NavLink>
      </p>

      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
