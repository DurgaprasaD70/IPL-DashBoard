import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatch: {},
    teamBanner: '',
    recentMatchesList: [],
    isRunning: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(` https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const {latest_match_details, recent_matches, team_banner_url} = data
    const latestMatchDetails = {
      competingTeam: latest_match_details.competing_team,
      competingTeamLogo: latest_match_details.competing_team_logo,
      date: latest_match_details.date,
      id: latest_match_details.id,
      manOfTheMatch: latest_match_details.man_of_the_match,
      result: latest_match_details.result,
      firstInnings: latest_match_details.first_innings,
      secondInnings: latest_match_details.second_innings,
      umpires: latest_match_details.umpires,
      venue: latest_match_details.venue,
    }
    const teamBannerUrl = team_banner_url
    const recentMatches = recent_matches.map(matchDetails => ({
      competingTeam: matchDetails.competing_team,
      competingTeamLogo: matchDetails.competing_team_logo,
      matchStatus: matchDetails.match_status,
      result: matchDetails.result,
      id: matchDetails.id,
    }))
    this.setState({
      latestMatch: latestMatchDetails,
      teamBanner: teamBannerUrl,
      recentMatchesList: recentMatches,
      isRunning: false,
    })
  }

  renderTeamMatchDetails = () => {
    const {latestMatch, teamBanner, recentMatchesList} = this.state
    return (
      <>
        <img src={teamBanner} alt="teamBanner" className="teamBanner" />
        <p className="latest-matches-heading">Latest Matches</p>
        <LatestMatch latestMatch={latestMatch} />
        <ul className="recent-matches-container">
          {recentMatchesList.map(eachMatch => (
            <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isRunning} = this.state
    return (
      <div className="team-container">
        {isRunning ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
