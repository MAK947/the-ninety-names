import React from "react";

class Card extends React.Component{
    render(){
        return (<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`../img/${this.props.name}.png`} alt={this.props.name} />
        <div>
            <h2>{this.props.name}</h2>
            <p>Meaning: <strong>{this.props.meaning}</strong></p>
            <p><a href={this.props.watch}><strong>Watch</strong></a></p>
        </div>
    </div>);
    }
}
export default Card;
