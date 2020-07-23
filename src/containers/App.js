import React, { Component } from 'react';
import NamesList from '../components/NamesList';
import './App.css';
import SearchBox from '../components/SearchBox';
import LoadScreenIcon from '../components/LoadScreenIcon';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

export default class App extends Component {
    constructor(){
        //calls constructor of components
        super();
        //state usually lives in parent component
        //state consists of all things that can change
        this.state = {
            names: [],
            searchField:''
        }
    }

    onNameSearch = (event) => {
        this.setState({searchField : event.target.value})
    }

    showContent = () => {
        const {names, searchField } = this.state;
        const filterdnames = names.filter(name => name.name.toLowerCase().includes(searchField.toLowerCase()));
        return !names.length?<LoadScreenIcon/>:<NamesList names={filterdnames} />
    }

    render(){
        return (
            <div className="tc">
                <div className="f1">
                <h1>Asma Ul Husna</h1>
                <h6>The Most Beautiful Names</h6>
                </div>
                <SearchBox searchChange={this.onNameSearch}/>
                <Scroll>
                    <ErrorBoundary>
                        {this.showContent()}
                    </ErrorBoundary>
                </Scroll>
            </div>)
    }

    //since it is part of react, no need for arrow functions
    componentDidMount(){
        fetch('https://mak947.github.io/json-files/names.json')
        .then(response =>response.json())
        .then(names =>{
            this.setState({names: names});
        });
    }
}