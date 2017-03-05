import React from 'react';


const Header = (passedProps) => {
    return (
        <div>
            <div>
                *Logo*
            </div>
            {`Hello, ${passedProps.userName}`}
        </div>
    );
};
    



export default Header;