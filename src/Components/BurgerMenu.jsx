import {useEffect} from "react";

export default function BurgerMenu({props}) {

    // useEffect(()=>{
    //     animateBurger()
    //     props.handleChange()
    // },[props.menuIsOpen]);

    const logger = () => {
        console.log(props)
    }

    return (
        <>
            <div className='z-10 group md:hidden flex flex-col w-2/12 justify-center items-center relative cursor-pointer'>
                <div
                    id='burger-bar-1'
                    className='w-1/2 bg-white h-1 origin-center transition-all ease-in-out duration-500'></div>
                <div
                    id='burger-bar-2'
                    className='w-1/2 bg-white h-1 my-2 sm:my-4 transition-all ease-in duration-200'></div>
                <div
                    id='burger-bar-3'
                    className='w-1/2 bg-white h-1 origin-center transition-all ease-in-out duration-500'></div>
            </div>
        </>
    )
}