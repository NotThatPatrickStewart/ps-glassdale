let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch ("https://criminals.glassdale.us/crimes")
    .then(response => {
        // console.log("response before json", response)
        return response.json()
    })
    .then(convictionsArray => convictions = convictionsArray)
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
    */
}