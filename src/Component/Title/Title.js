import axios from 'axios';
import { useState } from 'react';
import './Title.css';
import { useNavigate } from 'react-router-dom';
// import moment from 'moment';
function Title(){
const navigate=useNavigate();
const[userblog,setuserblog]=useState({title:"",description:""});

// function to handle save buutoon to save dATA INTO Json file
// function clockmoment(){
//     const[currentTime,setcuurrentTime]=useState((moment))

// }
function handleSave(){
    console.log(userblog)
    axios.post('http://localhost:3001/blogs',userblog)
    navigate("/title")

}

function handleTitle(event){
    let user={...userblog};
    user["title"]=event.target.value;
    setuserblog(user);
}
function handleDescription(event){
    let user={...userblog};
    user["description"]=event.target.value;
    setuserblog(user);
}

return(

    <div className='bacckgrondColor'>
        
        {/* header section start from here */}
        <div className=" headerArranging section">
            <div>Blogs</div>
            <div className="headerRightSectionArranging">
                <div>ShardulPawar</div>
                <div><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</div>
            </div>

        </div>
        {/* title section  */}
        <div className='titlesection'>



            <div>< input className="textareaoftitle"placeholder='Title' value={userblog.title} onChange={handleTitle}/></div>

            <hr/>
            <div><textarea  placeholder='Description' value={userblog.description} onChange={handleDescription}></textarea></div>
       
        <div className='buttonsoftitlefooter'>
            <div><button className='button'>Cancle</button></div>
            <div><button className='button' onClick={handleSave}>Save</button></div>
        </div>

       </div>

    </div>
);
}
export default Title;