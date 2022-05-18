export class Citys {
    id ?: number;
    name ?: string;
    image ?: string;
    shortDesc?: string;
    longDesc ?: string;
    type ?: string;
    
    constructor(id ?: number, name ?: string, image ?: string, shortDesc?: string, longDesc ?: string, type ?: string){
        this.id = id;
        this.name = name;
        this.image = image;
        this.shortDesc = shortDesc;
        this.longDesc = longDesc;
        this.type = type;
    }
}
