import React, { Component } from 'react';
import News from './components/News';
import Header from './components/Header';
import './App.css';
import axios from 'axios';

import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Main = styled.section`
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f4f4f4;
`;

class App extends Component {

    state = {
        news: []
    }



    componentDidMount() {

        axios.get('http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=50')
            .then(res => this.setState({ news: res.data.hits}))


        // this.setState({ news: res.data})
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