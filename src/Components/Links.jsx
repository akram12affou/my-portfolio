import React from "react";
import '../styles/Links.scss'
import FilePresentIcon from '@mui/icons-material/FilePresent';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Links() {
  return (
    <div className="links">
      <a class='linkedin' target="_blank" href="https://www.linkedin.com/in/akram-affou-872604221/">linkedin <LinkedInIcon/></a>
      <a class='github' target="_blank" href="https://github.com/akram12affou">github <GitHubIcon/></a>
      <a class='email'  >email <EmailIcon/></a>
      <a class='resume' href="">resume <FilePresentIcon/></a>
    </div>
  );
}

export default Links;
