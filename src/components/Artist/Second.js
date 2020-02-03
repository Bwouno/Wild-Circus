import React from 'react';

class Second extends React.Component{
  render() {
    return(
        <div className="carousel-item" >
            <div className="box-left"></div>
            <div className="movie-image"><img  className="picture" src="http://cirquepinder.com/wp-content/uploads/2019/10/1.jpg"/></div>
            <div className="title-info">
                <h2>Loïc del Egido</h2>
                <h3>Diabolos</h3>
                <p className="overview">
                Loïc del Egido, formé à l’Escola de Circ Rogelio Rivel de Barcelone de 2006 à 2009 il se spécialise en diabolos.<br/> 
                Il intègre la Scuola di Circo Flic di Torino en 2009 et se perfectionne en diabolos et acrobatie au sol.<br/>
                Il travaille ensuite dans le célèbre cirque Suisse « Starlight » ou encore sur la Comédie Music-Hall « Quelle Histoire » produit par la Flambée.
                </p>
            </div>
        </div>
    )
  }
}

export default Second;