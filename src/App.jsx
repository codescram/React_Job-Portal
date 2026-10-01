import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Jobs from './Pages/Jobs'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import JobPage, { jobLoader } from './Pages/JobPage'
import AddJob from './Pages/AddJob'
import EditJob from './Pages/EditJob'

const App = () => {
    const addJob = async (newJob) => {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'content-Type': 'application.json',
            },
            body: JSON.stringify(newJob),
        })
        return
    }

    const deleteJob = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        })
        return
    }

    const updateJob = async (updatedJob) => {
        const res = await fetch(`/api/jobs/${updatedJob.id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application.json',
            },
            body: JSON.stringify(updatedJob),
        })
        return
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route
                    path="/jobs/:id"
                    element={<JobPage deleteJob={deleteJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/job-edit/:id"
                    element={<EditJob updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/add-job"
                    element={<AddJob addJobSubmit={addJob} />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default App
