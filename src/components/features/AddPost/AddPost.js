import styles from '../AddPost/AddPost.module.scss';
import { useDispatch } from "react-redux";
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";
import PostForm from '../PostForm/PostForm';

const AddPost = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleButton = post => {
      navigate('/');
      dispatch(addPost(post));
  };

  return <div className={styles.AddPost}>
    <PostForm action={handleButton} actionText='Add Post' />
    </div>
}

export default AddPost;