import { Redirect } from 'react-router-dom';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
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

      {/*
          Switch chỉ render route match lần đầu, tránh render duplicate 
        */}
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
