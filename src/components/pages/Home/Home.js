import Posts from '../../features/Posts/Posts';
import styles from '../Home/Home.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return <div className={styles.Home}>
    <div className={styles.positionHome}>
    <h1>All posts</h1>
    <Link to={`/post/add`}>
      <Button variant='btn btn-outline-info'>Add post</Button>
    </Link>
    </div>
    <Posts />
    </div>
}

export default Home;