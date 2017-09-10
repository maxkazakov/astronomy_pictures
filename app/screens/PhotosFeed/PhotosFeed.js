import React, { Component } from "react"
import { FlatList, View, ActivityIndicator } from "react-native"
import { getPhotos } from "app/api/getPhotos"
import styles from "./styles"
import PhotoFeedItem from "app/components/PhotoFeedItem"
import moment from "moment"

export default class PhotosFeed extends Component {
    static navigationOptions = {
        title: "Photos of the day"
    }

    componentWillMount() {
        this._loadData()
    }

    _getNextDate() {
        const items = this.state.items
        if (items.length == 0) {
            return new Date()
        }
        return moment(items[items.length - 1].date).subtract(1, "days")
    }

    _loadData() {
        const portionSize = 5
        const date = this._getNextDate()
        console.log(date)
        getPhotos(date, portionSize).then(
            data => {
                console.log(data)
                const items = [...this.state.items, ...data]
                this.setState({
                    items,
                    isLoading: false
                })
            },
            error => console.log(error)
        )
    }

    state = {
        isLoading: true,
        items: []
    }

    _renderItem(item) {
        console.log(item.item)
        return <PhotoFeedItem data={item.item} />
    }

    _keyExtractor = (item, index) => index

    render() {
        return this.state.isLoading ? (
            <View style={[styles.container]}>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={styles.activityIndicator}
                    size="large"
                />
            </View>
        ) : (
            <FlatList
                data={this.state.items}
                // extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}
