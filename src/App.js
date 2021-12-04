import { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './App.css';
import Create from './pages/Create';
import Read from './components/Read';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [dataBase, setDataBase] = useState([]);

  console.log(dataBase);

  return (
    <Fragment>
      <Create  dataBase={dataBase} setDataBase={setDataBase}/>
      <h1 className="text-center">Read</h1>
      <Read dataBase={dataBase} setDataBase={setDataBase}/>
    </Fragment>
  );
}

export default App;
