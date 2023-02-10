import './App.css';
import Header from './Header';
import { cursorMove } from './ufo-cursor';
import './ufo-cursor/ufocursor.css'
import Stars from './Stars';
import Planet from './Planet'
import ContactForm from './Footer';


function App() {
  cursorMove()
  return (
    <div className="app">
      <Stars />
      <Header />
      <Planet />
      <ContactForm />
      <div className='cursor'></div>
    </div>
  );
}

export default App;
