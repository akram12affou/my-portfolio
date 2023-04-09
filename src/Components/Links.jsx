import React from "react";
import '../styles/Links.scss'
import FilePresentIcon from '@mui/icons-material/FilePresent';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from '../images/resume.pdf'
import { useNavigate } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Links() {
  const navigate = useNavigate()
  const  toemail = () => {
    navigate('/contact')
  }
  return (
    <div className="links">
      <a class='linkedin' target="_blank" href="https://www.linkedin.com/in/akram-affou-872604221/">linkedin <LinkedInIcon style={{
        'transform' : 'scale(0.9)'
      }}/></a>
      <a class='github' target="_blank" href="https://github.com/akram12affou">github <GitHubIcon style={{
        'transform' : 'scale(0.9)'
      }}/></a>
      <a class='email'  onClick={toemail}>email <EmailIcon style={{
        'transform' : 'scale(0.9)'
      }}/></a>
      <a class='resume' target='_blank' href={resume} download>resume <FilePresentIcon style={{
        'transform' : 'scale(0.9)'
      }}/></a>
    </div>
  );
}

export default Links;
