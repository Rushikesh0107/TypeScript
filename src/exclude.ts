type EventTypes = 'click' | 'scroll'| 'mousemove';

type newEvents = Exclude<EventTypes, 'scroll'> //this will exclude the scroll event from the EventTypes

function on(Event : newEvents) : void {
    console.log(Event);
}

// on('scroll') this will throw an error as scroll is excluded

on('click')