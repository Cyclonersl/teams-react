import { ScheduledService } from './ScheculedService';
export interface TeamControlling {
    id: number;
    name: string;
    services?: ScheduledService[];
}