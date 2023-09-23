import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Beautylist from './components/Beautylist';
import Viewproducts from './components/Viewproducts';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
      <header className="App-header">
       <Header/>
       
       <Routes>
      <Route path='/' element={<Beautylist/>}/> 
      <Route path='/viewproducts/:id' element={<Viewproducts/>}/> 

       </Routes>
       <Footer/>
       
      </header>
      </Router>
    </div>
  );
}

export default App;
