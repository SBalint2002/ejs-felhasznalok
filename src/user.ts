export class User {
    name: string;
    gender: string;
    birthDate: Date;
    balance: number;
    isActive: boolean;

    constructor(name: string, gender: string, birthDate: Date, balance: number, isActive: boolean) {
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.balance = balance;
        this.isActive = isActive;
    }
}