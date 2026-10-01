import { useState } from "react"
import { useNavigate } from "react-router-dom"
function signup() {
  const signupDetail = {
    name:"",
    email:"",
    password:""
  }

  const [data, setData] = useState(signupDetail)
  const navigate = useNavigate();
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({...data, [name]:value})
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!data.name || !data.email || !data.password){
      alert("Please enter detail");
    }else{
      const getData = JSON.parse(localStorage.getItem('user') || '[]')
      let arr = [];
      arr = [...getData]
      arr.push(data)
      localStorage.setItem('user', JSON.stringify(arr))
      alert("Sign Up Successfully");
      navigate('/login');
    }
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md bg-gray-900 p-5 rounded-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-100 mb-8 text-center">Create your account</h2>

          <form onSubmit={handleSubmit}>

            <div className="border border-gray-700 rounded-md overflow-hidden mb-4">

              <select className="w-full px-4 py-2 bg-white/3 text-gray-200 placeholder-gray-400 
          focus:outline-none focus:ring-0 border-b border-gray-700">
                <option value="">Signup As</option>
                <option value="">Employee</option>
                <option value="">Employer</option>
              </select>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-white/3 text-gray-200 placeholder-gray-400 
          focus:outline-none focus:ring-0 border-b border-gray-700"
              onChange={handleInput}
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full px-4 py-2 bg-white/3 text-gray-200 placeholder-gray-400 
          focus:outline-none focus:ring-0 border-b border-gray-700"
              onChange={handleInput}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-white/3 text-gray-200 placeholder-gray-400 
          focus:outline-none focus:ring-0"
              onChange={handleInput}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Sign up
            </button>

            <p className="text-center text-gray-400 text-sm mt-6">
              Already have an account?
              <a href="/Login" className="text-indigo-400 font-medium hover:text-indigo-300"> Sign in</a>
            </p>

          </form>
        </div>
      </div>

    </>
  )
}
export default signup