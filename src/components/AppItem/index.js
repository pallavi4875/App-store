// Write your code here
import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {appId, appName, imageURL} = AppDetails
  return (
    <>
      <li className="app-item-container">
        <img
          className="app-item-image"
          src={imageURL}
          alt={`app-item${appId}`}
        />
        <li className="app-item-details-container">
          <p className="app-item-title">{appName}</p>
        </li>
      </li>
    </>
  )
}

export default AppItem
