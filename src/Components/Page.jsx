export default function Page({props}) {
    return (
        <div className='h-full w-full'>
            <div className='mx-auto container'>
                <h2 className='my-3'>{props.title}</h2>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolore fugiat officia perferendis sit
                sunt. Beatae consequatur explicabo nam sequi tempora? Accusantium dolorum eaque expedita libero, magnam
                minima provident veritatis.
            </p>
        </div>
    )
}