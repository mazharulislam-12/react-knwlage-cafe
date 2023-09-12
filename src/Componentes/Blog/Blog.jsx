import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark}) => {
    const {title,cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-md' src= {cover} alt= {`cover picture of the title ${title}`} />

            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-14' src= {author_img} alt="" />
                    <div>
                        <h2 className='text-2xl mb-2'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min red</span>
                    <button onClick={handleAddToBookmark} className='ml-4 text-xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl mt-4 font-bold mb-2">{title}</h2>
        <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href=""># {hash} </a></span>)
            }
        </p>
        </div>
    );
};



Blog.PropTypes ={
    blog:PropTypes.object.isRequired
}

export default Blog;