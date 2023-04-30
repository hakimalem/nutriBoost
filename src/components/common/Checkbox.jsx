import { useState } from 'react';

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="inline-flex items-center">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-500 border-gray-300 rounded-none"
                checked={isChecked}
                onChange={handleOnChange}
            />
        </label>
    );
}

export default Checkbox;