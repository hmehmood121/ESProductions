import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../components/firebase'
import { useRouter } from 'next/router';


export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const router = useRouter()
  const logInWithEmailAndPassword = async (e) => {
    e.preventDefault()
    
    const user = await signInWithEmailAndPassword(
      auth,
      email,
      password
      )
      if (user) {
        router.push('/dasshboard');
      } else {
        router.push('/admin');
      }
      
    }

  return (

        <section className="h-screen">
    <div
      className="flex justify-center items-center h-full g-6"
    >
  
      <div className="md:w-8/12 mb-12 md:mb-0">
        <form onSubmit={logInWithEmailAndPassword}
        >

          <div className="mb-6">
            <input
              type="email"
              className="w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                >Remember me</label>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <button
              onClick={logInWithEmailAndPassword}
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>

</section>

    
  )
}