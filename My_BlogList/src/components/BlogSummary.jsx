//Each component to be able to stand on its own feet, having had information passed into it from above. 
//In the definition of the function,
//you have some expectations of what's gonna be passed into you. 
//the calling code has expectations of the function, and that the function should do its best to fulfill those expectations. (like contract)

import './BlogSummary.css';

import {useState} from 'react';

const BlogSummary = (props) => {
    const [localCount, setLocalCount] = useState(0);

    const clickHandler = () => { //one clickHandler has 2 different things, counts all at once. 1 clicked -> 2 counts each one for total/ the other for local.
        props.setClickCount((prev) => prev + 1); //Global setter for the total.
        setLocalCount((prev) => prev + 1); //Local setter for the each card. Pass in a callback, then takes (prev). This 'prev'is different prev with above line.
    };

    return (
        <div className="blog_summary">
            <h2>{ props.title }</h2>
            <p className="LocalClickedCount">{localCount} liked </p>
            <p>By { props.author }</p>
            <p>Date: { props.date }</p>
            <a href={ props.url }>Click & Explore this Museum</a>
            <button className="ClickedButton" onClick={clickHandler}>like</button>
        </div>);
};

export default BlogSummary;

