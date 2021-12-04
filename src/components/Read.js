import { Fragment, useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import TableData from './TableData';


export default function Read({ dataBase, setDataBase }){

	const [tBody, setTBody] = useState([]);

	useEffect(() => {
		setTBody(
			dataBase.map((data) => {

				return <TableData data={data} setDataBase={setDataBase} dataBase={dataBase}/>
			})
		)
	}, [dataBase])



	return (
		<div className="p-5 container-fluid">
			<Table className="">
			  <thead>
			    <tr>
			      <th>First Name</th>
			      <th>Last Name</th>
			      <th>Email</th>
			      <th>Contact</th>
			      <th>Edit / Delete</th>
			    </tr>
			  </thead>
			  <tbody>
			    {tBody}
			  </tbody>
			</Table>
		</div>
	)
}