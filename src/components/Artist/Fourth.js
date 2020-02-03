import React from 'react';

class Fourth extends React.Component{
  render() {
    return(
        <div className="carousel-item" >
            <div className="box-left"></div>
            <div className="movie-image"><img  className="picture" src="https://www.lamontagne.fr/photoSRC/Gw--/guillaume-dottin-magicien_4584013.jpeg"/></div>
            <div className="title-info">
                <h2>Guillaume Dottin</h2>
                <h3>Grandes Illusions</h3>
                <p className="overview">
                C’est dans un univers onirique et mystérieux que Guillaume Dottin vous fera voyager.<br/> 
                Ses grandes illusions sont des créations uniques pour le cirque Pinder.<br/>  
                Un numéro surprenant à vous couper le souffle….<br/> 
                D’ailleurs arriverez vous à retenir votre souffle autant que notre illusionniste dans son aquarium…
                </p>
            </div>
        </div>
    )
  }
}

export default Fourth;