export class User {
    name: string;
    gender: string;
    birthDate: Date;
    balance: number;
    isActive: boolean;

    get nameStr(): string {
        return this.name;
    }

    get genderStr(): string {
        return this.gender;
    }

    get brithDateStr(): string {
        return this.birthDate.toUTCString();
    }

    get birthDateYear(): number{
        return this.birthDate.getFullYear();
    }

    get birthDateMonth(): number{
        return this.birthDate.getMonth()+1;
    }

    get birthDateDay(): number{
        return this.birthDate.getDate();
    }

    get balanceNum(): number {
        return this.balance;
    }

    get active(): string {
        return this.isActive ? "Active" : "Inactive";
    }

    constructor(name: string, gender: string, birthDate: Date, balance: number, isActive: boolean) {
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.balance = balance;
        this.isActive = isActive;
    }
}