import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Ernell from "../public/assets/ernel_photo1.jpg";
import { ImAddressBook } from "react-icons/im";
import React,{ useState } from "react";
import { db } from "./firebase";
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [plan, setPlan] = useState('')
  const [message, setMessage] = useState('')


const userCollection = collection(db, 'contacts');


  const handleSubmit = async(e) => {
    e.preventDefault();
    await addDoc(userCollection, {
      name: name,
      phone: phone,
      email: email,
      plan: plan,
      message:message,
    })
    .then(()=>{
      toast.success("Message has been submitted.");
    })
    .catch((err)=>{
      toast.error(err.message);
    })
    setName('');
    setPhone('');
    setEmail('');
    setPlan('');
    setMessage('');
  }

  


  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-10 w-full">
        <h2 className="text-center">Place your Order</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={Ernell}
                  objectFit
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Ernell Sextius</h2>
                Ernell Sextius (Managing Director, Audiovisual Expert) is a
                professional Journalist and Audiovisual Expert with eleven years
                of experience working in the media industry. With a specialty in
                videography and graphics, website development, media relations
                consultancy, and, sales and marketing, he also maintains a focus
                on media and business operations managementP
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex flex-col items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillTelephoneFill />
                  </div>
                  <h5 className="mt-2">Call Us</h5>
                  <p>758-712-9678</p>
                  <p>758-722-4268</p>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <ImAddressBook />
                  </div>
                  <h5 className="mt-2">Address</h5>
                  <p>Summersdale Castries Saint Lucia</p>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <h5 className="mt-2">Email</h5>
                  <p>info@esproductionz.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div id="plans" className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <select required value={plan} onChange={e=>setPlan(e.target.value)} className="uppercase text-sm py-2">
                    <option>Select Plan</option>
                    <option>1 CAMERA SERVICE ONLY $450 EC</option>
                    <option>1 CAMERA SERVICE & BURIAL $550 EC</option>
                    <option>2 CAMERAS SERVICE ONLY $650 EC</option>
                    <option>2 CAMERAS SERVICE & 1 BURIAL $850 EC</option>
                    <option>2 CAMERAS SERVICE & 2 CAMERAS BURIAL $950 EC</option>
                    <option>FUNERAL HOME SERVICE & BURIAL $1,200 EC
                    </option>
                    <option>2 CAMERAS $1700EC/HR
                    </option>
                    <option>Corporate TVC from $USD 1, 500

                    </option>
                    <option>Documentary Production from $USD 1, 000 per Minute

                    </option>
                    <option>Music Videos from $USD 1, 500
                    </option>
                    <option>Graphic Commercials from $USD 500
                    </option>
                    <option>Photography from $USD 300 per hour
                    </option>
                    <option>Live Broadcasting of Corporate, Sporting and Social Events from $USD 500 per hour
                    </option>
                    <option>4 CAMERAS $3400EC/HR
                    </option>
                    <option>AERIAL VIDEOGRAPHY/PHOTOGRAPHY $800EC PER FLIGHT
                    </option>
                   </select>

                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    required
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 hover:p-5 active:text-gray-900">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
