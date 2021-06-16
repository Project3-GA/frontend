import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ activeUser }) => {
	const user = localStorage.getItem('user');
	return (
		<div className='nav'>
			<h1>
				<Link to='/gallery'>working title</Link>
			</h1>
			<ul className='nav-ul'>
				<li>
					<Link to='/gallery'>home</Link>
				</li>
				<li>
					<Link
						to='/signin'
						onClick={() => {
							localStorage.clear();
						}}>
						logout
					</Link>
				</li>
				<li></li>
				<li>
					<Link to='/gallery/create'>add +</Link>
				</li>
				<li>
					<Link to={`/collection/${activeUser}`}>my images</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
