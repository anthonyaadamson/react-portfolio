import { useState} from "react";
import { validateEmail, checkMessage, checkName } from "../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] =  useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
  

  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'message') {
    setMessage(inputValue);
  } else {
    setName(inputValue);
  }
}

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('This email is not valid');
      return;
    }
    if (checkMessage(message)) {
      setErrorMessage(
        'Message is required'
      );
      return;
    }
    if (checkName(name)) {
      setErrorMessage(
        'Name is required'
      );
      return;
    }
  }

    return (
      <div>
        <h1 className="m-5 py-3">Contact Me!</h1>
        <form className="form" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="inputName" placeholder="Joe Smith" name="name" value={name} onChange={handleInputChange}/>
             </div>
             <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="joe@smith.com" name="email" value={email} onChange={handleInputChange}/>
             </div>
            <div className="mb-3 pb-3">
                <label htmlFor="inputText" className="form-label">Message:</label>
                <textarea onChange={handleInputChange} name="message" value={message} className="form-control" id="inputText" rows="7"></textarea>
            </div>
            <div className="mb-5 pb-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
            {errorMessage && (
        <div>
          <p className="text-center m-3 py-3">{errorMessage}</p>
        </div>
      )}
    </div>
    )
 }