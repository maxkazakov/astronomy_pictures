import React, { Component } from "react"
import { Image, Text, View, ActivityIndicator } from "react-native"
import styles from "./styles"
import PropTypes from "prop-types"
import moment from "moment"

export default class PhotoFeedItem extends Component {
    static navigationOptions = {
        title: "Photos of the day"
    }
    render() {
        const { title, url, explanation, copyright, date } = this.props.data

        return (
            <View style={styles.mainContainer}>
                <Image style={styles.thumbnail} source={{ uri: url }} />
                <View style={styles.textContainer}>
                    <View style={styles.headerDateContainer}>
                        <Text style={styles.header}>{title}</Text>
                        <Text style={styles.day}>{date}</Text>
                    </View>
                    <Text style={styles.description} numberOfLines={6}>
                        {explanation}
                    </Text>
                    <Text style={styles.author}>Author: {copyright}</Text>
                </View>
            </View>
        )
    }
}

PhotoFeedItem.propTypes = {
    data: PropTypes.object
}

PhotoFeedItem.defaultProps = {
    data: {}
}

// author:"Liz Langley"
// description:"Why some offspring are left to fend for themselves from day one."
// publishedAt:"2017-09-09T04:01:00Z"
// title:"Go, Baby! These Animal Babies Grow Up Without Any Help from Parents"
// url:"http://news.nationalgeographic.com/2017/09/go--baby--these-animal-babies-grow-up-without-any-help-from-pare.html"
// urlToImage:"http://news.nationalgeographic.com/content/dam/news/2017/09/09/waq-animal-babies/01-waq-animal-babies-NationalGeographic_2175920.jpg"
