import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className='min-h-[calc(100vh-300px)]'>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Main;