import React, { Component } from 'react';

import PropTypes from 'prop-types';
import News from "./News";
import styled from "styled-components";

const StoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  border-bottom: 5px solid #E8A746;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const Points = styled.div`
  font-size: 1.2em;
  flex: 0 0 60px;
  text-align: center;
  vertical-align: middle;
  padding: 5px;

  @media (max-width: 768px) {
    flex: 0 0 px;
    padding-bottom: 0;
  }
`;

const Title = styled.div`
  font-size: 1.5em;
  align-self: left;
  align: left;
  flex: 1;
`;

const InfoBox = styled.div`
  padding: 5px;
  flex: 0 0 25%;
  word-wrap: break-word;
  align-self: center;
  @media (max-width: 768px) {
    flex: 100%;
    text-align: right;
    margin-top: -5px;
    margin-bottom: 5px;
  }
`;



const InfoItem = styled.span`
  display: inline-block;
  padding: 0 2px;
`;

class NewsItem extends Component {

    getStyle = () => {

        return {
            background: '#ff6600',
            padding: '1px',
            borderBottom: '1px #ccc dotted',
           fontFamily: 'Verdana, Geneva, sans-serif',
            color: 'white',
            fontSize: '20px'
        }
    }

    markComplete = (e) => {
        console.log(this.props)
    }


    render() {
        const { points, url, title, author, kids, text } = this.props.newsItem;
        return (


            <StoryBox>
            <Points>{points} points</Points>
                <Title><a href={url} style={{color:"orange"}}>{title}</a></Title>
                <InfoBox>
                    <InfoItem>by {author}</InfoItem>
                    <InfoItem> </InfoItem>
                </InfoBox>
        </StoryBox>
        )
    }
}

// PropTypes
NewsItem.propTypes = {
    newsItem: PropTypes.object.isRequired
}


export default NewsItem;
