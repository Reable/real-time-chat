import React, { useContext } from 'react'
import {Button, Container, Nav, Navbar, Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function NavBar() {

	const {user, logoutUser} = useContext(AuthContext);

	return (
		<Navbar bg="dark" className="mb-4" style={{height: '3.75rem'}}>
			<Container>
				<h2>
					<Link to='/' className='link-light text-decoration-none'> RealTimeChat </Link>
				</h2>
				{user && <span className='text-warning'>Logged in as {user?.name}</span> }
				<Nav>
					<Stack direction='horizontal' gap='3'>
						{!user
						 	?<>
								<Link to='/login' className='link-light text-decoration-none'> Login </Link>
								<Link to='/register' className='link-light text-decoration-none'> Register </Link>
						 	</>
						 	:<Button onClick={logoutUser}> Exit </Button>
						}
					
					</Stack>
				</Nav>
			</Container>
		</Navbar>
	)
}
