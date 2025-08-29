import "./Helloworld.css"
function Helloworld(){


return(
    <div className="bacgroundcolor">

         {/* header section start from here */}
        <div className=" headerArranging section">
            <div>Blogs</div>
            <div className="headerRightSectionArranging">
                <div>Shardul pawar</div>
                <div>Logout</div>
            </div>

        </div>
        {/* Main description section strat from here */}

        <div className="allDescriptionSection">
            {/* first main section description */}
            <div className="firstdescription">
                <div>Blogs</div>
                <button>Create new post</button>
            </div>
            <div className="firstDescriptiontext">Publish your passion,your way</div>
            <hr/>
            {/* second Description section */}
            <div className="secondDescription">
            <div>Hello World</div>
            <div><strong>Created By</strong><i>  shardulpawar@gmail.com</i></div>
            <div><strong>Created at</strong><i>  29<sup>th</sup>Aug, 2025</i></div>
            <hr/>
            <div className="passage">my text start from here and end Medium is a home for human stories and ideas. Here, anyone can share 
                knowledge and wisdom with the world—without having to build a mailing list or a following first. The 
                internet is noisy and chaotic; Medium is quiet yet full of insight.
                 It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.
                 Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the 
                 world—without having to build a mailing list or a following first. The internet is noisy and chaotic; 
                 Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right
                  readers for whatever you have to say.
                  Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom
                   with the world—without having to build a mailing list or a following first. The internet is noisy and 
                   chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find 
                   the right readers for whatever you have to say. </div>
            <div className="buttonarrange">
                <button>like</button>
                <button>Dislike</button>
            </div>
            </div>
            {/* third  Description section  */}
            <div className="secondDescription">
                <div>Hello World</div>
            <div><strong>Created By</strong><i>  shardulpawar@gmail.com</i></div>
            <div><strong>Created at</strong><i>  29<sup>th</sup>Aug, 2025</i></div>
            <hr/>
            <div className="passage">my text start from here and end Medium is a home for human stories and ideas. Here,
                 anyone can share knowledge and wisdom with the world—without having to build a mailing list or
                  a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple,
                  beautifull collaborative, and helps you find the right readers for whatever you have to say. </div>
            </div>

        </div>
    </div>
);
}
export default Helloworld;