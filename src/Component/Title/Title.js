import './Title.css';
function Title(){



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



            <div>< textarea className="textarea"placeholder='Title'></textarea></div>

            <hr/>
            <div><textarea  placeholder='Description'></textarea></div>
       
        <div className='buttons'>
            <div><button>Cancle</button></div>
            <div><button>Save</button></div>
        </div>

       </div>

    </div>
);
}
export default Title;