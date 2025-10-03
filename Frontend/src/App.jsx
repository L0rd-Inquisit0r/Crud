import Header from "./sections/Header/Header"
import Footer from "./sections/Footer/Footer"
import Main from "./sections/Main/Main";
import Nav from "./sections/Nav/Nav";
import Sidebar from "./sections/Side/Side";

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
