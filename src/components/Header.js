import React from 'react';

const Header = () => {
  return(
    <header id="home">
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    <ul id="nav" className="nav">
      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
      <li><a className="smoothscroll" href="#about">À Propos</a></li>
      <li><a className="smoothscroll" href="#portfolio">Artist</a></li>
      <li><a className="smoothscroll" href="#contact">Contact</a></li>
    </ul> {/* end #nav */}
  </nav> {/* end #nav-wrap */}
  <div className="row banner">
    <div className="banner-text">
      <img className="responsive-headline" src="https://i.imgur.com/I2H9SFY.png" alt=""/>
      <hr />
    </div>
  </div>
  <p className="scrolldown">
    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
  </p>
</header>

  )
}

export default Header;