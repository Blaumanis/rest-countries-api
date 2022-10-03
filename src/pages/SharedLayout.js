import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
const Home = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}
export default Home;
