import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faLinkedin, faUser)

class Footer extends React.Component {
   
  render() {
    return (
      <div className="footer">
       <a href="https://linkedin.com">
         <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="footerLinks"/>
       </a>
       <a href="https://github.com/jasonweaver10">
         <FontAwesomeIcon icon={['fab', 'github']} className="socialIcons footerLinks" size="3x"/>     
       </a>
       <a href="https://jweaver.dev">
         <FontAwesomeIcon icon={'user'} size="3x" className="footerLinks"/>     
       </a>
       <p className="disclaimer">
         Photo by Jason Leung on Unsplash. 
         <br/>
         All other content is property of Jason Weaver unless otherwise specified.
       </p>
     </div>
    );
  }
}

export default Footer;
   
