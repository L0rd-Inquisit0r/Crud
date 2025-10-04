import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Main from "./layout/Main";
import Nav from "./layout/Nav";
import Sidebar from "./layout/Side";

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
