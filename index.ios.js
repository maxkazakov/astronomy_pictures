import { StackNavigator } from "react-navigation"
import PhotosFeed from "./app/screens/PhotosFeed"

import { AppRegistry } from "react-native"

const App = StackNavigator({
    Home: { screen: PhotosFeed }
})

AppRegistry.registerComponent("PhotosOfTheDay", () => App)
