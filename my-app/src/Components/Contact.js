import React, {useState} from "react";
import img from "../img/image.png";
const Contact = () => {

    const [user, setUser] =useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    });
    
    let name, value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value= e.target.value;

        setUser({...user, [name]:value})
    }
    const PostData = async (e)=>{
      e.preventDefault();
      const {name, email, phone, work, password, cpassword} = user;

      const res = await fetch("/contact",{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          name, email, phone, work, password, cpassword
        })
      });
      const data = await res.json();
      if(data.status === 422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration")
      }else{
        window.alert("Registration Successful");
        console.log("Registration Successful")
      }
    }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="bi bi-person-fill"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="your name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="bi bi-envelope-fill"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="bi bi-telephone-fill"></i>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your phone"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="bi bi-award-fill"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    placeholder="Your profession"
                    value={user.work}
                    onChange={handleInputs}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="bi bi-key-fill"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="bi bi-lock-fill"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Your confirm password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-btn">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
            <div className="signup-images">
              <figure>
                <img src={img} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
