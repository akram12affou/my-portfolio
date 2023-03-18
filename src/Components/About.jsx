import React from "react";
import Links from "./Links";
import '../styles/About.scss'
import resume from '../images/resume.pdf'
import {motion} from 'framer-motion'
function About() {
  return (
    <motion.div className="about-container" 
    >
    <motion.div className="about"
    initial={{y:22 , opacity:0}}
    animate={{y: 0,opacity:1}}>
      <div>
      <h2>About me</h2>
      <p>   Hi, my name is Akram AFFOU. I'm a Front-end web developer with decent
      knowledge in other technologies in the field as well. For an in-depth
      insight into my skills and qualifications, I invite you to check out
      <a target='_blank' href={resume}  download> my Resume </a>.</p>
   
      
      </div>
      <div>
      <p>
      As I said before, my name is Akram. I'm a nineteen year old young man from
      Morocco. I first found out about this programming field last year and
      liked it so much, so I decided that is what I'm gonna do. After doing a
      ton of research on the internet, I did find that it's a large domain.
      After that, I picked web development because it's kind of holding the
      stick from the middle, and you can transact to related fields later. So I
      departed on this journey .
      </p>
      </div>
   
      <div>
      <p>
       I used a wide collection of resources in my
      learning, from <a href="https://www.freecodecamp.org/"> freeCodeCamp </a> and <a href="https://developer.mozilla.org/fr/"> MDN </a> to YouTube (I watched so many videos
      from these channels:<a href="https://www.youtube.com/@TraversyMedia"> Traversy media </a> ,<a href="https://www.youtube.com/@WebDevSimplified"> Web Dev Simplified </a> ,<a href="https://www.youtube.com/@Fireship"> Fireship </a>, and so
      many others).And solved so many algorithmic challenges over
      <a href="https://www.hackerrank.com/akramaffou"> HackerRank </a>, and build so many projects. I devoted all of my time and
      effort to this. It was a rough journey, full of hard
      times and bugs. But I didn't give up and I won't do. And here I'm, after
      several months of constant battle. That was a quick glimpse into my
      journey, hope you like it . 💙
      </p>
      </div>
    </motion.div>
    <Links />
    </motion.div>
  );
}

export default About;
