import './App.css'

import BlogSummary from './components/BlogSummary';
import BlogList from './components/BlogList';

import {useState} from 'react';

function App() {

  //this is process section before displaying
  const listOfBlogs = [
    {author: 'Dewey', title: 'Lawyers Make The Best Activists', date: '1999-01-01', url: 'http://example.com/lmtba.txt'},
    {author: 'Cheatem', title: 'Lawyers Make The Best Salaries', date: '1999-01-02', url: 'http://example.com/lmtbs.txt'},
    {author: 'How', title: 'Lawyers Make The Best Enemies', date: '1999-01-03', url: 'http://example.com/lmtbe.txt'},
  ];

  return (
    <div>
      {/* <BlogSummary title="Lorem Ipsum Monkey Fuzz" author="Nally" date="2023-01-01" url="http://example.com/path.html"/> */}
      <BlogList list={listOfBlogs} />
    </div>
  )
}

export default App; 
