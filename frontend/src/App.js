import { useState } from 'react';
import SockJsClient from 'react-stomp';
import './App.css';

const SOCKET_URL = 'http://localhost:8080/ws-message';

function App() {
	const [message, setMessage] = useState('Server message here.');

	const handleConnected = () => {
		console.log('Connected');
	};

	const handleMessageReceived = (message) => {
		setMessage(message.message);
	};

	return (
		<div className='App'>
			<SockJsClient
				url={SOCKET_URL}
				topics={['/topic/message']}
			/>
		</div>
	);
}

export default App;
