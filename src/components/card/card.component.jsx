import React from "react";
import './card.styles.css';
import Modal from 'react-bootstrap/Modal';

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }


    render() {
        const { name, meaning, url, transliteration } = this.props;
        return (<div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 pointer custom">
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Body style={{display:"flex",justifyContent:"center"}}>
                    <iframe width="560" title={transliteration} height="315" src={`https://www.youtube.com/embed/${url}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
            <div onClick={this.handleShow}>
                <h2 id="name" style={{marginBottom:"70px",marginTop:"70px"}}>{name}</h2>
                <h3 style={{ color: "green" }}>{transliteration}</h3>
                <strong>{meaning}</strong>
            </div>
        </div>);
    }
}

export default Card;
