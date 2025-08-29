
import"./Register.css"
function Register(){





return(
    <div>

        {/* header section start from here */}
        <div className=" headerArranging section">
            <div>Blogs</div>
            <div className="headerRightSectionArranging">
                <div>Login</div>
                <div>Register</div>
            </div>

        </div>

        {/* register section start from here */}

          <div className="loginsection">
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
            <button className="loginbutton">Register</button>

        </div>


    
    
    
    
    
    
    
    </div>










);
}
export default Register;