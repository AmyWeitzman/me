import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import "./BlogPost.css";

function formatLink(title) {
    return title.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
}

function BlogPost(props) {
    return (
        <div className="blog-post box-shadow">
            <br></br>
            <Link to={'/blog/' + formatLink(props.title)} style={{textDecoration: 'none'}}>
                <h2 className="post-title">{props.title}</h2>
            </Link>
            <p className="post-text">{props.text}</p>
        </div>
    );
}
  
export default BlogPost;
