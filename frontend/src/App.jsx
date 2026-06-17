
import React,{useRef,useState} from 'react';

export default function App(){
 const videoRef=useRef();
 const [msgs,setMsgs]=useState([]);
 const [input,setInput]=useState('');

 async function startCamera(){
   const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:true});
   videoRef.current.srcObject=stream;
 }
 async function shareScreen(){
   const stream = await navigator.mediaDevices.getDisplayMedia({video:true});
   videoRef.current.srcObject=stream;
 }
 function send(){
   if(!input) return;
   setMsgs([...msgs,input]);
   setInput('');
 }
 return <div style={{padding:20}}>
   <h1>Livestream MVP</h1>
   <button onClick={startCamera}>Go Live</button>
   <button onClick={shareScreen}>Share Screen</button><br/><br/>
   <video ref={videoRef} autoPlay muted playsInline width="600" style={{border:'1px solid black'}} />
   <h3>Chat</h3>
   <input value={input} onChange={e=>setInput(e.target.value)} />
   <button onClick={send}>Send</button>
   {msgs.map((m,i)=><div key={i}>{m}</div>)}
 </div>
}
