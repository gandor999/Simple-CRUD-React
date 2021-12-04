import { Form, Button, Table, Modal } from 'react-bootstrap';
import { Fragment, useState, useEffect } from 'react';


export default function TableData({ data, setDataBase, dataBase }){

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [firstName, setFirstName] = useState(data.firstName);
	const [lastName, setLastName] = useState(data.lastName);
	const [email, setEmail] = useState(data.email);
	const [contact, setContact] = useState(data.contact);
	const [isGood, setIsGood] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(false);

	let numbers = '12345678890';


	useEffect(() => {
    if(
      email.includes('@') && 
      email[0] !== '' && 
      email[email.length - 1] !== '@' && 
      email.includes('.') && 
      email[email.length - 1] !== '.' &&
      email[email.indexOf('@') + 1] !== '.' &&
      email[email.indexOf('@') - 1] !== '.' &&
      periodAfterAt() &&
      email[0] !== '@'
    ){
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }

    
  }, [email])

  useEffect(() => {
    if(
      firstName.length !== 0 && 
      lastName.length !== 0 &&
      isValidEmail &&
      contact.length == 11 &&
      checkContact()
    ){
      setIsGood(true);
    }
    else {
      setIsGood(false);
    }
  }, [isValidEmail, firstName, lastName, contact])


	function update(){
		let temp = dataBase;

		temp[data.id].firstName = firstName;
		temp[data.id].lastName = lastName;
		temp[data.id].email = email;
		temp[data.id].contact = contact;

		setDataBase(temp);

		handleClose();
	}

	function remove(id){
		setDataBase(dataBase => dataBase.filter((data) => data.id !== id));
	}

	function periodAfterAt(){
	  let result = false;

	  for(let i = email.indexOf('@'); i < email.length; ++i){
	      if(email[i] == '.'){
	        result = true;
	      }
	  }

	  return result;
	}

	function checkContact(){
	  let result;

	  for(let i = 0; i < contact.length; ++i){
	    if(numbers.includes(contact[i])){
	      result = true;
	    } else{
	      result = false;
	      break;
	    }
	  }

	  return result;
	}


	return (
		

		<Fragment>
			<tr className="">
				<td className="pt-3">
					{data.firstName}
				</td>

				<td className="pt-3">
					{data.lastName}
				</td>

				<td className="pt-3">
					{data.email}
				</td>

				<td className="pt-3">
					{data.contact}
				</td>

				<td>
					<Button className="m-1" onClick={handleShow}>Edit</Button> <Button variant="danger" className="m-1" onClick={() => remove(data.id)}>X</Button>
				</td>
			</tr>

			<Modal show={show} onHide={handleClose}>
		        <Modal.Header closeButton>
		          <Modal.Title>Update</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	<Form className="p-5">
		        	  <Form.Group className="mb-3" controlId="formFirstName">
		        	    <Form.Label>First Name</Form.Label>
		        	    <Form.Control 
		        	    type="text" 
		        	    placeholder="First Name" 
		        	    value={firstName}
		        	    onChange={(e) => {
		        	      setFirstName(e.target.value)
		        	    }}

		        	    />
		        	  </Form.Group>

		        	  <Form.Group className="mb-3" controlId="formLastName">
		        	    <Form.Label>Last Name</Form.Label>
		        	    <Form.Control 
		        	    type="text" 
		        	    placeholder="Last Name" 
		        	    value={lastName}
		        	    onChange={(e) => {
		        	      setLastName(e.target.value)
		        	    }}

		        	    />
		        	  </Form.Group>

		        	  <Form.Group className="mb-3" controlId="formBasicEmail">
		        	    <Form.Label>Email address</Form.Label>
		        	    <Form.Control 
		        	    type="email" 
		        	    placeholder="Enter email" 
		        	    value={email}
		        	    onChange={(e) => {
		        	      setEmail(e.target.value)
		        	    }}

		        	    />
		        	  </Form.Group>

		        	  <Form.Group className="mb-3" controlId="formContact">
		        	    <Form.Label>Contact No#</Form.Label>
		        	    <Form.Control 
		        	    type="text" 
		        	    placeholder="Contact No# eg. 91243516762" 
		        	    value={contact}
		        	    onChange={(e) => {
		        	      setContact(e.target.value)
		        	    }}

		        	    />
		        	  </Form.Group>

		        	  {
		        	    (isGood) ? 
		        	      <Button variant="primary" onClick={update}>
		        	        Update
		        	      </Button>
		        	    :
		        	      <Button variant="secondary" disabled>
		        	        Update
		        	      </Button>

		        	  }
		        	  
		        	  
		        	</Form>
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={handleClose}>
		            Cancel
		          </Button>
		        </Modal.Footer>
		    </Modal>

		</Fragment>

	)
}