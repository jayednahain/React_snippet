import React from 'react';


function ManualComponenet() {
    
    const element_one = React.createElement(
        "div",
        {
            //component attribute
            id:"com_1",
            className:"container"
        },
        React.createElement(
            'h1',
            {
                className:'text-center'
            },
            "child One",
            React.createElement(
                'h2',
                {
                    className:'text-center'
                },
                "child two",
                React.createElement(
                    'h3',
                    {
                        className:'text-center'
                    },
                    "child three",
                    React.createElement(
                        'h4',
                        {
                            className:'text-center'
                        },
                        "child four",
                        
                    )
                    
                )

            )
        )

    )

    return ( 
        element_one
     );
}

export default ManualComponenet 