import { Fragment, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function Create({ dataBase, setDataBase }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isGood, setIsGood] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [contactGood, setContactIsGood] = useState(true);

  let numbers = '12345678890';

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(contact);

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

  function add(){
    setDataBase(() => [...dataBase, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contact: contact,
      id: dataBase.length
    }])
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
      <h3 className="text-center pt-4">Create</h3>
      <Form className="p-5 m-5">
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
          className="rounded-pill"
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
          className="rounded-pill" 
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
          className="rounded-pill" 
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
          className="rounded-pill" 
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
            <Button className="m-3" variant="primary" onClick={add}>
              Add To Data
            </Button>
          :
            <Button className="m-3" variant="secondary" disabled>
              Add To Data
            </Button>

        }
        
        
      </Form>
    </Fragment>
  );
}

export default Create;