// Write you Code here

import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {
  state = {showAns: false}

  levelDifficulty = value => {
    switch (value) {
      case 'EASY':
        return 'easy'
      case 'MEDIUM':
        return 'medium'
      case 'HARD':
        return 'hard'
      default:
        return null
    }
  }

  languageClassName = value => {
    switch (value) {
      case 'HTML':
        return 'html'
      case 'CSS':
        return 'css'
      case 'JAVASCRIPT':
        return 'javascript'
      default:
        return null
    }
  }

  onShow = () => {
    this.setState(prevState => {
      const {showAns} = prevState
      return {showAns: !showAns}
    })
  }

  render() {
    const {questionData} = this.props
    const {questionText, answerText, language, difficultyLevel} = questionData
    const {showAns} = this.state

    const difficulty = this.levelDifficulty(difficultyLevel)

    const technology = this.languageClassName(language)

    const imageURl = showAns
      ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'

    const imageAlt = showAns ? 'up arrow' : 'down arrow'

    return (
      <div className="question-container">
        <div className="language-levels-container">
          <span className={difficulty}>{difficultyLevel}</span>
          <span className={technology}>{language}</span>
        </div>
        <h1 className="question">{questionText}</h1>
        <button type="button" onClick={this.onShow} className="btn">
          {showAns ? 'Hide' : 'Show'}
          <img src={imageURl} alt={imageAlt} className="arrow" />
        </button>
        {showAns && <p>{answerText}</p>}
      </div>
    )
  }
}

export default InterviewQuestion
