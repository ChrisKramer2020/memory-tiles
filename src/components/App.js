import React, { Component } from 'react'
import images from '../images.json'
//  import BoxItem from './BoxItem'

class App extends Component {

  choose (card) {
    console.log('hello', card)
    this.setState({
      picks: [...this.state.picks, card]
    }, () => {
      if (this.state.picks.length === 2) {return} {
        this.check()
      }
    })
  }

  check () {
    const picks = this.state.picks
    if (images[picks[0]] === images[picks[1]]) {
      this.setState({
        matches: [...this.state.matched, ...picks]
      })
    }

    console.log('CHECK')
    setTimeout(() => {
      this.setState({ picks: [] })
    }, 3000)
  }

  constructor () {
    super()
    this.state = {
      first: false
      picks: []
      matched: []
    }
  }

  render () {
    // const items = leaf.
    return <div>
      <h1>Y u No SEizure?</h1>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js' />
      <table>
        <tr id='first'>
          <Card value={images[0]} first={false} handleClick={() => this.choose(0)} />
          <Card value={images[1]} first={false} handleClick={() => this.choose(1)} />
          <Card value={3} />
          <Card value={4} />
          <Card value={5} />
        </tr>
        <tr id='second'>
          <Card value={6} />
          <Card value={7} />
          <Card value={8} />
          <Card value={9} />
          <Card value={10} />
        </tr>
        <tr id='third'>
          <Card value={11} />
          <Card value={12} />
          <Card value={13} />
          <Card value={14} />
          <Card value={15} />
        </tr>
        <tr id='fourth'>
          <Card value={16} />
          <Card value={17} />
          <Card value={18} />
          <Card value={19} />
          <Card value={20} />
        </tr>
      </table>
    </div>
  }
}

//  const images = [
//    'https://openclipart.org/image/2400px/svg_to_png/249501/1464244342.png'
//    'https://openclipart.org/image/2400px/svg_to_png/249501/1464244342.png'
// ]

class Card extends Component {

  clickChangeImgSrc (card) {
    console.log('You clicked me', card)
  }


  render () {
    // const first = this.state.first
    // onClick={() => this.props.handleClick()}
    return <td onClick={e => this.clickChangeImgSrc(this.props.value)}>
      {/* <img src={this.props.value} /> */}
    </td>
  }
}

export default App
