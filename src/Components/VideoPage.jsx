import Button from "./Button.jsx";

export default function VideoPage(
    {
        bgColor = 'bg-white',
        textColor = 'text-black',
        headingOne = 'Heading One',
        headingTwo = 'Heading Two',
        buttonLabel = 'Learn More',
        scrollToHeader = '',
        buttonScrolls = false
    }
) {

    return (
        <div className={`flex relative w-screen min-h-screen ${bgColor}`}>
            <video preload={'/src/assets/bg-vid.mp4'} muted loop autoPlay={true}
                   className='object-cover w-screen opacity-20'>
                <source src="/src/assets/bg-vid.mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className={`absolute mx-auto flex flex-col w-full h-full my-64 items-center ${textColor} text-center`}>
                <h1 className='text-l'>{headingOne}</h1>
                <h2 className='my-2 mb-20 text-2xl'>{headingTwo}</h2>
                <Button props={{label: buttonLabel, scrollHeader: scrollToHeader, scroll: buttonScrolls}}/>
            </div>

        </div>
    )
}