

import { useNavigate } from "react-router-dom";
import "./Login.css"


function Login(){

const navigate=useNavigate();
const navigateToLogin=()=>{
    navigate("/login")
}
const navigateToRegister=()=>{
    navigate("/register")
}
const navigateToDashboard=()=>{
    navigate("/")

}
const navigateToHelloworld=()=>{
    navigate("/title")
    
}






return(
    <div className="body">
        
        {/* header section start from here */}
        <div className=" headerArrangingsection">
            <div onClick={navigateToDashboard}>Blogs</div>
            <div className="headerRightSectionArranging">
                <div onClick={navigateToLogin}>Login</div>
                <div onClick={navigateToRegister}>Register</div>
            </div>

        </div>
        {/* header section are complete */}

        {/* main blogs screen stat from here */}

        <div className="loginsection">
            {/* main body of the login section */}
            <div className="blogsheader">Blogs</div>
            <div className="headerdescription">Publish your passion in your way......</div>
            <hr/>
            <div className="loginsectiponLoginheader" >Login</div>
            <div className="inputtype">Email id</div>
            <input type="text"placeholder="youermail.com" />
            <div className="inputtype">Password</div>
            <input type="text"placeholder="pass@1234"/><br/>
            <button className="loginbutton"onClick={navigateToHelloworld} >Login</button>

        </div>
    </div>
);
}
export default Login;