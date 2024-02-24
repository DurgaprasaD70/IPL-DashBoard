import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {id, name, teamImageUrl} = eachTeam
    return (
      <li className="team-card-container">
        <Link to={`/${id}`} className="active-link">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <h1 className="team-heading">{name}</h1>
        </Link>
      </li>
    )
  }
}

export default TeamCard
