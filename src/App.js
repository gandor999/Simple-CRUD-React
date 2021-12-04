import { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './App.css';
import Create from './pages/Create';
import Read from './components/Read';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'antd/dist/antd.css';

function App() {

  const [dataBase, setDataBase] = useState([]);

  console.log(dataBase);

  return (
    <Fragment>
      <div className="row">

        <section className="col">
          <Create  dataBase={dataBase} setDataBase={setDataBase}/>
        </section>
        
        <section className="col">
          <h3 className="text-center p-4">Read</h3>
          <Read dataBase={dataBase} setDataBase={setDataBase}/>
        </section> 

      </div>   
    </Fragment>
  );
}

export default App;
