import React, { Component } from 'react';

import PropTypes from 'prop-types';
import News from "./News";
import styled from "styled-components";

const StoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  border-bottom: 5px solid #ffa041;
  
  margin-bottom: .75rem;
`;

const Points = styled.div`
  font-size: 1.2em;
  flex: 0 0 50px;
  text-align: center;
  vertical-align: middle;
  padding: 15px;
  height: 100%
  color: #ffa041;
   font-weight: bold;
   

  @media (max-width: 768px) {
    flex: 0 0 px;
    padding-bottom: 0;
  }
`;

const Title = styled.div`
  font-size: 1.4em;
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
  padding: 0 5px;
`;

class NewsItem extends Component {



    markComplete = (e) => {
        console.log(this.props)
    }


    render() {
        const { created_at, points, url, title, author, num_comments} = this.props.newsItem;
        return (


            <StoryBox>
            <Points>{points}</Points>
                <Title><a href={url} style={{color:"#000000"}}>{title}</a></Title>
                <InfoBox>
                    <InfoItem>by {author} </InfoItem>
                    <InfoItem> <i class="fa fa-comments" aria-hidden="true"></i>{'  '}{num_comments}</InfoItem>
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
