export class Thing{
    id:number
    name:string

    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }

    myMethod():number{
        return 10
    }
}