import React, { Component } from 'react';

import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

class News extends Component {
    render() {

        return this.props.news.map((newsItem) => (
            <NewsItem key={newsItem.id} newsItem={newsItem}/>
        ));
    }
}


// PropTypes
News.propTypes = {
    news: PropTypes.array.isRequired
}

export default News;
