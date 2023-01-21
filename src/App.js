import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Switches from './pages/Switches';
import { useEffect, useState } from 'react';
import { ActiveFilterContext, ActiveFilterContextDefaults } from './contexts/ActiveFilterContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Sent from './pages/Sent';
import Error404 from './pages/Error404';

function App() {
  const filters = require('./data/filters_expanded.json')
  const [activeFilter, setActiveFilter] = useState(ActiveFilterContextDefaults.value)

  function setFiltersToDefault(){
    setActiveFilter(filters
      .sort((c, d) => {
        if (c.name.toLowerCase() < d.name.toLowerCase()) {
          return -1
        }
        if (c.name.toLowerCase() > d.name.toLowerCase()) {
          return 1
        }
        return 0
      })
      
      .sort((e, f) => {
        if (e.category.toLowerCase() < f.category.toLowerCase()) {
          return -1
        }
        if (e.category.toLowerCase() > f.category.toLowerCase()) {
          return 1
        }
        return 0
      }))
  }

  useEffect(() => {
    setFiltersToDefault();
  }, [])
  
  useEffect(()=>{
    if(!activeFilter.some(item => item.active)){
      setFiltersToDefault();
    }
  }, [activeFilter])

  useEffect(() => {
    console.log(activeFilter)
  }, [activeFilter])
  return (
    <ActiveFilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      <Router>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/glorious-fan-page/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/switches' element={<Switches />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/sent' element={<Sent />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </ActiveFilterContext.Provider>
  );
}

export default App;
