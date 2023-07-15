// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="app-heading">Alert Notifications</h1>
    <Notification className="item-container">
      <div className="item-container">
        <AiFillCheckCircle className="icon success-icon" />
        <div className="text">
          <h1 className="success-text">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
    <Notification className="item-container">
      <div className="item-container">
        <RiErrorWarningFill className="icon error-icon" />
        <div className="text">
          <h1 className="error-text">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
    <Notification className="item-container">
      <div className="item-container">
        <MdWarning className="icon warning-icon" />
        <div className="text">
          <h1 className="warning-text">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
    <Notification className="item-container">
      <div className="item-container">
        <MdInfo className="icon info-icon" />
        <div className="text">
          <h1 className="info-text">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  </div>
)
export default AlertNotifications
