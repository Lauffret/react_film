import React, { useEffect, useState } from 'react';
import DetailMovie from './DetailMovie';
import MovieRaw from './MovieRaw';
import Video from './Video';
import { Carousel, Container } from 'react-bootstrap'


const Api = (props) => {
    const [film, setFilm] = useState()
    const pathname = window.location.pathname
    const param = props.param
    var route = ""
    if (pathname.includes('videos')) {
        route = "video"
    } else {
        if (pathname.includes('popular') || pathname.includes('search')) {
            route = "films"
        } else {
            route = "film"
        }
    }

    useEffect(() => {
        fetch("https://api.themoviedb.org/3" + pathname + "?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr" + param)
            .then(res => { return res.json() })
            .then((res) => {
                if (!!res.results) {
                    setFilm(res.results)

                } else {
                    setFilm(res)
                }
            }).catch(function (error) {
                console.log(error);
            })

    })

    if (film !== undefined) {
        switch (route) {
            case "films":
                return (
                    <div>
                        {
                            film.map(res => {
                                return (
                                    <div>
                                        <Container>
                                            {<MovieRaw raw={res} />}
                                        </Container>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            case "video":
                return (
                    <div>
                        {
                            film.map(video => {
                                return (
                                    <div>
                                        <Video video={film} />
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            case "film":
                return (
                    <div>
                        {<DetailMovie film={film} />}
                    </div>
                );
        }

    } else {
        return (
            <div>
                <p> chargement des données</p>
            </div>
        );
    }
};

export default Api;