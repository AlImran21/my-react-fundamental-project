import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import AllProducts from './components/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
function App() {
  const [count, setCount] = useState (0)

  const setCartCount = () => {
    setCount (count + 1)
  }

  useEffect ( () => {
    AOS.init ()
  }, [])

  return (
    <div className="App">
        <Menubar count={count}></Menubar>
        <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Menubar from './components/Menubar/Menubar';
// import Test from './components/Test/Test';

// function App() {
//   // const count = () => {
//   //   console.log ("got you")
//   // }

//   return (
//     <div className="App">
//       {/* <Menubar country={"nepal"}></Menubar> */}
//       {/* <Test count={count}></Test> */}
//     </div>
//   );
// }

// export default App;
