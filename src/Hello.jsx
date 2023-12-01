 
// import React, { useEffect, useState } from 'react';
// import { io } from "socket.io-client";

// const Hello = () => {

//     const socket = io('http://localhost:3000', { transports: ['websocket'] })
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const userId = '123@h52Q'

//     useEffect(() => {
//         socket.emit('join', userId)
//     }, [])

//     const handleSendMessage = () => {
//         socket.emit('newMsg', { msg: input, id: userId })
//         socket.on('transfar', msg => {

//             setMessages([...messages, msg])
//             setInput('')
//         })
//     };

//     return (
//         <div>
//             <div className="max-w-md mx-auto mt-11 bg-white rounded shadow-md overflow-hidden">
//   <div className="px-4 py-2 h-48 overflow-y-auto">
//     {messages.map((v) => <p className='bg-blue-100 p-2 rounded-lg mt-2' key={Math.random()}>{v}</p>)}
//   </div>
//   <div className="flex items-center px-4 py-2 bg-white border-t">
//     <input
//       type="text"
//       value={input}
//       placeholder="Type your message..."
//       className="flex-1 py-2 px-3 border rounded-l"
//       onChange={(e) => setInput(e.target.value)}
//     />
//     <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r">
//       Send
//     </button>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Hello;


import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Hello = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const userId = '123@h52Q';

    useEffect(() => {
        const newSocket = io('http://localhost:3000', { transports: ['websocket'] });
        setSocket(newSocket);

        newSocket.emit('join', userId);

        newSocket.on('transfar', (msg) => {
            setMessages([...messages, msg]);
            setInput('');
        });

        // Clean up the socket on component unmount
        return () => {
            newSocket.disconnect();
        };
    }, [userId, messages]);

    const handleSendMessage = () => {
        socket.emit('newMsg', { msg: input, id: userId });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div>
            <div className="max-w-md mx-auto mt-11 bg-white rounded shadow-md overflow-hidden">
                <div className="px-4 py-2 h-48 overflow-y-auto">
                    {messages.map((v) => (
                        <p className="bg-blue-100 p-2 rounded-lg mt-2" key={v.id}>
                            {v.msg}
                        </p>
                    ))}
                </div>
                <div className="flex items-center px-4 py-2 bg-white border-t">
                    <input
                        type="text"
                        value={input}
                        placeholder="Type your message..."
                        className="flex-1 py-2 px-3 border rounded-l"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hello;
