import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Welcome ShinaAyoMi {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome