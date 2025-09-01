
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import "./Dashboard.css"


function Dashboard(){

const navigate=useNavigate();
const navigateToLogin=()=>{
    navigate("/login")
}
const navigateToRegister=()=>{
    navigate("/register")
}



    return(
        <div className="bodydashboard">
             {/* header section start from here */}
        <div className=" headerArrangingsection">
            <div>Blogs</div>
            <div className="headerRightSectionArranging">
                <div onClick={navigateToLogin}> Login</div>
                <div onClick={navigateToRegister}>Register</div>
            </div>

        </div>

        {/*  dashboard section start from here */}
        <div className="dashBoardassection">
            <div className="blogsheader" >Blogs</div>
            <div className="headerdescription" >Publish your passion,your way....</div>
            <hr/>
            {/* button section in daashboard */}
            <div className="buttonsoffooter">
                <div>
                    <button className="buttonsloginRegister" onClick={navigateToLogin}>Login</button>
                </div>
                <div>
                    <button className="buttonsloginRegister" onClick={navigateToRegister}>Register</button>
                </div>


            </div>
        </div>
















        </div>
    );
}
export default Dashboard;