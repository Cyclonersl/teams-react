import { ScheduledService } from './ScheculedService';
export interface TeamControlling {
    id: number;
    name: string;
    color: string;
    status: string;
    services?: ScheduledService[];
}