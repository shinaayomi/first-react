import React from 'react'

const Hello = () => {
    // return (
    //     <div className='shinaClass'>
    //         <h1>Give me way</h1>
    //     </div>        
    // )

    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement('h1', null, 'View my Site')
    // )

    return React.createElement(
        'div',
        { id: 'hello', className: 'shinaClass' },
        React.createElement('h1', null, 'View my Site for great')
    )
}

export default Hello