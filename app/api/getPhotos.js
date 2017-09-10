import axios from "axios"
import moment from "moment"
import _ from "lodash"

const API_KEY = "78veyA3YmujCbRENNYl6aaVpClWwfPSbbKDydpxe"
const API_URL = "https://api.nasa.gov/planetary/apod"

// API_KEY_SECOND = "p523paysHoQymum06HKxITz0maInKlKcYersiCx9"

const useNull = error => {
    console.log(error)
    return null
}

const makeRequests = (date, portionSize) => {
    return _.range(portionSize).map(idx => {
        const formatedDate = moment(date)
            .subtract(idx, "days")
            .format("YYYY-MM-DD")
        console.log(formatedDate)
        return getPhoto(formatedDate).catch(useNull)
    })
}

const getPhotos = async (date, portionSize) => {
    const requests = makeRequests(date, portionSize)

    const items = axios.all(requests).then(
        axios.spread((...args) => {
            console.log("getPhotos")
            return args.filter(item => item && item.media_type == "image")
        })
    )
    return items
}

const getPhoto = async date => {
    const urlLastNews = API_URL + `?hd=False&date=${date}&api_key=${API_KEY}`
    const data = await axios.get(urlLastNews).then(({ data }) => data)

    return data
}

export { getPhotos }
// {
//     "date": "2017-09-10",
//     "explanation": "Why does a hurricane have an eye at its center? No one is yet sure. What happens in and around a hurricane's eye is well documented, though. Warm air rises around the eye's edges, cools, swirls, and spreads out over the large storm, sinking primarily at the far edges. Inside the low-pressure eye, air also sinks and warms -- which causes evaporation, calm, and clearing -- sunlight might even stream through.  Just at the eye's edge is a towering eyewall, the area of the highest winds. It is particularly dangerous to go outside when the tranquil eye passes over because you are soon to experience, again, the storm's violent eyewall.  Featured is one of the most dramatic videos yet taken of an eye and rotating eyewall.  The time-lapse video was taken from space by NASA's GOES-16 satellite last week over one of the most powerful tropical cyclones in recorded history: Hurricane Irma. Hurricanes can be extremely dangerous and their perils are not confined to the storm's center.    Latest Images: Hurricanes Irma, Jose, and K",
//     "media_type": "video",
//     "service_version": "v1",
//     "title": "Swirling Around the Eye of Hurricane Irma",
//     "url": "https://www.youtube.com/embed/InIggUObhiY?rel=0;autoplay=1"
//   }
