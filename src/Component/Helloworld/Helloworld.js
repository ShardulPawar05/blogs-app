import { useState , useEffect} from "react";
import "./Helloworld.css"
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Helloworld() {

    // const[like, setlike]=useState(0);
    // const[dislike,setdislike]=useState(0);
    const [blogs, setBlogs] = useState([]);

    // function handlelike(){
    //     setlike(like+1 )
    // }
    // function handledislike(){
    //     setdislike(dislike+1);
    //     setlike(like-1);
    // }
    const handleLike = (id, currentLike) => {
    const updatedLike = currentLike + 1;
    axios
    .patch(`http://localhost:3001/blogs/${id}`, { like: updatedLike })
    .then(() => {
      getJsondata()
      
    })
    .catch(err => console.error("Failed to update like:", err));
};

const handleDislike = (id, currentDislike) => {
  const updatedDislike = currentDislike + 1;
  axios.patch(`http://localhost:3001/blogs/${id}`, { dislike: updatedDislike })
    .then(() => {
      getJsondata()
    })
    .catch(err => console.error("Failed to update dislike:", err));
};


    const navigate=useNavigate();
    const navigaToCreatePost=()=>{
    navigate("/blogs")
}
   
// creating function for get data after delting the blog on blog page to show on blog page


  const getJsondata = () => {
    axios
      .get("http://localhost:3001/blogs")
      .then((response) => {
        setBlogs( response.data); 
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };
// creating a function of useEffect because refresh the page after clicking of button
  
  useEffect(() => {
    getJsondata();
  }, []);

  // create the function for handle delete button for delete blog on blog page
   const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/blogs/${id}`)
      .then(() => {
        // ✅ Call the same function after deletion for getting 
        getJsondata();
      })
      .catch((err) => {
        console.error("Failed to delete blog:", err);
      });
  };

  // create function for editing the data of the blog;
    
   const handleEdit=(id)=>{
    navigate(`/blogs/${id}`)
   }



    return (
        <div className="bacgroundcolor">

            {/* header section start from here */}
            <div className=" headerArrangingSection">
                <div>Blogs</div>
                <div className="headerRightSectionArranging">
                    <div>Shardul pawar</div>
                    <button className="logoutbutton"><i className="fa-solid fa-right-from-bracket"></i>Logout</button>
                </div>

            </div>
            {/* Main description section strat from here */}

            <div className="allDescriptionSection">
                {/* first main section description */}
                <div className="firstdescription">
                    <div>Blogs</div>
                    <button className="buttocreatenewpost" onClick={navigaToCreatePost}><i className="fa-solid fa-circle-plus"></i>Create new post</button>
                </div>
                <div className="firstDescriptiontext">Publish your passion,your way</div>
                <hr />
                {/* second Description section */}
                {blogs.map((blog) => (
                    <div className="secondDescription" key={blog.id}>
                        <div className="title">{blog.title }</div>
                        <div><strong>Created By:</strong>{blog.Created_by}<i> </i></div>
                        <div><strong>Created AT:</strong><i>{blog.Created_At} </i></div>
                        <hr/>

                        <div className="passage">
                            {blog.description}
                            

                        </div>
                        <div className="buttonsfotter">
                            <div className="buttonArrangingleftSide">
                                <button className="likebutton"  onClick={() => handleLike(blog.id, blog.like || 0)}><i className="fa-solid fa-thumbs-up"></i> {blog.like || 0}</button>
                                <button className="dislikebutton"onClick={() => handleDislike(blog.id, blog.dislike || 0)} ><i className="fa-solid fa-thumbs-down"></i>{blog.dislike || 0}</button>
                            </div>


                            <div className="buttonarrange">
                                <button className="EditButton" onClick={() => handleEdit(blog.id)}>Edit<i className="fa-solid fa-file-pen"></i></button>
                                <button className="deletebutton" onClick={() => handleDelete(blog.id)} >Delete<i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>))}
              

            </div>

        </div>
    );
}
export default Helloworld;