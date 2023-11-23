import styles from '../PostForm/PostForm.module.scss';
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategory } from '../../../redux/categoryRedux';

const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [category, setCategory] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [shortDescriptionError, setShortDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const categories = useSelector(getAllCategory);


  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    setShortDescriptionError(!shortDescription)
    setCategoryError(!category);
    if(content && publishedDate && category) {
      action({ title, author, publishedDate, category, shortDescription, content });
    }
  };

  return <div className={styles.AddPost}>
  <Form>
  <Form.Group className="mb-3" controlId="TitleInput">
    <Form.Label>Title</Form.Label>
    <Form.Control
      {...register("title", { required: true, minLength: 3 })}
      value={title}
      onChange={e => setTitle(e.target.value)}
      type="text" placeholder="Enter title"
    />
      {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
</Form.Group>
   <br />
   <Form.Group className="mb-3" controlId="AuthorInput">
     <Form.Label>Author</Form.Label>
     <Form.Control
     {...register("author", { required: true, minLength: 3 })} 
     type="text" 
     placeholder="Enter Author" 
     value={author} 
     onChange={e => setAuthor(e.target.value)}/>
     {errors.title && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
   </Form.Group>
   <br />
   <Form.Group className="mb-3" controlId="DatePublishedInput">
     <Form.Label>Date published</Form.Label>
     <br />
     <ReactDatePicker 
     dateFormat="dd-MM-yyy" 
     selected={publishedDate} 
     onChange={(date) => setPublishedDate(date)} />
     {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
   </Form.Group>
   <br />

   <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select
            className='mb-3 w-50'
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>


   <Form.Group className="mb-3" controlId="shortDescription">
   <Form.Label>Short description</Form.Label>
   <ReactQuill
     placeholder="Leave comment here"
     rows={4}
     value={shortDescription} 
     onChange={setShortDescription}
   />
   {shortDescriptionError && <small className="d-block form-text text-danger mt-2">Short description can't be empty</small>}
 </Form.Group>
 <br />
 <Form.Group controlId="mainContent">
   <Form.Label>Main content</Form.Label>
   <ReactQuill
     placeholder="Leave comment here"
     rows={8}
     value={content} 
     onChange={setContent}
   />
   {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
   <br />
 </Form.Group>
 <Button onClick={validate(handleSubmit)} variant='primary' type='submit'>{actionText}</Button>
 </Form>
</div>
}

export default PostForm;