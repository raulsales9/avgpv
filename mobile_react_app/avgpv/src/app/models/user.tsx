export class User{
    id: number; 
    username: string;
    mail: string;
    roles: any;
    password: string;
    phone: string;
    constructor(id: number, username: string, mail: string, password: string, phone: string){
        this.id = id;
        this.username = username;
        this.mail = mail;
        this.password = password;
        this.phone = phone;
    }
}