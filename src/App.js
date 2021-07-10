import NavBar from './components/Navbar';
import NewsContainer from './components/NewsContainer';
import { Container } from 'semantic-ui-react';
import ContentLoader from './components/ContentLoader';
import './App.css';
import { useEffect, useState } from 'react';
import {getStoriesData} from './utils/APIRequests';

function App() {
  const [currentTab, setcurrentTab] = useState('top');
  const [storiesData, setstoriesData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const setSelectedTab = (tab) => {
    setcurrentTab(tab);
  }
  useEffect(() => {
    getStoriesData(currentTab).then( (data) => {
      setstoriesData(data);
      setisLoading(false);
      console.log(storiesData);
    });
  }, [currentTab]);

  return (
    <div className="App">
      <Container>
        <NavBar setTab={setSelectedTab}></NavBar>
        {isLoading ? <ContentLoader/> : <NewsContainer stories={storiesData}/>}
      </Container>
    </div>
  );
}

export default App;
