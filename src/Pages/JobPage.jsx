import { FaMapMarker, FaArrowLeft } from 'react-icons/fa'
import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function JobPage({ deleteJob }) {
    const navigate = useNavigate()
    const job = useLoaderData()
    const company = job.company
    console.log(company)

    const onDeleteClick = (jobid) => {
        const confirm = window.confirm(
            'Are you suer you want to delete this job?'
        )

        if (!confirm) return

        deleteJob(jobid)
        toast.success('Job deleted successfully')
        navigate('/jobs')
    }

    return (
        <>
            <section>
                <div className="container m-auto px-6 py-6">
                    <Link
                        to="/jobs"
                        className="flex items-center text-indigo-500 hover:text-indigo-600"
                    >
                        <FaArrowLeft className="fas fa-arrow-left mr-2" /> Back
                        to Job Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto px-6 py-10">
                    <div className="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
                        <main>
                            <div className="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
                                <div className="mb-4 text-gray-500">
                                    {job.type}
                                </div>
                                <h1 className="mb-4 text-3xl font-bold">
                                    {job.title}
                                </h1>
                                <div className="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
                                    <FaMapMarker className="fa-solid fa-location-dot mr-2 text-lg text-orange-700" />
                                    <p className="text-orange-700">
                                        {job.location}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                                <h3 className="mb-6 text-lg font-bold text-indigo-800">
                                    Job Description
                                </h3>

                                <p className="mb-4">{job.description}</p>

                                <h3 className="mb-2 text-lg font-bold text-indigo-800">
                                    Salary
                                </h3>

                                <p className="mb-4">{job.salary}</p>
                            </div>
                        </main>

                        <aside>
                            <div className="rounded-lg bg-white p-6 shadow-md">
                                <h3 className="mb-6 text-xl font-bold">
                                    Company Info
                                </h3>

                                <h2 className="text-2xl">{company.name}</h2>

                                <p className="my-2">{company.description}</p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {company.contactEmail}
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {company.contactPhone}
                                </p>
                            </div>

                            <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                                <h3 className="mb-6 text-xl font-bold">
                                    Manage Job
                                </h3>
                                <Link
                                    to={`/job-edit/${job.id}`}
                                    className="focus:shadow-outline mt-4 block w-full rounded-full bg-indigo-500 px-4 py-2 text-center font-bold text-white hover:bg-indigo-600 focus:outline-none"
                                >
                                    Edit Job
                                </Link>
                                <button
                                    onClick={() => onDeleteClick(job.id)}
                                    className="focus:shadow-outline mt-4 block w-full rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = res.json()
    return data
}

export { JobPage as default, jobLoader }
