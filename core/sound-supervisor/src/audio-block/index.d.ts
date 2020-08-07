import PAClient, { AuthInfo, ClientInfo, ServerInfo } from '@tmigone/pulseaudio';
export interface BalenaAudioInfo {
    client: ClientInfo;
    protocol: AuthInfo;
    server: ServerInfo;
}
export default class BalenaAudio extends PAClient {
    address: string;
    cookie: string;
    subToEvents: boolean;
    name: string;
    defaultSink: string;
    constructor(address?: string, cookie?: string, subToEvents?: boolean, name?: string);
    listen(): Promise<BalenaAudioInfo>;
    setVolume(volume: number, sink?: string | number): Promise<import("@tmigone/pulseaudio").VolumeInfo>;
    getVolume(sink?: string | number): Promise<number>;
}
