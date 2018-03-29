import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as userActions from '../../redux/user/userActions'
import styles from './profile-container.scss'
import Avatar from '../../components/avatar/avatar'
import Gear from '../../assets/svg/repairing-service.svg'
import gearSrc from '../../assets/svg/repairing-service.svg?external'

export class Profile extends React.Component {
  componentWillMount () {
    if (this.props.actions) {
      this.props.actions.randomName()
      this.props.actions.getSkills()
    }
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
        <button onClick={() => this.props.actions.randomName()}>Give me a Name!</button>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators({ ...userActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
