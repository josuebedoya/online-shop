import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Button } from './Components/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <Button/>
    </>
);
