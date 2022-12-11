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

const Dashboard = () => {
  const [accordion, setActiveAccordion] = useState(-1);
  const [link, setLink] = useState([]);
  const [lin, setLin] = useState('')
  const [orders, setOrders] = useState([]);
  const collectionRef = collection(db, "contacts");
  const linkCollection = collection(db, "link");

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

  const toggleAccordion = (index) => {
    if (index === accordion) {
      return setActiveAccordion(-1);
    }
    setActiveAccordion(index);
  };

  return (
    <>
    <div className="container">
        <div>
          
          <h1>Placed Orders</h1>
        </div>
        <div className="accordion__faq">
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
    </>
  );
};
export default Dashboard;
