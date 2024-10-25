import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/UploadStep1.css";
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import React from 'react'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const UploadStep1 = () => {

  const categoryOptions = [
    {
      id: "1",
      bottonClass: "artist",
      imgClass: "spellcheck-icon",
      imgSrc: "/spellcheck1.svg",
      divClass: "education",
      text: "Education"
    },
    {
      id: "2",
      bottonClass: "artist1",
      imgClass: "spellcheck-icon",
      imgSrc: "/palette.svg",
      divClass: "artist-carpentery",
      text: "Artist / Carpentery"
    },
    {
      id: "3",
      bottonClass: "artist2",
      imgClass: "spellcheck-icon",
      imgSrc: "/tools.svg",
      divClass: "household-services",
      text: "Household Services"
    },

    {
      id: "4",
      bottonClass: "artist3",
      imgClass: "shop1-icon",
      imgSrc: "/shop11.svg",
      divClass: "wholesale-retail",
      text: "Wholesale / Retail"
    },
    {
      id: "5",
      bottonClass: "artist4",
      imgClass: "janitor-icon",
      imgSrc: "/janitor@2x.png",
      divClass: "maid-cleaner",
      text: "Maid / Cleaner"
    },
    {
      id: "6",
      bottonClass: "artist5",
      imgClass: "spellcheck-icon",
      imgSrc: "/laptop.svg",
      divClass: "wholesale-retail",
      text: "Freelancer"
    },
    {
      id: "7",
      bottonClass: "artist6",
      imgClass: "spellcheck-icon",
      imgSrc: "/camera.svg",
      divClass: "photography",
      text: "Photography"
    },
    {
      id: "8",
      bottonClass: "artist7",
      imgClass: "guru-icon",
      imgSrc: "/guru@2x.png",
      divClass: "gym-yoga",
      text: "Gym / Yoga"
    },
    {
      id: "9",
      bottonClass: "artist8",
      imgClass: "spellcheck-icon",
      imgSrc: "/cart4.svg",
      divClass: "general-store",
      text: "General Store"
    },
    {
      id: "10",
      bottonClass: "artist9",
      imgClass: "guru-icon",
      imgSrc: "/dining-room@2x.png",
      divClass: "eatery",
      text: "Eatery"
    },
    {
      id: "11",
      bottonClass: "artist10",
      imgClass: "spellcheck-icon",
      imgSrc: "/geoalt.svg",
      divClass: "tours-travels",
      text: "Tours & Travels"
    },
    {
      id: "12",
      bottonClass: "artist11",
      imgClass: "spellcheck-icon",
      imgSrc: "/listcolumnsreverse.svg",
      divClass: "others",
      text: "Others"
    }
  ]

  const handleOnchange = ((e)=>{
    setCategory(e.target.value)
  })

  const [categoryObj, setCategoryObj] = useState({})
  const [category, setCategory] = useState("")

  useEffect(() => {

    if(document.getElementById(categoryObj.id)){
      categoryOptions.map((item) =>  document.getElementById(item.id).style.background = "var(--color-darkorange)")
      document.getElementById(categoryObj.id).style.background = 'rgba(255, 81, 0, 0.7)';

      if(categoryObj.id == '12'){
        document.getElementById("other-input").removeAttribute("disabled");
        document.getElementById("other-input").style.background = "white"
        document.getElementById("other-input").placeholder = "Enter your karobar category"
        document.getElementById("other-input").value = category
      }
      else{
        document.getElementById("other-input").disabled = true;
        document.getElementById("other-input").style.background = "rgb(201, 201, 201)"
        document.getElementById("other-input").placeholder = "Select Others Tab"
        document.getElementById("other-input").value = ""
      }
    }

  }, [category])

  useEffect(() => {
    
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const [karobarInfo, setKarobar] = useState({
    ownerName:"", orgEmail:"",
  });

  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value

    setKarobar({...karobarInfo,[name]:value });
  }

  const step1URL = "http://localhost:5000/api/uploadstep1process"
 
  var [data, setdata] = useState({})
  const getData = async () => {
    
    try{
      const res = await fetch(step1URL,{
        method: "GET", 
        headers:{
          Accept: "application/json",
          "Content-Type" : "application/json",
          //"Authentication" : `Bearer ${token}`
        },
        credentials: "include"
      })

      const udata = await res.json()

      setdata(udata)
      
      if(!res.status == 200){
        const error = new Error(res.error)
        throw error
      }

    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate()
  const postInfo = async(e) => {
    e.preventDefault()
    const {ownerName, orgEmail} = karobarInfo

    const response = await fetch(step1URL, {
      method:"POST",
      headers: {
        Accept : "application/json",
        "Content-Type" : "application/json",
        //"Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify({
        ownerName, orgEmail, category, user: data
      }),
      credentials: "include"
    })

    const Data = await response.json()

    if(Data.status == 200){

      localStorage.setItem('karobarInfo', JSON.stringify({ ownerName, orgEmail, category }))

      toast("Upload step 1 saved successfully ...", {
        className: 'foo-bar',
        onClose: () => {
          navigate("/uploadstep2")
        },
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
    else{
      toast(`Error occured ! ${Data.msg}`, {
        className: 'foo-bar',
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }

  }



  return (
    <div className="upload-step1">
    <ToastContainer toastStyle={{ color: "#874d00", boxShadow:"12px 12px 2px 1px #453400;", fontSize: "18px", borderRadius: "20px"}} />

       <Header cssclass="navbar" data = {data.username} />

      <section className="yellow-box">
        <form method="POST">
          <div className="name-and-email">
            <input className="email-input" name = "orgEmail" value={karobarInfo.orgEmail} onChange={handleInputs} type="text" required />
            <input className="other-input" placeholder="Select Others Tab" id="other-input" onChange = {handleOnchange} name = "other"  type="text" disabled />
            <h1 className="email">{`Organization Email* :`}</h1>
            <h1 className="email1">Other :</h1>
            <input className="name-input"  name = "ownerName" value={karobarInfo.ownerName} onChange={handleInputs} type="text" required />
            <h1 className="name"> Owner Name* : </h1>
          </div>
          <h1 className="type">Category* :</h1>
          <div className="category-options">

          {
            categoryOptions.map((item) => {
              return(
                <>
                <button className={item.bottonClass} id={item.id} onClick={(e) =>  {
                    e.preventDefault()
                    setCategoryObj(item)
                    setCategory(item.text)
                    }
                  } >
                  <img className={item.imgClass} src={item.imgSrc} />
                  <div className={item.divClass}> {item.text} </div>
                </button>
                </>
              )
            })
          }

          </div>

          <button className="next-button" onClick={postInfo} />

        </form>

      </section>
      <section className="yellow-box-before" />
      <section className="images-upload-page">
        <img
          className="gym-icon"
          alt=""
          src="/gym@2x.png"
          data-animate-on-scroll
        />
        <img
          className="teacher-icon"
          alt=""
          src="/teacher1@2x.png"
          data-animate-on-scroll
        />
        <img
          className="artist-icon"
          alt=""
          src="/artist@2x.png"
          data-animate-on-scroll
        />
        <img
          className="mechanic-icon"
          alt=""
          src="/mechanic@2x.png"
          data-animate-on-scroll
        />
        <img
          className="shop-icon"
          alt=""
          src="/shop2@2x.png"
          data-animate-on-scroll
        />
      </section>
      <section className="green-line-removebg-preview-1" />



      <div className="title">
        <img className="logo-1-icon" alt="" src="/logo-13@2x.png" />
        <h1 className="add-text">UPLOAD MY KAROBAR</h1>
        <h1 className="add-text1">STEP - 1</h1>
      </div>
      <div className="divider" />

      <Footer cssclass="footer"/>

    </div>
  );
};

export default UploadStep1;
