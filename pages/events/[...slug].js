import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/UI/Button'
import ErrorAlert from '../../components/UI/error-alert/error-alert'
const FilteredEventPage = () => {
    const router = useRouter()
    const filterData = router.query.slug
    if (!filterData) {
        return <p className='center'>Loading...</p>
    }
    const filterYear = filterData[0]
    const filterMonth = filterData[1]

    const numYear = +filterYear
    const numMonth = +filterMonth
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <Fragment>
            <ErrorAlert><p>Invalid Filter. Please Adjust your values</p></ErrorAlert>
        </Fragment>
    }
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })
    if (!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>
            <ErrorAlert> <p>No events found for the chosen filter!</p></ErrorAlert>
            <div className='center'>

                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
    }
    const date = new Date(numYear, numMonth - 1)
    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    )
}

export default FilteredEventPage