import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Categories from './component/categories'
import Products from './component/products';

function App() {

  return (
   <div className='App'>
     <Header/>
    <Categories/>
    <Products/>
     <Footer/>
   </div>
  

  );
}

export default App;
