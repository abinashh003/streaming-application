import { io } from "socket.io-client";

const socket = io("http://54.91.27.248:5000");

export default socket;