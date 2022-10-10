import "./Home.css"
import Header from "../../Components/Header/Header";
import Frontpage from "../../Components/Frontpage/Frontpage";

const Home = () =>{
    return(
        <>
            <Header />
            <section className="section">
                <Frontpage/>
            </section>
        </>
    );
}

export default Home;