import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function JobListing({ job }) {
    const [ShowFullDescription, setShowFullDescription] = useState(false)
    let description = job.description

    if (!ShowFullDescription) {
        description = description.substring(0, 90) + '...'
    }

    return (
        <div className="relative rounded-xl bg-white shadow-md">
            <div className="p-4">
                <div className="mb-6">
                    <div className="my-2 text-gray-600">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">{description}</div>
                <button
                    onClick={() =>
                        setShowFullDescription((prevState) => !prevState)
                    }
                    className="mb-5 cursor-pointer text-indigo-500 hover:text-indigo-600"
                >
                    {ShowFullDescription ? 'Less' : 'More'}
                </button>
                <h3 className="mb-2 text-indigo-500">{job.salary}</h3>

                <div className="mb-5 border border-gray-100"></div>

                <div className="mb-4 flex flex-col justify-between lg:flex-row">
                    <div className="mb-3 text-orange-700">
                        <FaMapMarker className="text-lg, mr-1 mb-1 inline" />
                        {job.location}
                    </div>
                    <Link
                        to={`/jobs/${job.id}`}
                        className="h-[36px] rounded-lg bg-indigo-500 px-4 py-2 text-center text-sm text-white hover:bg-indigo-600"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobListing
