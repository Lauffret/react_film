import React from 'react';
import { Carousel } from 'react-bootstrap'

const Video = (props) => {
    return (
        <Carousel variant="dark" >
            {
                props.video.map(res => {
                    return (
                        <Carousel.Item>
                            <iframe width= "1000px" height="550px" title="Bande annonce" src={"https://www.youtube.com/embed/"+res.key} />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}
export default Video;