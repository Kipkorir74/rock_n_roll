const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            { blogs.map((blog) => (
               
                <div className="blogPreview" key = {blog.id}>
                    <a href={`/blogs/${blog.id}`}> 
                    
                        <h2>{blog.title}</h2>
                        <p>Performed by {blog.artist}</p> 
                    </a>
                    
                </div>
            ))}
            
           
        </div>
     );
}
 
export default BlogList;