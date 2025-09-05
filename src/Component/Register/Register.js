import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Register.css"
import { useState } from "react";
function Register() {
   
    const [userDataofRegister, setuserDataofRegister] = useState({
        userName: "",
        email_id: "",
        password: "",
    })

    function handlerRegister() {
       axios.post('http://localhost:3001/user', userDataofRegister)
      .then(response => {
        alert("Registration successful!");
        
        
      })
      .catch(error => {

          console.error("Registration failed:", error);
        // No alert for error
      });
       navigate("/title"); 

    }
    function handleUserName(event) {
        let user = { ...userDataofRegister };
        user["userName"] = event.target.value
        setuserDataofRegister(user);
    }
    function handleUSerEmail(event) {
        let user = { ...userDataofRegister };
        user["email_id"] = event.target.value
        setuserDataofRegister(user)
    }
    function handleuserPassword(event) {
        let user = { ...userDataofRegister }
        user["password"] = event.target.value;
        setuserDataofRegister(user)
    }

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login")
    }

    const navigateToDashboard = () => {
        navigate("/")

    }

    return (
        <div className="bodybacground">

            {/* header section start from here */}
            <div className=" headerArrangingsectionofregister">
                <div onClick={navigateToDashboard}> Blogs</div>
                <div className="headerRightSectionArranging">
                    <div onClick={navigateToLogin}>Login</div>
                    <div>Register</div>
                </div>

            </div>

            {/* register section start from here */}

            <div className="registersection">
                {/* main body of the login section */}
                <div className="blogsheader">Blogs</div>
                <div className="headerdescription">Publish your passion in your way......</div>
                <hr />
                <div className="loginsectiponLoginheader">Register</div>
                <div className="inupttype" >Name</div>
                <input type="text" placeholder="Firstname_lastname" value={userDataofRegister.userName} onChange={handleUserName} />
                <div className="inputtype">Email id</div>
                <input type="text" placeholder="youermail.com" value={userDataofRegister.email_id} onChange={handleUSerEmail} />
                <div className="inputtype" >Password</div>
                <input type="text" placeholder="pass@1234" value={userDataofRegister.password} onChange={handleuserPassword} /><br />
                <button className="loginbutton" onClick={handlerRegister}>Register</button>

            </div>









        </div>










    );
}
export default Register;