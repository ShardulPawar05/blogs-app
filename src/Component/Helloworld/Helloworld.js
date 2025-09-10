import { useState , useEffect} from "react";
import "./Helloworld.css"
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Helloworld() {

    const[like, setlike]=useState(0);
    const[dislike,setdislike]=useState(0);
    const [blogs, setBlogs] = useState([]);

    function handlelike(){
        setlike(like+1 )
    }
    function handledislike(){
        setdislike(dislike+1);
        setlike(like-1);
    }

    const navigate=useNavigate();
    const navigaToCreatePost=()=>{
    navigate("/blogs")
}
   
  // Filter out the blog with matching id
//  function handleDelete(id) {
//   axios.delete(`http://localhost:3001/blogs/${id}`)
//     .then((response) => {
    
//     })
//     .catch(error => {
//       console.error("Failed to delete blog:", error);
//     });
// }


  const getJsondata = () => {
    axios
      .get("http://localhost:3001/blogs")
      .then((response) => {
        setBlogs(response.data.blogs || response.data); 
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  
  useEffect(() => {
    getJsondata();
  }, []);

   handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/blogs/${id}`)
      .then(() => {
        // ✅ Call the same function after deletion
        getJsondata();
      })
      .catch((err) => {
        console.error("Failed to delete blog:", err);
      });
  };
    
    //  useEffect(() => {
    //     axios.get("http://localhost:3001/blogs")
    //         .then((response) => {
    //             setBlogs(response.data.blogs || response.data); // Adjust depending on API shape
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching blogs:", error);
    //         });
    // }, []);




    return (
        <div className="bacgroundcolor">

            {/* header section start from here */}
            <div className=" headerArrangingSection">
                <div>Blogs</div>
                <div className="headerRightSectionArranging">
                    <div>Shardul pawar</div>
                    <button className="logoutbutton"><i class="fa-solid fa-right-from-bracket"></i>Logout</button>
                </div>

            </div>
            {/* Main description section strat from here */}

            <div className="allDescriptionSection">
                {/* first main section description */}
                <div className="firstdescription">
                    <div>Blogs</div>
                    <button className="buttocreatenewpost" onClick={navigaToCreatePost}><i class="fa-solid fa-circle-plus"></i>Create new post</button>
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
                                <button className="likebutton" onClick={handlelike}><i class="fa-solid fa-thumbs-up"></i>{like}</button>
                                <button className="dislikebutton" onClick={handledislike} ><i class="fa-solid fa-thumbs-down"></i>{dislike}</button>
                            </div>


                            <div className="buttonarrange">
                                <button className="EditButton">Edit<i class="fa-solid fa-file-pen"></i></button>
                                <button className="deletebutton" onClick={() => handleDelete(blog.id)} >Delete<i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>))}
              

            </div>

        </div>
    );
}
export default Helloworld;