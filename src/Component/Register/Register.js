
import { useNavigate } from "react-router-dom";
import"./Register.css"
function Register(){

const navigate=useNavigate();
const navigateToLogin=()=>{
    navigate("/login")
}

const navigateToDashboard=()=>{
    navigate("/")

}

return(
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
            <hr/>
            <div className="loginsectiponLoginheader">Register</div>
            <div className="inupttype">Name</div>
            <input type="text" placeholder="Firstname_lastname" />
            <div className="inputtype">Email id</div>
            <input type="text"placeholder="youermail.com" />
            <div className="inputtype">Password</div>
            <input type="text"placeholder="pass@1234"/><br/>
            <button className="loginbutton" onClick={navigateToLogin}>Register</button>

        </div>


    
    
    
    
    
    
    
    </div>










);
}
export default Register;