
import { Outlet } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';


function App() {
  return (
     <div>
       <Navbar/>
       <Outlet></Outlet>
       <Footer/>
     </div>
  )
}

export default App
