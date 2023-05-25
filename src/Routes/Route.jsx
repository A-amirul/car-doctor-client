import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import SignUp from "../pages/Home/Home/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/Home/About/About";
import Blog from "../pages/Home/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: "/about",
				element:<About></About>
			},
			{
				path: "/contact",
				element:<Contact></Contact>
			},
			{
				path: "/blog",
				element:<Blog></Blog>
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>
			},
			{
				path: "/book/:id",
				element: <PrivateRoutes><BookService></BookService></PrivateRoutes>,
				loader: ({ params }) => fetch(`https://car-doctor-server-three-ashen.vercel.app/services/${params.id}`)
			},
			{
				path: 'bookings',
				element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
			}
		]
	},
]);

export default router; 