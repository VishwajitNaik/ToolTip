import './style/App.css';
import ToolTip from './ToolTip';


function App() {
  return (
    <div className="App">
      <div>
        <ToolTip position='top' />
        </div>
        <div>
        <ToolTip position='bottom' />
        </div>
      <div>
        <ToolTip position='left' />
        </div>
        <div>
        <ToolTip position='right' />
        </div>
    </div>
  );
}

export default App;