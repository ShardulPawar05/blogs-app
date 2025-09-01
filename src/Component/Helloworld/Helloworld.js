import { useState } from "react";
import "./Helloworld.css"
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";
function Helloworld() {

    const[like, setlike]=useState(0);
    const[dislike,setdislike]=useState(0);


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

    // const[description,setdescription]=useState();
    const blogsInfo = [
        {
            Title: "Hello world",
            Created_by: "shardul pawar",
            Created_At: "29 Aug 2025",
            Description: "Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without<br/> hello ecryone im exited to introduce  Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without<br/> hello ecryone im exited to introduceMedium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without<br/> hello ecryone im exited to introduceMedium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without<br/> hello ecryone im exited to introduceMedium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without<br/> hello ecryone im exited to introduceMedium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without<br/> hello ecryone im exited to introduce"
        }
    ]


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
                {blogsInfo.map((single) => (
                    <div className="secondDescription">
                        <div className="title">{single.Title}</div>
                        <div><strong>Created By:</strong><i>  {single.Created_by}</i></div>
                        <div><strong>Created AT:</strong><i>  {single.Created_At}</i></div>
                        <hr/>

                        <div className="passage">
                            {single.Description}

                        </div>
                        <div className="buttonsfotter">
                            <div className="buttonArrangingleftSide">
                                <button className="likebutton" onClick={handlelike}><i class="fa-solid fa-thumbs-up"></i>{like}</button>
                                <button className="dislikebutton" onClick={handledislike} ><i class="fa-solid fa-thumbs-down"></i>{dislike}</button>
                            </div>


                            <div className="buttonarrange">
                                <button className="EditButton">Edit<i class="fa-solid fa-file-pen"></i></button>
                                <button className="deletebutton">Delete<i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>))}
                {/* third  Description section  */}
                {/* <div className="secondDescription">
                <div>Hello World</div>
            <div><strong>Created By</strong><i>  shardulpawar@gmail.com</i></div>
            <div><strong>Created at</strong><i>  29<sup>th</sup>Aug, 2025</i></div>
            <hr/>
            <div className="passage">my text start from here and end Medium is a home for human stories and ideas. Here,
                 anyone can share knowledge and wisdom with the world—without having to build a mailing list or
                  a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple,
                  beautifull collaborative, and helps you find the right readers for whatever you have to say. </div>
            </div> */}

            </div>
            {/* <div>{descript</div> */}
        </div>
    );
}
export default Helloworld;