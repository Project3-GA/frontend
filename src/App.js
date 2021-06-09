import React, { useState } from 'react';
import Form from './Form';
import Cardform from './Cardform';
function App() {
	const [loginForm, setLoginForm] = useState({ email: '', password: '' });
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	return (
		<main>
			<h1>React Forms</h1>
			<Form
				loginForm={loginForm}
				user={user}
				setUser={setUser}
				setLoginForm={setLoginForm}
			/>
			<Cardform loginForm={loginForm} />
			{/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          required 
          placeholder="enter your email" 
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
        <label htmlFor="longtext">Long Text</label>
        <textarea 
          name="longtext" 
          id="longtext" 
          cols="30" 
          rows="10" 
          value={longtext} onChange={event => setLongtext(event.target.value)}></textarea>
        <select 
          name="select" 
          id="select"
          value={select}
          onChange={event => setSelect(event.target.value)}
        >
          <option value="mon">Monday</option>
          <option value="wed">Wednesday</option>
          <option value="fri">Friday</option>
        </select>
        <button type="submit">submit</button>
      </form> */}
		</main>
	);
}

export default App;
