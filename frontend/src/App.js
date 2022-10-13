import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Assesories from './Pages/Assesories';
import DeleteData from './Pages/DeleteData';
import Gainer from './Pages/Gainer';
import Machine from './Pages/Machine';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Gainer/>} />
        <Route exact path='/machine' element={<Machine/>} />
        <Route exact path='/assesories' element={<Assesories/>} />
        <Route exact path='/deleteData' element={<DeleteData/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
