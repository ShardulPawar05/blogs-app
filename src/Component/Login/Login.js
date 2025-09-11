

import { useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
import axios from "axios";


function Login() {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login")
    }
    const navigateToRegister = () => {
        navigate("/register")
    }
    const navigateToDashboard = () => {
        navigate("/")

    }

    const [userdata, setuserdata] = useState({ email: "", password: "" })
    function handleLogin() {
        axios
            .get("http://localhost:3001/user")
            .then((response) => {
                const users = response.data;
                //  console.log(users)
                users.map((singleUser) => {
                    
                    console.log('userdata: ', userdata);
                    console.log('singleUser.email_id === userdata.email: ', singleUser.email_id === userdata.email);
                    console.log('singleUser.password === userdata.password: ', singleUser.password === userdata.password);

                    
                    if (singleUser.email_id === userdata.email && singleUser.password === userdata.password) {
                        alert("login succsefull")
                        navigate("/title")
                    }
                    else {
                        // ("Invalid email or password");

                    }
                })

            });


    }

    function handleuseremail(event) {
        let user = { ...userdata };
        user["email"] = event.target.value
        setuserdata(user)
    }
    function handleUserPAss(event) {
        let user = { ...userdata };
        user["password"] = event.target.value
        setuserdata(user)
    }



    return (
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
                <hr />
                <div className="loginsectiponLoginheaderLogin" >Login</div>
                <div className="inputtype" >Email id</div>
                <input type="text" placeholder="youermail.com" value={userdata.email} onChange={handleuseremail} className="logininput" />
                <div className="inputtype"  >Password</div>
                <input type="password" placeholder="pass@1234" value={userdata.password} onChange={handleUserPAss} className="logininput" /><br />
                <button className="loginbuttons" onClick={handleLogin}  >Login</button>

            </div>
        </div>
    );
}
export default Login;