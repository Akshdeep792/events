import React from 'react'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList'

const HomePage = () => {
    const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    )
}

export default HomePage