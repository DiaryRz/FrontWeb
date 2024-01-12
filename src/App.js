import AppAffichage from './page/AppAffichage';
import Liste from './page/Carburant';
import InsertionBoiteDeVitesse from './page/BoiteDeVitesse';
import InsertionLieu from './page/Lieu';
import InsertionMarque from './page/Marque';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AppAffichage /> }></Route>
          <Route path='/InsertionCarburant' element={ <Liste /> }></Route>
          <Route path='/InsertionBoiteDeVitesse' element={ <InsertionBoiteDeVitesse /> }></Route>
          <Route path='/InsertionLieu' element={ <InsertionLieu /> }></Route>
          <Route path='/InsertionMarque' element={ <InsertionMarque /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
