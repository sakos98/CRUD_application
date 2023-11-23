import { Navigate, useParams } from 'react-router-dom';
import styles from '../Post/Post.module.scss';
import { useSelector } from 'react-redux';
import { getPostById, removePost } from '../../../redux/postsRedux';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dateToStr } from '../../../utils/dateToStr';
const Post = props => {

  const { id } = useParams(); 
  const postData = useSelector(state => getPostById(state, id));

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const handleRemove = () => {
    dispatch(removePost(id));
    handleClose();
    }

  if (!postData) return <Navigate to="/" />;
  return <div className={styles.Post}>
    <h1>SinglePost</h1>
        <div className={styles.singlePostPosition}>
            <div className={styles.singlePost}>
                <div className='d-flex justify-content-between'>
                    <h2>{postData.title}</h2>
                    <div>
                        <Link key={props.id} to={'/post/edit/' + id}>
                            <Button variant='outline-info m-1'>Edit</Button>
                        </Link>
                            <Button onClick={handleShow} variant='btn btn-outline-danger'>Delete</Button>
                    </div>
                </div>
                <p>
                <b>Author: </b>{postData.author}<br/>
                <b>Published:</b>
                {dateToStr(postData.publishedDate)}
                </p>
                <div>
                <strong>Category: </strong>
                  {postData.category}
            </div> 
                <p dangerouslySetInnerHTML={{ __html: postData.content }} />
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Are you sure to delete this post?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="danger" onClick={handleRemove}>Remove</Button>
            </Modal.Footer>
        </Modal>
    </div>
   
    
}

export default Post;