import {COMPANY_NAME} from '../consts/consts.js'
export default function Logo({small= false}) {

    const logo = ((small === true)) ? '/Logo-small.png' : '/Logo.png'

    return (
        <div className='w-6-rem h-6-rem'>
            <img className='w-full h-full' src={logo}  alt={`${COMPANY_NAME} logo`}/>
        </div>
    )
}