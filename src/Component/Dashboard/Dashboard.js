
import "./Dashboard.css"


function Dashboard(){






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

        {/*  dashboard section start from here */}
        <div className="dashBoardassection">
            <div className="blogsheader" >Blogs</div>
            <div className="headerdescription" >Publish your passion,your way</div>
            <hr/>
            {/* button section in daashboard */}
            <div className="buttonsoffooter">
                <div>
                    <button className="buttons">Login</button>
                </div>
                <div>
                    <button className="buttons">Register</button>
                </div>


            </div>
        </div>
















        </div>
    );
}
export default Dashboard;