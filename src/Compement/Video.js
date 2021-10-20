import React from 'react';
import { Carousel } from 'react-bootstrap';

const Video = (props) => {
    return (
        <div>
                {props.video.key}
                <iframe src={"https://www.youtube.com/embed/"+props.video.key}/>
                <Carousel.Caption>
                    <p>{props.video.name}</p>
                </Carousel.Caption>
        </div>
    );
};

export default Video;