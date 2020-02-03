import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

class MovieCarousel extends React.Component{
    render() {
        return(
          <section id="portfolio">
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={false} showStatus={false} interval={5000} transitionTime={700}>
                <First />
                <Second />
                <Third />
                <Fourth />
            </Carousel>
            </section>
        )
        
    }
}

export default MovieCarousel;