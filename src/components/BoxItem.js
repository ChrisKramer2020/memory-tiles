import React, { Component } from 'react'
import styles from '../styles/BoxItem.scss'

const CARDBACK = 'https://tse1.mm.bing.net/th?&id=OIP.M928db661e30498198ea688b583a76d79o0&w=300&h=217&c=0&pid=1.9&rs=0&p=0&r=0'

class BoxItem extends Component {

  static propTypes = {
    image: React.PropTypes.string,
    isUp: React.PropTypes.bool,
    handleClick: React.PropTypes.func
  }

  render () {
    return <td
      className={styles.root}
      onClick={() => this.props.handleClick()}
      style={{ backgroundImage: `url(${this.props.isUp ? this.props.image : CARDBACK})` }} >&nbsp;</td>
  }
}

export default BoxItem
