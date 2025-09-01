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



            <div>< input className="textareaoftitle"placeholder='Title'/></div>

            <hr/>
            <div><textarea  placeholder='Description'></textarea></div>
       
        <div className='buttonsoftitlefooter'>
            <div><button className='button'>Cancle</button></div>
            <div><button className='button'>Save</button></div>
        </div>

       </div>

    </div>
);
}
export default Title;