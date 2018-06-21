export interface IUser {
    id: number;
    name: string;
}

export class User implements IUser {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}