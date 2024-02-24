import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, matchStatus, result, id} = eachMatch
  const gameStatus = matchStatus === 'Won'
  const greenstatus = gameStatus ? 'greenstatus' : ''

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-recent-match-image"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result-text">{result}</p>
      <p className={`game-status ${greenstatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
