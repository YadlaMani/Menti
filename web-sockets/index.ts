import { WebSocketServer } from "ws";
const wss = new WebSocketServer({
  port: Number(process.env.WS_PORT) || 5050,
});
