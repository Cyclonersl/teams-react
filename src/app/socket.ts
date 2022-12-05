import { useAppDispatch } from './hooks';
import { EntityId } from '@reduxjs/toolkit';
import { io, Socket } from "socket.io-client";

export default class SocketClient {

    private static instance: SocketClient;
    private socket: Socket;

    private URL = 'https://docker-tst.casan.com.br:5001';
    private PATH = '/aline/socket.io';
    private TOKEN = 'l7C9G6dUql0Z2FG8EmWM_VhNt28YQj0iLx0sAccB1';

    constructor() {
        console.log("SocketClient constructor");

        this.socket = io(this.URL, {
            path: this.PATH,
            transports: ['websocket'],
            autoConnect: true,
            query: { token: this.TOKEN }
        });

        this.socket.on('connect', () => {
            console.log('socket.io connected!')
        })

        this.socket.on('disconnect', () => {
            console.log('socket.io disconnected!')
        })
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new SocketClient();
        }

        return this.instance;
    }

    public join(equipes: EntityId[]) {
        console.log(this.socket);
        console.log(equipes)
        this.socket.emit('join/equipes', equipes);
    }
}