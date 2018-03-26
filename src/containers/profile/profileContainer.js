import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {actionCreators} from '../../redux/user'
import styles from './profile-container.scss'
import Avatar from '../../components/avatar/avatar'
import Gear from '../../assets/svg/repairing-service.svg'
import gearSrc from '../../assets/svg/repairing-service.svg?external'

export class Profile extends React.Component {
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
        <button onClick={this.props.randomName}>Give me a Name!</button>
      </div>
    )
  }
}

Profile.propTypes = {
  name: PropTypes.string,
  randomName: PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
  name: state.user.name
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  randomName: () => dispatch(actionCreators.randomName())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
