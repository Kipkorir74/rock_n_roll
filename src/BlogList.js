const BlogList = ({blogs, title, handleDelete}) => {
 

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blogPreview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Performed by {blog.artist}</p>
                    <button className="delete" onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
           
        </div>
     );
}
 
export default BlogList;