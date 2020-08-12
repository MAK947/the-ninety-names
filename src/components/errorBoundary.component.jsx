import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError : false,
        }
    }
    //kinda like try-catch
    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
        this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooops! this is not good!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;