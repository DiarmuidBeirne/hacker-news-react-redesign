import React, { Component } from 'react';
import News from './components/News';
import Header from './components/Header';
import './App.css';
import axios from 'axios';

import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  background-color: #f4f1ed;
`;

const Main = styled.section`
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f4f1ed;
`;

class App extends Component {

    state = {
        news: []
    }



    componentDidMount() {

        axios.get('http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=30') //pull in data
            .then(res => this.setState({ news: res.data.hits}))



    }




    render() {


        return (
            <div className="App">
                <Container>
                    <Main>
                <Header/>
                <News news={this.state.news}/>
                    </Main>
                </Container>
            </div>
        );
    }
}
export default App;