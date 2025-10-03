import Header from "./sections/Header"
import Footer from "./sections/Footer"
import Main from "./sections/Main";
import Nav from "./sections/Nav";
import Sidebar from "./sections/Side";

function App() {

    return(
        <>
        <Header/>
        <div className="mainBody">
            <Nav/>
            <Main/>
            <Sidebar/>
        </div>
        <Footer/>
        </>
    );
}

export default App
