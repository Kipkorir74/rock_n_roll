import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [review, setReview]=useState('');
    const [artist, setArtist]=useState('Big Thief');
    const [isPending, setIsPending]= useState(false);
    const history = useHistory();
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        const blog = {title, review, artist};

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs/',{
            method:'POST',
            headers:{'content-type': "application/JSON"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('New Review Added');
            setIsPending(false);
            history.push('/');
        });
    }
    
    return ( 
        <div className="create">
            <h2>Add a new Review</h2>
            <form onSubmit = {handleSubmit}>
                <label>Album/Song Title:</label>
                <input type="text" required value= {title}
                onChange={ (e)=>{setTitle(e.target.value)}}/>

                <label>Review:</label>
                <textarea required value={review} onChange={(e)=>{setReview(e.target.value)}}/>

                <label>Artist/Band:</label>
                <select value= {artist}
                onChange={ (e)=>{setArtist(e.target.value)}}>
                    <option value="Lil Yachty">Lil Yachty</option>
                    <option value="Gunna">Gunna</option>
                    <option value="Young Thug">Young Thug</option>
                    <option value="Lil Durk">Lil Durk</option>
                </select>
                {!isPending && <button>Add Review</button>}
                {isPending && <button disabled>Adding Review...</button>}
                <p>{title}</p>
                <p>{review}</p>
                <p>{artist}</p>
            </form>
        </div>
     );
}
 
export default Create;
