// import logo from './logo.svg';

/**
 * Components
 * 
 * reading json
 * photo componet
 * photo feed
 * Search
 * 
 ****************************
 * Buttons
 * 
 * submit
 * home
 ****************************
 * App
 * 
 * Feed view (home)
 *    * mouse move -> set state to <Search>
 * Search view this should probably be an overaly not a view
 *    * searchbar 
 *    * submit -> set state to <Result>
 * Result view
 *    * Home button -> set state to <Feed>
 */

import './App.css';
import { Feed }  from './views/Feed'




function App() {

  return (
    <div className="App">
      <header className="App-header">

        
        <h1 style={{paddingLeft:"5%", color:"a35709",fontFamily: "Playfair Display"}}>This is my thing</h1>
     
      </header>
      <body>
      <Feed/>
      </body>
    </div>
  );
}

export default App;

        /* <img src={logo} className="App-logo" alt="logo" /> */
        /* <h1>{photoFeed.items[0].title}</h1> */