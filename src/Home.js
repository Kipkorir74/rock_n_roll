import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title:"Ants From Up There ", review:"Black Country, New Road’s second album finds the seven-piece ensemble subtly evolving their experimental post-punk in a way that suggests they are starting to take themselves more seriously.",
        artist: "Black Country, New Road ", id:"1" },
        { title:"Skinty Fia", review:"A magnificent third album which serves as the crowning point of a career that is, excitingly, still in its infancy.",
        artist:"Fontaines D.C.",id:"2"},
        { title:"Dragon New Warm Mountain I Believe in You", review:"An abundance of styles gives the potential for a new favourite song every time you listen to this rich album.",
        artist:"Big Thief", id:"3"}
    ]);
    
        const handleDelete= (id) => {
          const newBlogs = blogs.filter() 
        } 
    
    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title="All Bangers 2022" handleDelete= {handleDelete}/>
            <BlogList blogs = {blogs.filter((blog)=>blog.artist =="Fontaines D.C.")} title="The All time Goats"/>
        </div>
     );
}

 
export default Home;