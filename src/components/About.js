import React from 'react';
const About = () => {
  return(
    <section id="about">
  <div className="row">
    <div>
      <img className="profile-pic" src="https://i.imgur.com/WddE3Wl.png" alt="" />
    </div>
    <div className="nine columns main-col">
      <p className="about_text">
      Depuis plus de 160 ans, The Wild Circus a toujours évolué avec son temps pour proposer des spectacles novateurs dans le respect de la tradition. 
      Une longévité exceptionnelle qui en a fait l’un des géants mondiaux du cirque.
      Acrobates, voltigeurs, clowns, magiciens, contorsionnistes,  cavalerie, forment une véritable troupe qui vous éblouira avec des performances spectaculaires.
      </p>
      <div className="row">
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>

  )
}
export default About;