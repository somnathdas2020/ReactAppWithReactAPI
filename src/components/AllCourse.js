import React, { useState, useEffect } from 'react'
import Course from "./Course";
import { toast } from 'react-toastify';
import baseUrl from './../APIService/nodeapi';
import axios from 'axios'

const AllCourse = () => {

    useEffect(()=>{
        document.title = "Home | LearnCode With SOM"
    }, []);

    //function to call API Service
    const getAllCoursesFromServer = () => {
        axios.get(`${baseUrl}`).then(
            (response)=>{
                console.log(response.data);
                toast.success('Courses has been loaded');
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error('Something went wrong');
            }
        )
    } 

    //calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);
    

    const[courses, setCourses]=useState([
        // {title: "ABC", description: "title description 1"},
        // {title: "DEF", description: "title description 2"},
        // {title: "IJK", description: "title description 3"}
    ])

    return(
        <div>
            <h1>All Course</h1>
            <p>List of courses are as follows..</p>
            <div className="container text-left">
                <div className="row">
                    {
                        courses.length > 0 
                        ? courses.map((item)=> <Course key={item.id} course={item} />) : 
                        "No Courses"
                    }
                </div>
            </div>
            
        </div>
    );
}

export default AllCourse;