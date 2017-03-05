import React from 'react';


const LandingPage = (passedProps) => {
    return (
        <div>
            <div onClick={() => (passedProps.setActivePage('PAGE_LOGIN'))}>
                Get started!
            </div>
        </div>
    );
};

export default LandingPage;