/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AppointmentForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nic, setNic] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [appointmentDate, setAppointmentDate] = useState('')
    const [doctorFirstName, setDoctorFirstName] = useState('')
    const [doctorLastName, setDoctorLastName] = useState('')
    const [address, setAddress] = useState('')
    const [hasVisited, setHasVisited] = useState('')
    const [department, setDepartment] = useState('')

    const departmentsArray = [
        "Pediatrics",
        "Dermatology",
        "Dentistry",
        "Gynecology",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Ophthalmology",
        "Orthopedics",
        "Otolaryngology",
        "Plastic Surgery",
        "Psychiatry",
        "Radiology",
    ];
    const NavigateTo=useNavigate();
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const fetchDoctor = async () => {
            const { data } = await axios.get("http://localhost:4000/api/v1/user/doctors",
                { withCredentials: true }
            );
            setDoctors(data.doctors)
        };
        fetchDoctor();
    }, [])

    const handleAppointment = async (e) => {
        e.preventDefault();
        try {
            const hasVisitedBool = Boolean(hasVisited);
            const { data } = await axios.post("http://localhost:4000/api/v1/appointment/post",
                { firstName, lastName, email, phone, nic, dob, gender, appointment_date:appointmentDate, doctor_firstName: doctorFirstName, doctor_lastName: doctorLastName, address, hasVisited: hasVisitedBool},
                { withCredentials: true,
                    headers: { 'Content-Type': 'application/json' }
                 }
            );
            toast.success(data.message);
            NavigateTo('/');
        } catch(error) {
            console.log("error")
            toast.error(error.response.data.message);
        }
    }
    return (
        <>
            <div className='container form-component appointment-form'>
                <h2>Appointment</h2>
                <form onSubmit={handleAppointment}>
                    <div>
                        <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type='number' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <input type='number' placeholder='NIC' value={nic} onChange={(e) => setNic(e.target.value)} />
                        <input type='date' placeholder='date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
                    </div>
                    <div>
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type='date' placeholder='Appointment Date'
                            value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
                    </div>
                    <div className="">
                        <select value={department} onChange={(e) => { setDepartment(e.target.value); setDoctorFirstName(""); setDoctorLastName("") }}
                        >
                            {
                                departmentsArray.map((depart, i) => {
                                    return (
                                        <option key={i} value={depart}>{depart}</option>
                                    )
                                })
                            }
                        </select>
                        <select value={`${doctorFirstName} ${doctorLastName}`}
                            onChange={(e) => {
                                const [firstName, lastName] = e.target.value.split("");
                                setDoctorFirstName(firstName);
                                setDoctorLastName(lastName);
                            }} disabled={!department}>
                            <option value="">Select Doctor</option>
                            {
                                doctors.filter(doctor => doctor.doctorDepartment === department).map((doctor, i) => {
                                    return (
                                        <option key={i} value={`${doctor.firstName} ${doctor.lastName}`
                                        }>{doctor.firstName} {doctor.lastName}</option>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <textarea rows="10" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'></textarea>
                    <div style={{ gap: "10px", justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <p style={{ marginBottom: "0px" }}>Have You Visited before?</p>
                        <input type='checkbox' checked={hasVisited} onChange={(e) => setHasVisited(e.target.checked)}
                            style={{ flex: 'none', width: "25px" }} />
                    </div>
                    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <button type='submit'>GET APPOINTMENT</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AppointmentForm