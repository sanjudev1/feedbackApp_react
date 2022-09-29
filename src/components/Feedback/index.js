// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onFeedback = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        {isClicked && (
          <div className="container">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
        {!isClicked && (
          <div className="container">
            <h1>How satisfied are you with our customer support performance</h1>
            <ul className="container1">
              {emojis.map(each => (
                <li key={each.id}>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onFeedback}
                  >
                    <img src={each.imageUrl} alt={each.name} className="img" />
                  </button>
                  <p>{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
