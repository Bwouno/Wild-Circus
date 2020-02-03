import React from 'react';

class First extends React.Component{
    render() {
        return(
            <div className="carousel-item" >
                <div className="box-left"></div>
                <div className="movie-image"><img  className="picture" src="http://cirquepinder.com/wp-content/uploads/2019/10/5.jpg"/></div>
                <div className="title-info">
                  <div className="title">
                    <h2>Duo Pasha & Morris</h2>
                    <h3>Les clowns</h3>
                  </div>
                    <p className="overview">
                    Personnages incontournables de la piste, attendus aussi bien des enfants que des parents.<br/>
                    Ils présentent des reprises tout au long du spectacle,<br/>
                    nous les retrouvons en fin de programme pour une entrée dans la plus grande tradition clownesque !
                    </p>
                </div>
            </div>
        )
    }
}

export default First;