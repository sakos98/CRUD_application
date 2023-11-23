import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import styles from '../Posts/Posts.module.scss';
import { Link } from "react-router-dom";
import { dateToStr } from "../../../utils/dateToStr";

const Posts = () => {

  const posts = useSelector(getAllPosts);
  
  return (
    <div className={styles.positionCard}>
      {posts.map(post => (
        <div className={styles.card}>
        <div class="card-body">
        <div key={post.id}>
          <h3 className="card-title">{post.title}</h3>
          <span className={styles.spanAuthor}><p>{post.author}</p></span>
          <span className={styles.spanCategory}>
          <p>{post.category}</p>
          </span>
          <span 
            className={styles.spanPublished}>
            <p>{dateToStr(post.publishedDate)}</p>
          </span>
          <p dangerouslySetInnerHTML={{ __html: post.shortDescription }} />
          {/* <alt>{post.content}</alt> */}
          <Link key={post.id} to={`/post/${post.id}`} className="btn btn-primary">Read more</Link>
        </div>
        </div>
        </div>
      ))}
      
      </div>
  );
}

export default Posts;