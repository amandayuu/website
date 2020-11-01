import React from "react"
let data = require("./lcc3-schedule.json")
const { format } = require("date-fns")

const events = data.map((item) => {
  console.log(item)
  // const morning = "1:00"

  const localized = new Date(
    `2020-11-19T${item.utc.length > 4 ? item.utc : "0" + item.utc}:00Z`
  )
  return Object.assign({}, item, {
    utcHour: parseInt(item.utc.replace(":", ""), 10),
    localized: format(localized, "MMMM do h:mm a"),
  })
})

const Event = ({ event }) => (
  <>
    <span>{event.name}</span>
    <br />
    <span>{event.localized}</span>
    <br />
  </>
)

export default () => (
  <>
    <h2>Conference Schedule</h2>
    <span>Your current time is: {format(new Date(), "MMMM do h:mm a")}</span>
    <br />
    {events.map((event) => (
      <Event event={event} key={event.utc} />
    ))}
  </>
)
