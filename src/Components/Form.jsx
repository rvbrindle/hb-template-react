import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

export default function Form({props}) {
    const fields = props.fields;

    // Helper function to handle input changes (if needed later)
    const handleInputChange = (e, fieldName) => {
        const value = e.target.value;
        // Update value (you would typically use state management here)
        console.log(`Field ${fieldName} updated with value: ${value}`);
    };

    return (
        <>
            <div className='flex flex-row items-center my-12 grid-cols-2 mx-24'>
                <Icon icon='phone-call' />
                <p className='text-2xl w-3/4'>
                    <a href='tel:0775668860'>07756688660</a>
                </p>
            </div>

            <form
                className='w-full mx-auto p-16 bg-white my-12 border-2 border-primary text-black flex flex-col md:my-3 gap-8 rounded'>
                {Object.entries(fields).map(([name, field]) => (
                    <div className='flex flex-col justify-between gap-4' key={name}>
                        <label
                            className='w-full'
                            htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                        <input
                            id={name}
                            type={field.input}
                            name={name}
                            value={field.value}
                            required={field.required}
                            onChange={(e) => handleInputChange(e, name)} // handle input changes
                            placeholder={`Enter your ${name}`}
                            className='p-2 border-l-4 border-secondary rounded'
                        />

                    </div>
                ))}
                <Button props={{
                    label: 'Send'
                }}/>
                <p className='text-center text-sm'>*All communication is strictly confidential and will not be
                    shared
                    with <strong>any</strong> 3rd party sources</p>

            </form>
        </>
    )
};
