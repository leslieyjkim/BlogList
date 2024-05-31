import './BlogList.css';
import BlogSummary from './BlogSummary';

import { useState } from 'react';

//Qustion: where should any given piece state live?
//If the state that we were building was counting clicks on a BlogSummary,
//then there is no reason for that particular piece of state to live nay higher,
//because none of that summary really needs to be listed anywhere up above it,
//which means it doesn't need to be shown in any parent component.
//But if that information needs to be managed, rendered, used or owned right by anything above it, 
//then we should push the state up and pass its value down as props. 
//But if you push everything all the way up to the very top level, that's no good.
//Because you're gonna end up passing that state down into everything anyway.

//And so the deal is, in general, that one should push a piece of state up as high as it needs to go,
//main component can render it and any of the children can render it.
//But the parent component of that component don't need to render it.
//So we shouldn't push the state up any higher,
//otherwise we end up with a 'prop drilling' mess everywhere 
//that would need to be debugged and can cause problems and makes the code more complex than it needs to be and so on. 

//So, we're gonna push our counter up to the 'BlogList', but not the 'App' level. not to make 'prop drilling'.

const BlogList = (props) => {

    const [clickCount, setClickCount] = useState(0); //Global counts

    return (<div className="blog_list">
        <h2>Museum List</h2>
        <p className="total_counts">{clickCount} liked in total</p>
        {
        // props.list.map(item => item)

        // Each 'callback' inside the props.list.map(), 
        // is going to return a BlogSummaryItem.
        // It encapsulates what a BlogList is gonna look like, 
        // it becomes in charge of how it's gonna render the BlogSummary. It is being handled here.
        props.list.map((item, index) => {
            return <BlogSummary setClickCount={setClickCount} key={index} author={item.author} title={item.title} date={item.date} url={item.url}/>;
        })
        } 
    </div>);
};

export default BlogList;