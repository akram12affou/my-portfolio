import React from "react";
import '../styles/Links.scss'
import FilePresentIcon from '@mui/icons-material/FilePresent';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Links() {
  return (
    <div className="links">
      <a class='linkedin' href="">linkedin <LinkedInIcon/></a>
      <a class='github' href="">github <GitHubIcon/></a>
      <a class='email' href="">email <EmailIcon/></a>
      <a class='resume' href="">resume <FilePresentIcon/></a>
    </div>
  );
}

export default Links;
