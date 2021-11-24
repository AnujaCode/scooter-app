class user{
    constructor(name,username,password,age){
        this.name = name
        this.username = username
        this.password = password
        this.age = age 

    }

     appDownload(){
         if (this.password == "Abc123" && this.username == "Anuja123")
         return this.name + " " + "is valid user";
         

         else {
            return `${this.name} is not valid user Please download the Scooter-Hire app`
         }

     }
}