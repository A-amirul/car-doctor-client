import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import SignUp from "../pages/Home/Home/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element:<Home></Home>
			},
			{
				path: '/login',
				element:<Login></Login>
			},
			{
				path: '/signup',
				element:<SignUp></SignUp>
			},
			{
				path: "/book/:id",
				element: <BookService></BookService>,
				loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
			},
			{
				path: 'bookings',
				element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
			}
		]
	},
]);

export default router; 