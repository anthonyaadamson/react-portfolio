export default function Contact() {
    return (
      <div>
        <h1>Contact Me!</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="inputName" placeholder="Joe Smith"/>
             </div>
             <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="joe@smith.com"/>
             </div>
            <div className="mb-3 pb-3">
                <label htmlFor="inputText" className="form-label">Message:</label>
                <textarea className="form-control" id="inputText" rows="7"></textarea>
            </div>
            <div className="mb-5 pb-3">
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
    </div>
    );
  }