import './App.css';
import Header from './Header';
// import { cursorMove } from './ufo-cursor/ufocursor.js';
import './ufo-cursor/ufocursor.css'
import Stars from './Stars';
import Planet from './Planet'
import ContactForm from './Footer';


function App() {
  // const cursor = document.querySelector(".cursor");

  // document.addEventListener("mousemove", e => {
  //   cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
  // })
  return (
    <div className="app">
      <Stars />
      <Header />
      <Planet />
      <ContactForm />
      {/* <div className='cursor'></div> */}
    </div>
  );
}

export default App;
