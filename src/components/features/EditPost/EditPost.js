import styles from '../EditPost/EditPost.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from '../../../redux/postsRedux';
import PostForm from "../PostForm/PostForm";

const EditPost = () => {

  const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = post => {
        navigate('/');
        dispatch(editPost({ ...post, id }));
    };

    if (!postData) return <Navigate to='/' />
  return <div className={styles.EditPost}>
      <PostForm 
      actionText='Edit Post' 
      action={handleEdit} 
      author={postData.author} 
      publishedDate={postData.publishedDate} 
      category={postData.category}
      title={postData.title} 
      shortDescription={postData.shortDescription} 
      content={postData.content} />
    </div>
}

export default EditPost;