import {Routes,Route} from 'react-router-dom'
import Video from "./Video";
import Home from './Home';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/video" element={<Video/>}/>
    </Routes>
  )
}

export default MainRoutes