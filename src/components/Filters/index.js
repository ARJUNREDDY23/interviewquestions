// Write you Code here

import './index.css'

const Filters = props => {
  const {onChangeDifficultyLevel, onChangeLanguage} = props

  const difficultyChange = event => {
    onChangeDifficultyLevel(event.target.value)
  }

  const languageChange = event => {
    onChangeLanguage(event.target.value)
  }

  const renderLevels = () => {
    const {levelsData} = props
    return (
      <select onChange={difficultyChange}>
        {levelsData.map(eachItem => (
          <option value={eachItem.level} key={eachItem.id}>
            {eachItem.level}
          </option>
        ))}
      </select>
    )
  }

  const renderLanguages = () => {
    const {languageData} = props
    return (
      <select onChange={languageChange}>
        {languageData.map(eachItem => (
          <option value={eachItem.language} key={eachItem.id}>
            {eachItem.language}
          </option>
        ))}
      </select>
    )
  }
  return (
    <div className="filters-container">
      {renderLevels()}
      {renderLanguages()}
    </div>
  )
}

export default Filters
