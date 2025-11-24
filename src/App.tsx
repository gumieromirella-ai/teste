import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

const App = () => {
	return (
		<>
			<Header />
			<div className="flex items-center justify-space-between space-x-5">
				<Sidebar />
				<div className="flex flex-col">
					<Home />
					{/* <Footer /> */}
				</div>
			</div>
		</>
	);
};

export default App;
