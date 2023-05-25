
const Contact = () => {
	return (
		<section className=" py-40 bg-base-300">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Contact Us
					</h2>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						We would love to hear from you. Send us a message and we will get back to you as soon as possible.
					</p>
				</div>
				<div className="mt-12">
					<form>
						<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700">
									Name
								</label>
								<div className="mt-1">
									<input
										type="text"
										id="name"
										className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">
									Email
								</label>
								<div className="mt-1">
									<input
										type="email"
										id="email"
										className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className="block text-sm font-medium text-gray-700">
									Message
								</label>
								<div className="mt-1">
									<textarea
										id="message"
										rows="4"
										className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									></textarea>
								</div>
							</div>
							<div className="sm:col-span-2 text-center">
								<button className="btn bg-blue-500  md:w-3/4">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;