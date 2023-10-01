import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../components/firebase";
import { AiFillDelete } from "react-icons/ai";
import { storage } from "../components/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';



const Dashboard = () => {
  const [accordion, setActiveAccordion] = useState(-1);
  const [link, setLink] = useState([]);
  const [lin, setLin] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [orders, setOrders] = useState([]);
  const [imageUpload, setImageUpload] = useState(null)
  const collectionRef = collection(db, "contacts");
  const linkCollection = collection(db, "link");
  const linkPortfolio = collection(db, "portfolio");



  useEffect(() => {
    const viewOrders = async () => {
      const data = await getDocs(collectionRef);

      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const viewLinks = async () => {
      const data = await getDocs(linkCollection);
      setLink(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    viewOrders();
    viewLinks();
  }, [collectionRef, linkCollection]);

      
  const deleteUser = async (id) => {
    const userDoc = doc(db, "contacts", id);
    await deleteDoc(userDoc);
    alert("Order has been deleted");
  };

  const deleteLink = async (id) => {
    const userLink = doc(db, "link", id);
    await deleteDoc(userLink);
    alert("Link has been deleted");
  };

  const linkSubmit = async (e) => {
    e.preventDefault();
    await addDoc(linkCollection, {
      lin: lin,
    })
      .then(() => {
        alert("Link has been submitted.");
      })
      .catch((err) => {
        alert(err);
      });
    setLin("");
  };

  const portSubmit = async (e) => {
    e.preventDefault();
    await addDoc(linkPortfolio, {
      portfolio: portfolio,
    })
      .then(() => {
        alert("Link has been submitted.");
      })
      .catch((err) => {
        alert(err);
      });
      setPortfolio("");
  };

  const toggleAccordion = (index) => {
    if (index === accordion) {
      return setActiveAccordion(-1);
    }
    setActiveAccordion(index);
  };

  const uploadImage = () => {
    if (imageUpload === null) return ;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(()=>{
      alert("Image has been uploaded")
    })
  };



  return (
    <>
    
    <div className="container">
        <div>
          
          <h1 className="p-2">Placed Orders</h1>
        </div>
        <div className="accordion__faq p-2">
          { orders.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <AiFillDelete 
                  onClick={()=>{deleteUser(item.id)}}
                  className="hover:bg-red-500" />
                  <h3 className={accordion === index ? "active" : ""}>{item.name}</h3>
                  <div>
                    {accordion === index ?
                      <span className="verticle">-</span> : <span className="horizental">+</span>}
                  </div>
                </div>
                <div>
                  <p className={accordion === index ? "active" : "inactive"} >{item.plan}</p>
                  <p className={accordion === index ? "active" : "inactive"} >{item.phone}</p>
                  <p className={accordion === index ? "active" : "inactive"} >{item.email}</p>
                  <p className={accordion === index ? "active" : "inactive"} >{item.message}</p>
                </div>
              </div>
            )
          }
          <h3>Place Youtube Streaming Link</h3>
          <input className="p-1 mt-4 border-gray-400" type="text" value={lin} onChange={e=>setLin(e.target.value)} />
          <input className="p-2 ml-5 bg-teal-900 text-white font-bold cursor-pointer active:text-gray-800" type="submit" onClick={linkSubmit} />
        </div>
        {link.map((item, index)=>(
          <div key={index} className="container">
            <h3 className="mt-5 link">{item.lin}</h3>
            <AiFillDelete  onClick={()=>{deleteLink(item.id)}} className="relative bottom-10 hover:bg-red-500 cursor-pointer" />
        </div>
          ))}
          
      </div>
      <div className="mt-20 p-2">
        <h3 className="mb-5">Place your Images</h3>
        <input type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}} />
        <input className="p-2 bg-teal-900 text-white font-bold cursor-pointer active:text-gray-800" type='submit' onClick={uploadImage} />
      </div>
      <div className="mt-20 p-2">
        <h3 className="mb-5">Place your Videos here</h3>
        <input type="text" className="p-1" value={portfolio} onChange={e=>setPortfolio(e.target.value)} />
        <input className="p-2 bg-teal-900 text-white font-bold cursor-pointer active:text-gray-800 ml-4" type='submit' onClick={portSubmit} />
      </div>
    
    </>
  );
};
export default Dashboard;
