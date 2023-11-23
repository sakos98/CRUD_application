import styles from '../ListPost/ListPost.module.scss';
import AddPost from '../../features/AddPost/AddPost';

const ListPost = () => {
  return <div className={styles.ListPost}>
    <h1>Add Post</h1>
    <AddPost />
    </div>
}

export default ListPost;