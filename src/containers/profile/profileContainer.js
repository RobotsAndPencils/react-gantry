import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {actionCreators as userActions} from '../../redux/user/userActions'
import styles from './profile-container.scss'
import Avatar from '../../components/avatar/avatar'
import Gear from '../../assets/svg/repairing-service.svg'
import gearSrc from '../../assets/svg/repairing-service.svg?external'

export class Profile extends React.Component {
  constructor (props) {
    super(props)
    // We need to bind 'this' because we're using it in the 'getProfileDetails' function with the understanding that our 'Profile' component is 'this'
    // This is the most performant way to bind 'this' in a react class without additional babel transforms.
    this.getProfileDetails = this.getProfileDetails.bind(this)
  }

  getProfileDetails () {
    // Without 'this' bound to Profile, we'd try to get this.props from whatever calls this function. Which would be "<button>" later down the road.
    this.props.randomName()
    this.props.getSkills()
  }

  componentWillMount () {
    this.getProfileDetails()
  }

  render () {
    return (
      <div className={styles.profile}>
        <figure className={styles.profileCard}>
          <figcaption>
            {this.props.name}
            <Gear className={styles.profileIcon} />
            <img src={gearSrc} className={styles.profileIcon} />
          </figcaption>
          <Avatar name={this.props.name} />
          <Avatar name={this.props.name} set={2} />
          <Avatar name={this.props.name} set={3} />
        </figure>
        <button onClick={this.getProfileDetails}>Give me a Name!</button>
        <h2>Skills</h2>
        {
          this.props.skills.map((skill) => {
            return skill.toUpperCase()
          }).join(', ')
        }
      </div>
    )
  }
}

Profile.defaultProps = {
  skills: [],
  name: ''
}

Profile.propTypes = {
  name: PropTypes.string,
  skills: PropTypes.array,
  actions: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  name: state.user.name,
  skills: state.user.skills
})

const mapDispatchToProps = { // This will automatically wrap each actionCreator in a dispatch because it is an object instead of a function.
  randomName: userActions.randomName,
  getSkills: userActions.getSkills
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
