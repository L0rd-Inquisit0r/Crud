import Header from "./sections/Header/Header"
import Footer from "./sections/Footer/Footer"
import Main from "./sections/Main/Main";
import Nav from "./sections/Nav/Nav";
import Sidebar from "./sections/Side/Side";

function App() {

    return(
        <>
        <div id="flex-container">
            <Header/>
            <Nav/>
            <Main/>
            <Sidebar/>
            <Footer/>
        </div>
        </>
    );
}

export default App
