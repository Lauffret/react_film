import React from 'react';
import { Row,Col,Image,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from "react-icons/ai";
import '../App.css';

const MovieRaw = (props) => {
    return (
        <div>
            <Row className="row">
                <Col md={4}><Image thumbnail  fluid  src={"https://image.tmdb.org/t/p/w500" + props.raw.backdrop_path} alt={"Image du film " + props.raw.title} /></Col>
                <Col md={5} className="col"><h3>{props.raw.title}</h3></Col>
                <Col md={2} className="col"><Link to={"/movie/" + props.raw.id}><Button variant="secondary">Plus de Detail <AiOutlineRight/></Button></Link></Col>
            </Row>
        </div>
    );
};

export default MovieRaw;