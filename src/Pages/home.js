import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<>
			<section className="upperSection">
				<img
					className="headerBg"
					src={process.env.PUBLIC_URL + "./images/PicAndEditBG.jpg"}
					alt="PicAndEdit_headerBg"
				/>
				<div className="headerNote">
					<h2>Start creating new exciting image transformations!</h2>
					<h6>
						Say Toodles to expensive designers, poor-quality prints, and slow
						creative processes. With PicAndEdit, you can create new exciting
						image transformations, fantastic banner templates, customize it
						online, and print it on multiple social media platforms - no
						creative skills needed
					</h6>
				</div>
			</section>
			<section className="middleSection">
				<Button title="Start Creating!" />
			</section>
			<section className="lowerSection">
				<h6>Shall we start creating?</h6>
				<hr></hr>
				<div style={{ height: "1000px" }}></div>
			</section>
			<Footer />
		</>
	);
};

export default Home;
