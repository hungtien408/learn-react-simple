import { Route } from 'react-router-dom';
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
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
