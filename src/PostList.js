import { Link } from 'react-router-dom';


 const PostList = ({ posts }) => {
   
   return (
     <div className="post-list">
       {posts.map(post => (
         <div className="post-preview" key={post.userId} >
           <Link to={`/posts/${post.userId}`}>
             <h2>{ post.title }</h2>
             <h3>Written by { post.userId }</h3>
             <p> { post.body }</p>
           </Link>
         </div>
       ))}
     </div>
   );
 }
 
export default PostList;


