import { BrowserRouter, Route, Routes }from 'react-router-dom';
import AllMeetups from "./components/AllMeetups";
import Favorites from './components/Favorites';
import NewMeetup from './components/NewMeetup';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetups />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
