import React, { Fragment, useEffect, useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import baseUrl from './../APIService/nodeapi';
import axios from 'axios'

const AddCourse = () => {
    
    useEffect(()=>{
        document.title = "Add Course | LearnCode With SOM"
    }, []);
    
    //function to post data through API Service
    const postCourseData = (data) => {
        axios.post(`${baseUrl}/postdata`, data).then(
            (response)=>{
                console.log(response);
                toast.success('Courses has been loaded');
            },
            (error)=>{
                console.log(error);
                toast.error('Something went wrong');
            }
        )
    } 
    const [course, setCourse] = useState({
        
    });

    const handleForm = (e) => {
        //console.log(course);
        debugger
        postCourseData(course);
        e.preventDefault();
    }
    return <Fragment>
        <div className="container" style={{padding: 15}}>
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <h1 className="text-center my-3">Fill Course Details</h1>
                    <Form onSubmit={handleForm}>
                        <FormGroup>
                            <label for="userID">Course Id</label>
                            <Input type="text" placeholder="Enter here" name="userID" id="userID" onChange={(e)=>{
                                setCourse({...course, id: e.target.value })
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <label for="courseTitle">Course Title</label>
                            <Input type="text" placeholder="Enter title here" name="courseTitle" id="courseTitle" onChange={(e)=>{
                                setCourse({...course, title: e.target.value })
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <label for="description">Course Description</label>
                            <Input type="textarea" placeholder="Enter description here" name="description" id="description" onChange={(e)=>{
                                setCourse({...course, description: e.target.value })
                            }} />
                        </FormGroup>
                        <Button type="submit" color="success">Add Course</Button>
                        <Button type="reset" color="warning ml-2" onChange={(e)=>{
                                setCourse({})
                            }}>Clear</Button>
                    </Form>
                </div>
            </div>
        </div>
    </Fragment>
}

export default AddCourse;