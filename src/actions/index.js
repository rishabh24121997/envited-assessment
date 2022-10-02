export const addEvent = (eventData) => { 
    return {
        type: "addEvent",
        payload: eventData
    }
}