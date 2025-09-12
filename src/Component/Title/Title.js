import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Title.css';
import { useNavigate } from 'react-router-dom';
// import moment from 'moment';
function Title(){
const navigate=useNavigate();
const {id}=useParams();
const[userblog,setuserblog]=useState({title:"",description:""});
// create function for adding user whos create the blog
// console.log(localStorage.getItem('useremail'))

// useEffect((id)=>{
//   const locallike=localStorage.getItem('useremail')
//   console.log(locallike)
//   axios
//   .patch(`http://localhost:3001/blogs/${id}`,{created_by:locallike})
//   .then(() => {
    
//   })

// })



function handleSave() {
  const useremail=localStorage.getItem('useremail')
  if (id) {
    
    axios.put(`http://localhost:3001/blogs/${id}`, userblog)
      .then(() => {
        navigate("/title");
      })
      .catch(error => {
        console.error("Error updating blog:", error);
      });
  } else {
    // Create new blog using POST
    // created_by:useremail;
    axios.post('http://localhost:3001/blogs',
      { ...userblog,
      create_by:useremail})
      .then(() => {
 
        navigate("/title");
      })
      .catch(error => {
        console.error("Error creating blog:", error);
      });
  }
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

    useEffect(()=>{
        if (id){
            axios.get(`http://localhost:3001/blogs/${id}`)
            .then(Response => {
                setuserblog(Response.data);

            })
            .catch(error=>{
                        console.error("id not found");
                        

            });
 }
},[id] )
        
    

return(

    <div className='bacckgrondColor'>
        
        {/* header section start from here */}
        <div className=" headerArranging section">
            <div>Blogs</div>
            <div className="headerRightSectionArranging">
                <div>{localStorage.getItem('username')}</div>
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