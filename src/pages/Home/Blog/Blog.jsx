
const Blog = () => {
	return (
		<div className='mx-5 my-5'>
			<div>
				<h3>props vs state</h3>
				<p> <strong>Props</strong>
					<li>Props are immutable</li>
					<li>Props make components reusable.</li>
					<li>Props allow you to pass data from one component to other components as an argument.</li>
					<li>React components use props to communicate with each other.</li>
					<li>Every parent component can pass some information to its child components by giving them props.</li>
					<li>We can pass any javaScript value through props, including objects, arrays and functions.</li>
					<li>Props can be accessed by the child component.</li>
				</p>
				<p>
					<strong>State</strong>
					<li>State is mutable.</li>
					<li>State holds information about the components.</li>
					<li>State cannot be accessed by child components.</li>
					<li>States can be used for rendering dynamic changes with the component.</li>
					<li>State cannot make components reusable.</li>
				</p>
			</div>
			<div>
				<h3>How does useState work?</h3>
				<p>useState is a hook that allows you to add state to a functional component. The useState hook returns an array with two elements: the current state value and a function to update that value.The first element is the initial state and the second one is a function that is used for updating the state. const [state, setState] = useState(initialState). We can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state.To use useState we need to import useState from react.</p>

			</div>

			<div>
				<h3>Purpose of useEffect other than fetching data</h3>
				<p>
					<li>useEffect can be used to update the title of the document based on the state of the component. This is useful for creating dynamic page titles.</li>
					<li>useEffect can be used to subscribe and unsubscribe to events such as window resize events or keyboard events. This is useful for creating interactive components that respond to user input.</li>
					<li>useEffect can be used to update a timer or clock component based on the passage of time.
					</li>
					<li>useEffect can be used to animate components by updating the state of the component at regular intervals.
					</li>
					<li> useEffect can be used to perform cleanup operations when a component unmounts. This is useful for cleaning up timers, event listeners, or other resources that were created during the lifecycle of the component.</li>
				</p>
			</div>

			<div>
				<h3>How does React work?</h3>
				<p>React is a popular JavaScript library for building user interfaces. It works by using a component-based approach to building UIs.Components are reusable building blocks.React components can have state, which is an object that holds data that can change over time. When the state of a component changes, React updates the components UI accordingly.React components can handle events such as button clicks, mouse movements, and keyboard inputs. When an event occurs, React updates the components state and re-renders the UI.When a components state changes, React updates the virtual DOM, calculates the difference between the new and old virtual DOM, and then updates the actual DOM with the changes.When a React component is rendered, it generates a tree of React elements. React elements are simple JavaScript objects that describe what should be displayed on the screen. React takes this tree of elements and converts it into a tree of actual DOM nodes that can be displayed in the browser.
				</p>
			</div>
		</div>
	);
};

export default Blog;