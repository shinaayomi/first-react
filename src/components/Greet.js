import React from 'react'

// function Greet() {
//     return <h1> View Shina </h1>
// }

// export const Greet = () => <h1>Hello Ayomi</h1>

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>This is Shinaayomi {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet