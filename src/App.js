import './App.css';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <TodoFeature />
      <AlbumFeature />
      <ColorBox />
      <Counter />
    </div>
  );
}

export default App;
