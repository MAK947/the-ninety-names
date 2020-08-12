import React, { Component } from 'react';
import NamesList from '../components/namesList/namesList.component';
import './app.styles.css';
import SearchBox from '../components/searchBox/searchBox.component';
import LoadScreenIcon from '../components/loadScreenIcon/loadScreenIcon.component';
import Scroll from '../components/scroll/scroll.component';
import ErrorBoundary from '../components/errorBoundary/errorBoundary.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            names: [],
            searchField:'',
            nameOfday:false
        }
    }

    onNameSearch = (event) => {
        this.setState({searchField : event.target.value})
    }

    showContent = () => {
        const {names, searchField } = this.state;
        const filterdnames = names.filter(name => name.transliteration.toLowerCase().includes(searchField.toLowerCase()));
        return !names.length?<LoadScreenIcon/>:<NamesList names={filterdnames} />
    }

    onNameOfTheDay = () =>{
        //let index = Math.floor(Math.random()*99);
        let date = new Date();
        let index = (date.getDate() + date.getMonth() + date.getFullYear())%99;
        this.state.nameOfday
        ?this.setState({searchField:"",nameOfday:false})
        :this.setState({searchField:this.state.names[index].transliteration,nameOfday:true});
    }

    render(){
        return (
            <div className="tc">
                <div className="f1">
                <h1>Asma Ul Husna</h1>
                <h6>The Most Beautiful Names</h6>
                </div>
                <SearchBox searchChange={this.onNameSearch}/>
                <Button variant='info' style={{margin:"1rem"}} className="grow" onClick={this.onNameOfTheDay}>{this.state.nameOfday === false?`Name of the Day`:`Reset`}</Button>
                <Scroll>
                    <ErrorBoundary>
                        {this.showContent()}
                    </ErrorBoundary>
                </Scroll>
            </div>)
    }

    componentDidMount(){
        fetch('https://mak947.github.io/json-files/names.json')
        .then(response =>response.json())
        .then(names =>{
            this.setState({names: names});
        });
    }
}