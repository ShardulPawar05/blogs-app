

import "./Login.css"


function Login(){








return(
    <div className="body">
        
        {/* header section start from here */}
        <div className=" headerArranging section">
            <div>Blogs</div>
            <div className="headerRightSectionArranging">
                <div>Login</div>
                <div>Register</div>
            </div>

        </div>
        {/* header section are complete */}

        {/* main blogs screen stat from here */}

        <div className="loginsection">
            {/* main body of the login section */}
            <div className="blogsheader">Blogs</div>
            <div className="headerdescription">Publish your passion in your way......</div>
            <hr/>
            <div className="loginsectiponLoginheader">Login</div>
            <div className="inputtype">Email id</div>
            <input type="text"placeholder="youermail.com" />
            <div className="inputtype">Password</div>
            <input type="text"placeholder="pass@1234"/><br/>
            <button className="loginbutton">Login</button>

        </div>
    </div>
);
}
export default Login;