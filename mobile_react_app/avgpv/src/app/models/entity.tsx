export class Entity {
    id: number;
    id_user: number;
    date: Date;
  
    constructor(id: number, id_user: number, date: Date) {
      this.id = id;
      this.id_user = id_user;
      this.date = date;
    }
  }
  