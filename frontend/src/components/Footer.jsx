/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {MdEmail} from "react-icons/md"
import {FaPhone,FaLocationArrow} from "react-icons/fa"
const Footer = () => {
    const hours = [
        {
          id: 1,
          day: "Monday",
          time: "9:00 AM - 11:00 PM",
        },
        {
          id: 2,
          day: "Tuesday",
          time: "12:00 PM - 12:00 AM",
        },
        {
          id: 3,
          day: "Wednesday",
          time: "10:00 AM - 10:00 PM",
        },
        {
          id: 4,
          day: "Thursday",
          time: "9:00 AM - 9:00 PM",
        },
        {
          id: 5,
          day: "Monday",
          time: "3:00 PM - 9:00 PM",
        },
        {
          id: 6,
          day: "Saturday",
          time: "9:00 AM - 3:00 PM",
        },
      ];
    return (
        <>
            <Footer className='container'>
                <hr />
                <div className='content'>
                    <div className="">
                        <img src="/logo.png" alt="logo" className='logo-img' />
                    </div>
                    <div className="">
                        <h4>Quick Links</h4>
                        <ul>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/appointment"}>Appointment</Link>
                            <Link to={"/about"}>About Us</Link>
                        </ul>
                    </div>
                    <div className="">
                        <h4>Hours</h4>
                        {
                            hours.map((hour) => {
                                return (
                                    <li key={hour.id}>
                                        <span>{hour.day}</span>
                                        <span>{hour.time}</span>
                                    </li>
                                    )
                                    })
                        }
                    </div>
                    <div className="">
                        <h4>Contact Us</h4>
                        <div className=""><FaPhone/> <span>999-999-999</span> </div>
                        <div className=""><MdEmail/> <span>asnkka@gmail.com</span></div>
                        <div className=""><FaLocationArrow/> <span>India,Bhubaneswar</span> </div>
                    </div>
                </div>
            </Footer>
        </>
    )
}

export default Footer