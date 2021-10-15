import React, {Component,useState, useEffect} from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { authContext, useAuth } from '../components/contexts/AuthContext';
import { addProductContext } from '../components/contexts/ProductContext';


const Header =()=>{

	const history = useHistory()
	const {userEmail, user} = useContext(authContext);
	const {getProducts, products} = useContext(addProductContext)
	const [state, setState] = useState(false)
	let checkStatus = JSON.parse(localStorage.getItem("user"))
	
	const handleValue = (e) => {
		const search = new URLSearchParams(history.location.search);		
		search.set('q', e.target.value);
		history.push(`${history.location.pathname}?${search.toString()}`);
		getProducts();
	  };
    useEffect(() => {
        if (checkStatus) setState(true)
    }, [userEmail])
	console.log(userEmail)
    function logout1() {
        localStorage.setItem("user", JSON.stringify(0))
        setState(false)
    }
	
	

    return (
        <>
        <Navbar style={{backgroundColor:"whitesmoke"}} expand="lg" variant="light">
            <Container style={{backgroundColor:"peach",height:'200px'}} >
                <Navbar.Brand href="#home" className="brand"
                  style={{fontSize:25}}>
                   <Nav><Link to="/" className="nav-link" role="button">JOY-BOX</Link></Nav>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                      <Nav className="me-auto"></Nav>
                      <Form className="d-flex">
                        <FormControl
                          type="search"
                          placeholder="Введите для поиска"
                          className="mr-2"
                          aria-label="Search"
                          onChange={(e) => handleValue(e)}
                        />
                        <Button variant="outline-light" p="l-5">Поиск</Button>
                      </Form>
                      <Nav
                      className="mr-auto my-2 my-lg-0"
                      style={{maxHeight:'80px'}}
                      navbarScroll
                      >
                          {
                              state ? (
                                  userEmail==='admin1@gmail.com' ? (
                                      <Nav>
                                          <Link to="/add" className="nav-link" role="button" style={{marginRight:'10px'}}>Add</Link>
                                          </Nav>
                                  )   : (<></>)

                              ) : (<></>)
                          }
                          <Nav><Link to="/catalog" className="nav-link" role="button" style={{marginRight:'10px'}}>CATALOQUE</Link></Nav>
                          <Nav><Link to="/add" className="nav-link" role="button" style={{marginRight:'10px'}}>ADD SNICKERS</Link></Nav>
                          <Nav><Link to="/cart" className="nav-link" role="button" style={{marginRight:'10px'}}>CART</Link></Nav>
                          <Nav><Link to="/contactInfo" className="nav-link" role="button" style={{marginRight:'10px'}}>CONTACT INFO</Link></Nav>


                          {state ?
							(
								<NavDropdown title="PROFILE" id="navbarScrollingDropdown">
									{ /* <NavDropdown.Item as={Link} to="/auth">
											Войти
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} to="/registration">
										Зарегистрироваться
									</NavDropdown.Item> */}
									<NavDropdown.Item>
										{userEmail}
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item as={Link} onClick={logout1}>
										LOGOUT
									</NavDropdown.Item>
								</NavDropdown>
							)
							:
							(
								<NavDropdown title="PROFILE" id="navbarScrollingDropdown">
								<NavDropdown.Item as={Link} to="/login">
										SIGN IN
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/registration">
									SIGN UP
								</NavDropdown.Item>
								
							</NavDropdown>
							)
						}           
                                </Nav>
                  </Navbar.Collapse>


                </Container>
                        </Navbar>

        </>
    );
};

export default Header; 