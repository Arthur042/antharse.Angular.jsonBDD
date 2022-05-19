export class Heroes {
    id: number;
    image?: string;
    name?: string;
    history?: string;
    race?: string;
    classe?: string;
    taille?: number;
    poids?: number;
    age?: number;
    level?: number;
    life?: number;
    mana?: number;
    phyisique?: number;
    mental?: number;
    equipmment_1?: string;
    equipmment_2?: string;
    equipmment_3?: string;
    equipmment_4?: string;
    equipmment_5?: string;
    piece?: number;

    constructor(id: number, image?: string, name?: string, history?: string, race?: string, classe?: string, taille?: number, poids?: number, age?: number, level?: number, life?: number, mana?: number, phyisique?: number, mental?: number,equipmment_1?: string,equipmment_2?: string, equipmment_3?: string,equipmment_4?: string, equipmment_5?: string,piece?: number){
        this.id = id;
        this.image = image;
        this.name = name;
        this.history = history;
        this.race = race;
        this.classe = classe;
        this.taille = taille;
        this.poids = poids;
        this.age = age;
        this.level = level;
        this.life = life;
        this.mana = mana;
        this.phyisique = phyisique;
        this.mental = mental;
        this.equipmment_1 = equipmment_1 ;
        this.equipmment_2 = equipmment_2 ;
        this.equipmment_3 = equipmment_3 ;
        this.equipmment_4 = equipmment_4 ;
        this.equipmment_5 = equipmment_5 ;
        this.piece = piece ;
    }
}