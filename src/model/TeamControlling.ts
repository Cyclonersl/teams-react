import { ScheduledService } from './ScheculedService';
export interface TeamControlling {
    id: number;
    name: string;
    services?: ScheduledService[];
    color: string;
    status: 'online' | 'offline' | 'deslogado';
}