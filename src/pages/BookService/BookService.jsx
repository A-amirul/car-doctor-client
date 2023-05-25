import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
	const service = useLoaderData();
	const { title, price, _id, img } = service;
	const { user } = useContext(AuthContext);

	const handleBookService = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const date = form.date.value;
		const email = user?.email;

		const booking = {
			customerName: name,
			email,
			img,
			date,
			service: title,
			service_id: _id,
			price: price

		}
		console.log(booking);
		fetch('https://car-doctor-server-three-ashen.vercel.app/bookings', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(booking)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					alert('service book successful');
				}
			})


	}

	return (
		<div>
			<h1 className="text-center text-3xl">Service: {title}</h1>

			<form onSubmit={handleBookService}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
					</div> 
					<div className="form-control">
						<label className="label">
							<span className="label-text">Date</span>
						</label>
						<input type="date" name="date" className="input input-bordered" />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Service cost</span>
						</label>
						<input type="text" defaultValue={'$' + price} className="input input-bordered" />
					</div>
				</div>
				<div className="form-control mt-6">
					<input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
				</div>
			</form>



		</div>
	);
};

export default BookService;