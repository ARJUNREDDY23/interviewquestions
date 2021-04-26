// Write you Code here

import './index.css'

import {Component} from 'react'

import InterviewQuestion from '../InterviewQuestion'

import Filters from '../Filters'

class InterviewQuestionsApp extends Component {
  state = {level: 'ALL', language: 'ALL'}

  onChangeDifficultyLevel = value => {
    this.setState({level: value})
  }

  onChangeLanguage = value => {
    this.setState({language: value})
  }

  render() {
    const {levelsData, languageData, questionsData} = this.props
    const {level, language} = this.state
    const filteredLevelQuestion =
      level === 'ALL'
        ? questionsData
        : questionsData.filter(
            questionData => questionData.difficultyLevel === level,
          )

    const filteredQuestion =
      language === 'ALL'
        ? filteredLevelQuestion
        : filteredLevelQuestion.filter(
            questionData => questionData.language === language,
          )

    return (
      <div>
        <div className="sub-container">
          <h1 className="sub-container-heading">30 Seconds of Interviews</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            className="interview-image"
            alt="interview-avatar"
          />
        </div>
        <div className="questions-filters-container">
          <Filters
            levelsData={levelsData}
            languageData={languageData}
            onChangeLanguage={this.onChangeLanguage}
            onChangeDifficultyLevel={this.onChangeDifficultyLevel}
          />
          {filteredQuestion.map(questionData => (
            <InterviewQuestion
              questionData={questionData}
              key={questionData.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
