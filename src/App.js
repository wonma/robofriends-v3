import React from 'react';

import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchInput: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            searchInput: event.target.value 
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        }).then((robots) => {
            this.setState({
                robots: robots
            })
        })
    }
    
    render(){
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        })
        return(
            <div className="app">
                <h1 className="tc mb2 app__title">Robofriends</h1>
                <SearchBar searchInput={this.state.searchInput} onInputChange={this.onInputChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;