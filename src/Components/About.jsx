import React from "react";
import Links from "./Links";
import '../styles/About.scss'
function About() {
  return (
    <div className="about-container">
    <div className="about">
      <div>
      <h2>About me</h2>
      <p>   Hi, my name is Akram AFFOU. I'm a Front-end web developer with decent
      knowledge in other technologies in the field as well. For an in-depth
      insight into my skills and qualifications, I invite you to check out
      <a href=""> my Resume </a>.</p>
   
      
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
      learning, from <a href=""> freeCodeCamp </a> and <a href=""> MDN </a> to YouTube (I watched so many videos
      from these channels:<a href=""> Traversy media </a> ,<a href=""> Web Dev Simplified </a> ,<a href=""> Fireship </a>, and so
      many others).And solved so many algorithmic challenges over
      <a href=""> HackerRank </a>, and build so many projects. I devoted all of my time and
      effort to this. It was a rough journey, full of hard
      times and bugs. But I didn't give up and I won't do. And here I'm, after
      several months of constant battle. That was a quick glimpse into my
      journey, hope you like it . 💙
      </p>
      </div>
    </div>
    <Links />
    </div>
  );
}

export default About;
