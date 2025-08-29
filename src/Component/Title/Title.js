import './Title.css';
function Title(){



return(

    <div className='bacckgrondColor'>
        
        {/* header section start from here */}
        <div className=" headerArranging section">
            <div>Blogs</div>
            <div className="headerRightSectionArranging">
                <div>Login</div>
                <div>Register</div>
            </div>

        </div>
        {/* title section  */}
        <div className='titlesection'>



            < textarea className="textarea"placeholder='Title'></textarea>

            <hr/>
            <textarea rows={15} placeholder='Description'></textarea>
        </div>



    </div>
);
}
export default Title;