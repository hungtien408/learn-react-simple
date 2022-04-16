import { useEffect } from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import styled from 'styled-components';

// CSS in JS
const Title = styled.h1`
  text-align: center;
  font-weight: bold;

  color: ${(props) => props.color || 'green'};
`;

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      {/* <AlbumFeature />
      <ColorBox />
      <Counter /> */}
      <Title color="goldenrod">HEADING</Title>

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
        <Route path="/counters" component={CounterFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
