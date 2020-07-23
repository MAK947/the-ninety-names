import React, { Component } from 'react';
import CatsList from '../components/CatsList';
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
            cats: [],
            searchField:''
        }
    }

    onCatNameSearch = (event) => {
        this.setState({searchField : event.target.value})
    }

    showContent = () => {
        const {cats, searchField } = this.state;
        const filterdCats = cats.filter(cat => cat.name.toLowerCase().includes(searchField.toLowerCase()));
        return !cats.length?<LoadScreenIcon/>:<CatsList cats={filterdCats} />
    }

    render(){
        return (
            <div className="tc">
                <h1>Asma Ul Husna</h1>
                <SearchBox searchChange={this.onCatNameSearch}/>
                <Scroll>
                    <ErrorBoundary>
                        {this.showContent()}
                    </ErrorBoundary>
                </Scroll>
            </div>)
    }

    //since it is part of react, no need for arrow functions
    componentDidMount(){
        fetch('https://mak947.github.io/json-files/cats.json')
        .then(response =>response.json())
        .then(cats =>{
            this.setState({cats: cats});
        });
    }
}