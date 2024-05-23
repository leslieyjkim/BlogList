//Each component to be able to stand on its own feet, having had information passed into it from above. 
//In the definition of the function,
//you have some expectations of what's gonna be passed into you. 
//the calling code has expectations of the function, and that the function should do its best to fulfill those expectations. (like contract)


const BlogSummary = (props) => {
    return (
        <div>
            <h1>BlogSummary</h1>
            { props.title } 
            {/* js should be in curly bracket */}
            { props.author }
            { props.date }
            <a href="http://example.com/path.html">{ props.url }</a>
        </div>
    );

};

export default BlogSummary;

