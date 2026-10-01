import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import Spinner from './spinner'

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            const urlquery = isHome ? '?_page=1&_per_page=3' : ''
            try {
                const res = await fetch(`/api/jobs${urlquery}`)
                const data = await res.json()
                setJobs(isHome ? data.data : data)
            } catch (err) {
                console.log('Error Fetching Data', err)
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])

    const JobList = jobs
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl m-auto lg:container">
                <h2 className="mb-6 text-center text-3xl font-bold text-indigo-500">
                    {isHome ? 'Recent Jobs' : 'Search Jobs'}
                </h2>

                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {JobList.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobListings
