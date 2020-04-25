import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faLinkedin, faUser)

class Footer extends React.Component {
    constructor (props) {
        super(props);
    }
    
  render() {
    return (
      <div className="footer">
       <a href="https://linkedin.com" target="_blank">
         <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" className="footerLinks"/>
       </a>
       <a href="https://github.com/jasonweaver10" target="_blank">
         <FontAwesomeIcon icon={['fab', 'github']} className="socialIcons footerLinks" size="3x"/>     
       </a>
       <a href="https://jweaver.dev" target="_blank">
         <FontAwesomeIcon icon={'user'} size="3x" className="footerLinks"/>     
       </a>
     </div>
    );
  }
}

export default Footer;
   
