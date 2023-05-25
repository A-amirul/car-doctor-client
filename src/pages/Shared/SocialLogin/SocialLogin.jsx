import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
	const { googleSignIn } = useContext(AuthContext);

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then(result => {
			console.log(result.user);
			})
		.catch(error=>console.log(error))
	}
	return (
		<div className="text-center">
			
			<div className="divider">OR</div>
			<div>
				<button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
					G
				</button>
			</div>
				
		</div>
	);
};

export default SocialLogin;