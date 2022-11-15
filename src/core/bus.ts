import mitt from 'mitt'

type Events = {
    sendMessage: string;
    switchRoom: string;
    logout: void;
};

export default mitt<Events>()