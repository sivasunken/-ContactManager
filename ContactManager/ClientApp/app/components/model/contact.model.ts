export class Name {
    id: number;
    first: string;
    last: string;
}

export class Contact {
    birthday: string;
    email: string;
    telephone: string;
    name: Name = new Name();
}