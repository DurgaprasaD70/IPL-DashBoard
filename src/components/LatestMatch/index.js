import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    id,
    manOfTheMatch,
    result,
    firstInnings,
    secondInnings,
    umpires,
    venue,
  } = latestMatch
  return (
    <div className="latest-match-container">
      <div className="venure-date-container">
        <h1>{competingTeam}</h1>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="image-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingteam-logo"
        />
      </div>
      <div className="match-innings-container">
        <p className="sub-headings">First Innings</p>
        <p>{firstInnings}</p>
        <p className="sub-headings">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="sub-headings">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="sub-headings">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
