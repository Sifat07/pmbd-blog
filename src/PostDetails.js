import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="post-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { post && (
        <article>
          <h2>{ post.title }</h2>
          <div>{ post.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default PostDetails;