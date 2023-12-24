import './SignUp.css.css';

const SignUp = () => {
  let handleValidity = () =>{
    if(this.checkValidity()){
        this.preventDefault();
        this.classList.add("was-validated");
      }
  }
  return (
    <>
  <div className="container parent-container999">
    <div className="row">
      <div className="col-md col-md999">
        <div className="left left999">
          <h2 style={{ fontFamily: "monospace,sans-serif" }}>
            Sign Up for Premium Experience
          </h2>
          <p>
            Unlimited Download Of The Latest With and More Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Error totam omnis unde
            repudiandae ad, consequatur vitae iste culpa ullam aut aperiam eos
            earum voluptatibus illo, laudantium non repellat laborum quia!
          </p>
        </div>
      </div>
      <div className="col-md col-md999">
        <div className="right right999">
          <div className="row">
            <p>
              Try it free 7 days <span>then $8.99/mo. thereafter</span>
            </p>
          </div>
          <div className="row">
            {/*Copy Form here ###############################################*/}
            <form action="/" id="Sign-up" noValidate="" onSubmit={handleValidity}>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
              <div className="invalid-feedback">First Name cannot be empty</div>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                required=""
              />
              <div className="invalid-feedback">Last Name cannot be empty</div>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required=""
              />
              <div className="invalid-feedback">Add a Valid Email</div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required=""
              />
              <div className="invalid-feedback">
                Password Name cannot be empty
              </div>
              <input
                type="submit"
                defaultValue="CLAIM YOUR FREE TRIAL"
                className="btn btn-success submitf"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    <p
      style={{
        color: "white",
        fontFamily: "monospace,sans-serif",
        textAlign: "center"
      }}
    >
      Coded by <a href="http://ahmedsaife6@gmail.com">ahmedsaife6@gmail.com</a>
    </p>
  </div>
</>
  )
}

export default SignUp
