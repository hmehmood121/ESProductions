import { useState } from 'react';
import Image from 'next/image';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../components/firebase'
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
      if(!user){
        alert("Invaled Credentials")
      }
      else{
        router.push('/dashboard')
      }
    }
  
  return (
    <div>
        <section className="h-screen">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <Image
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form onSubmit={logInWithEmailAndPassword}
        >

          <div className="mb-6">
            <input
              type="email"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
  </div>
</section>
</div>
    
  )
}