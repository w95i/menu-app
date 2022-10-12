import React ,{useState} from "react";
import {Navbar,Container,Nav,Form} from "react-bootstrap"
const NavBar=({filterbysearch})=>{

  const [search, setsearch] = useState('')
  const onsearch=(e)=>{
    e.preventDefault()
    filterbysearch(search)
    setsearch('')
  }
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="أبحث هنا ..."
              className="me-2"
              onChange={(e)=>setsearch(e.target.value)}
              value={search}
            />
            <button onClick={onsearch} className="mx-2 px-4 btn-search">بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavBar;