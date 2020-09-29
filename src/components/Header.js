import React from "react"
import { Jumbotron, Container, Button } from 'reactstrap'
import { Link  } from 'react-router-dom'

function Header() {
    return (
      <div>
            <Jumbotron className="text-center bg-gray">
                <h1>Jumbotron Design</h1>
                <p>
                    This is my first Jumbotron Design.
                </p>
                <Container>
                    <Button className="primary" outline>Home</Button>
                </Container>
            </Jumbotron>
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <ul className="list-unstyled" horizontal>
                    <li><Link className="list-group-item list-group-item-action" tag="h" to="/" action>Home</Link></li>
                    <li><Link className="list-group-item list-group-item-action" tag="h" to="/add-course" action>Add Course</Link></li>
                </ul>
              </div>
            </div>
        </div>
    );
}


export default Header;