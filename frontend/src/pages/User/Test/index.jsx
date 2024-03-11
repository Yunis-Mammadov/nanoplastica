import React, { useState } from 'react';

const Test = () => {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick() {
        setIsVisible(true);
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            {isVisible && (
                <div>
                    hello
                </div>
            )}
        </div>
    );
}

export default Test;
