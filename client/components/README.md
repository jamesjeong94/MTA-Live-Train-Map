### MTA-Live-Train-Map

A wrapper of the google maps api to show the live locations of subway cars of a specific line

# Tech

- Node, React, Express

# Api

- Google Maps api with react-google-map wrapper
- MTA GTFS feed

# Notes

- Need to implement the live locations of the subway cars (working around the protocol buffers has been very excruciating and poses a relatively steep learning curve)
- Will need to refactor the subway route polylines to accurately match MTA's routing. I utilized recursive sorting and connected the line based on the closest subway station to save time in manually organizing
- Will need to consolidate my subway line buttons, maybe based on color. Right now, they're in alphabetical order
- Info window buttons have to be styled and offer more utility than just the station name(maybe connections and arrivals)
- 'Form' window needs to list out relevant subway information
