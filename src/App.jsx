import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import ContentContainer from "./Components/ContentContainer.jsx";
import Page from "./Components/Page.jsx";

const navItems = [
    'Home',
    'About',
    'Contact'
]

const footerName = 'Stock Footer'

function App() {

    return (
        <>
            <div className='flex flex-col h-screen'>
                <NavBar items={navItems}/>
                <Page props={{ title : 'Page 1'}}/>
                {/*<ContentContainer />*/}
                <Footer/>
            </div>
        </>
    )
}

export default App
