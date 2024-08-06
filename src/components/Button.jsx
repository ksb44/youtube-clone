import React from 'react';
function Button({text}) {
    return (
        <div>
            <button className='bg-gray-200 w-[120px] p-2 rounded-2xl '>{text}</button>
        </div>
    )
}
export default Button;