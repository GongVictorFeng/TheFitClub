import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import { language } from "../../data/language";
import './Create.css';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();
    const [selected,setSelected] =useState(0);
  
    const handleSubmit = (e) => {
        history.push('/');
    }

    const handleBack = () => {
        history.push('/');
      }
    return ( 
        <div className="container">

         {/* <img src={classOne} alt="dumbbell" /> */}
        <div className="create">
        <h2>{language[selected].header}</h2>
        <form onSubmit={handleSubmit}>
            <label>{language[selected].title}</label>
            <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <label>{language[selected].body}</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>{language[selected].author}</label>
            <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            >
            <option value={language[selected].option1}>{language[selected].option1}</option>
            <option value={language[selected].option2}>{language[selected].option2}</option>
            </select>
            <button>Add Blog</button> &nbsp;
            <button onClick={handleBack}>Back</button> &nbsp;
        </form>
        <br />
        <button onClick={()=>{
                selected===0? setSelected(1):setSelected(0);
            }}>Switch language </button>
        </div>
        </div>
     );
}
 
export default Create;