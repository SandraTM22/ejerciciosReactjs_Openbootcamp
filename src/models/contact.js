export class Contact{
    name = '';
    lastName = '';
    email = '';
    userStatus = false;

    constructor(name,lastName,email,userStatus){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.userStatus = userStatus;
    }
}