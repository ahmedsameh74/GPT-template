import Shopify from '../../assets/shopify.png'
import dropbox from '../../assets/dropbox.png'
import google from '../../assets/google.png'
import atlassian from '../../assets/atlassian.png'
import slack from '../../assets/slack.png'

import './Logos.css'

const Logos = () => {
  return (
    <div className='logos section'>
        <img src={google} alt='' />
        <img src={slack} alt='' />
        <img src={atlassian} alt='' />
        <img src={dropbox} alt='' />
        <img src={Shopify} alt='' />
    </div>
  )
}

export default Logos