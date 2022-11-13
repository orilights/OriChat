import mitt from 'mitt'

type Events = {
    sendMessage: string;
    switchRoom: string;
};

export default mitt<Events>()