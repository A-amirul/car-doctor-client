import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import SignUp from "../pages/Home/Home/SignUp/SignUp";

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
			}
		]
	},
]);

export default router; 