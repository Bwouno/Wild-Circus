import React from 'react';

class Third extends React.Component{
  render() {
    return(
        <div className="carousel-item" >
            <div className="box-left"></div>
            <div className="movie-image"><img  className="picture" src="http://cirquepinder.com/wp-content/uploads/2019/10/4-1.jpg"/></div>
            <div className="title-info">
                <h2>Valentine</h2>
                <h3>Cerceau aérien</h3>
                <p className="overview">
                Après avoir séduit le public parisien avec ses numéros de contorsions et de tissus aérien,<br/>
                la charmante Valentine revient cette année pour le plus grand plaisir de tous avec un magnifique numéro de cerceau aérien.<br/>
                Un numéro alliant la grâce, la souplesse et bien évidemment le talent de cette jeune artiste.
                </p>
            </div>
        </div>
    )
  }
}

export default Third;