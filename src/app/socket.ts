import { EntityId } from '@reduxjs/toolkit';
// @ts-ignore
import io from "socket.io-client";
import { LocalizacaoEquipeMessage } from './../model/LocalizacaoEquipeMessage';
import { localizacaoUpdate } from './slices/localizacoes';

export default class SocketClient {

    private static instance: SocketClient;
    private socket: any;

    private URL = 'https://docker-tst.casan.com.br:5001/';
    private PATH = '/aline/socket.io';
    private TOKEN = 'l7C9G6dUql0Z2FG8EmWM_VhNt28YQj0iLx0sAccB1';

    constructor() {
        this.socket = io.connect(this.URL, {
            path: this.PATH,
            transports: ['websocket'],
            query: { token: this.TOKEN }
        });
    }

    async connect() {
        //const dispatch = useAppDispatch()
        this.socket.on('connect', () => {
            console.log('socket.io connected!')
        })

        this.socket.on('disconnect', () => {
            console.log('socket.io disconnected!')
        })
    }

    public on(channel: string, callback: (response: any) => void) {
        this.socket.on(channel, (data: any) => callback(data))
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new SocketClient();

            this.instance.connect()
        }

        return this.instance;
    }

    public join(equipes: EntityId[]) {
        this.socket.emit('join/equipes', equipes);
    }
}