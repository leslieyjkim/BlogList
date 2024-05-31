import './App.css'

import BlogSummary from './components/BlogSummary';
import BlogList from './components/BlogList';

import {useState} from 'react';

function App() {

  //'controlled input' : the checkbox is 'controlled input' for the 'conditional rendering'
  // The value of the checkbox is gonna correspond to some state that we have. 
  // And that state is gonna cause the re-rendering of our whole app when it changes. 
  // Because checkbox is gonna live at the top level.
  const [showList, setShowList] = useState(false); //boolean state
  const [user, setUser] = useState('Leslie Kim');

  //this is process section before displaying
  //form this data (object) and pass it down to the component of 'BlogList' 
  const listOfMuseums = [
    {author: 'Smithsonian National Museum of Natural History', date: '2024-05-31', url: 'https://naturalhistory.si.edu/'},
    {author: 'National Air and Space Museum', date: '2024-05-31', url: 'https://airandspace.si.edu/'},
    {author: 'Smithsonian American Art Museum', date: '2024-05-31', url: 'https://americanart.si.edu/'},
    {author: 'National Museum of African American History and Culture', date: '2024-05-31', url: 'https://nmaahc.si.edu/'},
    {author: 'National Gallery of Art', date: '2024-05-31', url: 'https://www.nga.gov/'},
    {author: 'United States Holocaust Memorial Museum', date: '2024-05-31', url: 'https://www.ushmm.org/'},
    {author: 'National Museum of American History', date: '2024-05-31', url: 'https://americanhistory.si.edu/'},
    {author: 'International Spy Museum', date: '2024-05-31', url: 'https://www.spymuseum.org/'},
    {author: 'Newseum (online)', date: '2024-05-31', url: 'https://www.newseum.org/'},
    {author: 'National Museum of the American Indian', date: '2024-05-31', url: 'https://americanindian.si.edu/'},
];



  return (
    <div>
      {/* <BlogSummary title="Lorem Ipsum Monkey Fuzz" author="Nally" date="2023-01-01" url="http://example.com/path.html"/> */}
      <h1>Museum Quest DC</h1>
      <p>
        <input 
          type="text"
          onChange={(event) => { setUser((prev) => {return event.target.value}) }} 
          value={user} 
        />
      </p>
      <p>Show The List: 
        <input 
          type="checkbox" 
          onChange={(event)=> {setShowList((prev) => !prev) }} 
        />
      </p>
      { showList && <BlogList list={listOfMuseums} /> } 
    </div>
  )
}

export default App; 
