import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadiobuttonGroup } from "../components/radiogroup";





function Login() {
    const navigate = useNavigate();
    const [usertype, setUsertype] = useState("");
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name == 'email') {
            setEmail(value)
        }
        if (name == 'password') {
            setPassword(value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const signupdata = JSON.parse(localStorage.getItem('user'));
        signupdata.map((curValue) => {
            let storeEmail = curValue.email;
            let storePassword = curValue.password;
            if (storeEmail == email) {
                console.log('Email', true)
            }
            if (storePassword == password) {
                console.log('Password', true)
            }
            if (storeEmail == email && storePassword == password) {
                navigate("/home")
            } else {
                
                alert("Invalid Credentials")
            }
        })
    }
    return (
        <>
            <div className="flex items-center h-screen">
                <div className="max-w-md bg-gray-900 p-8 rounded-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-100 mb-8 text-center">Sign in to your account</h2>

                    <form onSubmit={handleSubmit}>

                        <RadiobuttonGroup
                            label="Who are you?"
                            option={[
                                { label: "Employee", value: "employee" },
                                { label: "Employer", value: "employer" }
                            ]}
                            value={usertype}
                            onChange={(e) => setUsertype(e.target.value)}
                        />

                        <div className="border border-gray-700 rounded-md overflow-hidden mb-4">
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 
                                    bg-white/3 text-gray-200 placeholder-gray-400
                                    focus:bg-white/3 focus:outline-none focus:ring-0
                                    border-b border-gray-700"
                            />

                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-2 
                                    bg-white/3 text-gray-200 placeholder-gray-400
                                    focus:bg-white/3 focus:outline-none focus:ring-0"
                            />

                        </div>

                        <div className="flex items-center justify-between text-sm mb-6">
                            <label className="flex items-center text-gray-400">
                                <input
                                    type="checkbox"
                                    className="mr-2 rounded border-gray-600 bg-gray-800 focus:ring-0"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md transition duration-300"
                        >
                            Sign in
                        </button>

                        <p className="text-center text-gray-400 text-sm mt-6">
                            Not a member?
                            <a href="/" className="text-indigo-400 font-medium hover:text-indigo-300"> Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login