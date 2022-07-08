import React, {createContext, useEffect} from 'react';
import SockJS from 'sockjs-client';
import Stomp, {Frame} from 'stompjs';
import {useAppSelector} from "../app/hook";

const URL_SERVER = process.env.REACT_APP_URL_SERVER || 'http://localhost:1000';

const Sock = new SockJS(`${URL_SERVER}/ws`);
const stompClient = Stomp.over(Sock);


export const SocketContext = createContext(stompClient);

const SocketProvider = ({children}: { children: React.ReactNode }) => {
    const {user} = useAppSelector(state => state.authSlice);

    useEffect(() => {
        if (user) {
            stompClient.connect({}, () => {
                stompClient.send(`/app/connected`, {}, `${user.email}`);
                stompClient.subscribe(`/channel/public`, (data: Frame | undefined) => {
                    console.log(data)
                }, (error: Frame | string) => {
                    console.log(error)
                });
            });
        }
    }, [user]);


    return (
        <SocketContext.Provider value={stompClient}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;