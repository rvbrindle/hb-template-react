import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import VideoPage from "./Components/VideoPage.jsx";

function App() {

    return (
        <>
            <div className='flex flex-col'>
                <NavBar
                    primary='green-500'
                    secondary='purple-500'
                    tertiary='blue-500'
                    items={[
                        'Home',
                        'About',
                        'Affiliates',
                        'Contact'
                    ]}
                />
                <VideoPage />
                <Footer/>
            </div>
        </>
    )
}

export default App
