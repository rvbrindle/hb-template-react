export default function Icon({icon, width = '1/5'}) {
    return (
        <div className={`w-${width} p-4 self-center border-tertiary rounded-full`}>
            <img src={`/src/assets/${icon}.png`} alt={`${icon} icon image`}/>
        </div>)
}