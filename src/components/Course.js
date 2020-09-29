import React from 'react'
import { 
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from 'reactstrap'

const Course = ({ key, course }) => {
    return (
        <div className="col-md-4">
            <Card className="col-md-12" style={{padding: 0}}>
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{course.title}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default Course;