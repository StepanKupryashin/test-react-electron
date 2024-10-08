import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const Home: React.FC = () => {

  const onClick = () => {
    // console.log(import.meta.dirname);
     console.log((window as any).ipcRender.send('runScript'));
  }
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link to={'/about'}>To about page</Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <button onClick={onClick}>Click me</button>

        </header>
      </div>
    )
}

export default Home;