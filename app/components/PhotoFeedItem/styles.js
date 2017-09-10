import { StyleSheet } from "react-native"

export default StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        // backgroundColor: "purple",
        borderBottomColor: "grey",
        borderBottomWidth: 8
    },
    textContainer: {
        flex: 1,
        marginTop: 8,
        marginRight: 5,
        marginBottom: 5
    },
    headerDateContainer: {
        flexDirection: "row",
        marginRight: 5,
        marginBottom: 5
    },
    header: {
        // height: 50
        flex: 1,
        fontSize: 14,
        fontWeight: "bold"
    },
    day: {
        fontSize: 10,
        marginLeft: 5
    },
    description: {
        // backgroundColor: "yellow",
        flex: 1
    },
    author: {
        // backgroundColor: "red"
        marginTop: 8,
        fontSize: 12
    },
    thumbnail: {
        width: 75,
        height: 75,
        margin: 8,
        borderRadius: 10
    }
})
