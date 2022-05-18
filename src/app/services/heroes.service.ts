import { Injectable } from '@angular/core';
import { Heroes } from '../models/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
 heroes : Heroes[] = [
  {
    image: '../../../../assets/heroes/athkor.png', 
    name: 'Athkor', 
    history: ' Issue d\'une tribu Drakeide du pays de Jordoxia, il fait partie d\'une ligné ancestral disposant d\'une queue. Gladiateur dans son village, une grande carriere lui était destiné. Devenu chasseur de prime à la capital pour accroitre sa gloire et celle de son clan, il finit par être piègé par le roi qui a voulut se débarrasser de lui et qui s\'en ai prit a son village. Survecu de justesse, il a voyagé jusqu\'en Antarse pour accroitre en force et vengé son village.',
    race: 'Drakéide', 
    classe: 'Barbare',
    taille: 2.15,
    poids: 175,
    age: 22,
    level: 8,
    life: 60,
    mana: 35,
    phyisique: 75,
    mental: 50,
    equipmment_1: 'Hache a une main (Dmg 1D8)',
    equipmment_2: 'Bouclier en os de dragon (Déf +2 / Dmg+ 1)',
    equipmment_3: 'Armure lourde partiel (Déf +3)',
    equipmment_4: 'Epée à deux mains du roi Gobelin (Dmg 1D8 + un fois chargé capacité a plonger dans le noir total une zone)',
    equipmment_5: 'Chapelet avec des cristaux de puissance (artefact gobelin monttrant sa puissance)',
    piece: 456
  },
  {
    image: '../../../../assets/heroes/fferyl.jpg', 
    name: 'Fferyl', 
    history: ' Disciple du temple de Rori,Il est né quelque part mais a été conduit des lors au temple par un homme dont on ne connais pas l\'identité. Jeune, lors d\'une méditation, il a réussi a rentré en lien presque direct avec le dieu de la Terre Rori. Il a surprit une discution entre lui et quelqu\'un d\'autre expliquant qu\'il n\'était pas d\'avis de se venger des hommes  lors de la grande Guerre. Il a décidé de partir sur les route afin d\'en apprendre plus sur la grande guerre et les dieux.',
    race: 'Demi Élementaire', 
    classe: 'Moine',
    taille: 175,
    poids: 80,
    age: 20,
    level: 6,
    life: 42,
    mana: 20,
    phyisique: 75,
    mental: 45,
    equipmment_1: 'Naginata de topaze (1D6+1 Dmg)',
    equipmment_2: 'Shuriken (1D4 Dmg)',
    equipmment_3: 'Armure lourde partiel (Déf +3)',
    equipmment_4: 'Necessaire d\'herboristerie',
    equipmment_5: 'Collier de Gaia (+1PSY tous les 2 tour)',
    piece: 120
  },
  {
    image: '../../../../assets/heroes/mia.png', 
    name: 'Mia', 
    history: `Né dans le dersert Karmin près de l'Oasis d'ovo, elle a grandie seul et sans famille. La seul chose qu'elle sait c'est qu'elle possède un couteau Orné depuis toujours. Jeune, durant une de ses balades dans le déserts elle a eu la sensation de voir de l'autre coté du brouillard. Depuis sa vision dans le désert elle a décidé de voyager à travers le pays pour en apprendre plus sur le brouillard. Enfant lors de sa premiere escapade en ville, elle a été sauvé un Djinn du Chaos prénomé "Shad".`,
    race: 'Tabaxi', 
    classe: 'Roublarde',
    taille: 1.75,
    poids: 66,
    age: 21,
    level: 7,
    life: 36,
    mana: 25,
    phyisique: 60,
    mental: 60,
    equipmment_1: '2 Karambite (2D4+2 Dmg)',
    equipmment_2: 'Armure de cuir à plaque (Déf +2)',
    equipmment_3: '3 couteau de lancé (1D4 Dmg)',
    equipmment_4: 'Poignard caché (1D6 Dmg)',
    equipmment_5: 'Bague de Neri (octroie la capacité de lancer une boule de feu - 1D4 Dmg)',
    piece: 168
  },
  {
    image: '../../../../assets/heroes/Psycram.jpg', 
    name: 'Psyckram', 
    history: `Fils de Forgeron né dans le pays de Braniaa ou il a grandit paisiblement jusqu'à ses 13ans.  Lors d'une journée comme une autre son village a été pulverisé. Dans l'action il a perdu tout souvenir de son enfance sauf la forge. Formé par son père Akim à la forge et au combat il a secouru les survivants de son village en les guidant vers un nouveau lieu de vis. Ses outils sont le symbole de sa vie passée, et il les portent pour ne jamais oublier ses racines. Le dernier souvenir de son père est son marteau.`,
    race: 'Humain', 
    classe: 'Guerrier',
    taille: 1.85,
    poids: 110,
    age: 30,
    level: 6,
    life: 36,
    mana: 16,
    phyisique: 70,
    mental: 50,
    equipmment_1: 'Epée longue (1D8 Dmg)',
    equipmment_2: 'Ralonge Vénadium (permet de transformer l\'épée longue en épée à deux mains augmentant les dégats à 1D10 Dmg)',
    equipmment_3: 'Armure de nithril (Déf +3)',
    equipmment_4: 'Bouclier (Déf +2)',
    equipmment_5: 'Nécéssaire de forge',
    piece: 90
  }]
  constructor() { }
  
  addHeroe(heroe: Heroes) :void {
    this.heroes.push(heroe);
  }

  deleteHeroe(name ?: string) :void {
    this.heroes = this.heroes.filter(heroe => heroe.name != name);
  }

  findByName(name : string) :Heroes {
    return this.heroes.filter(heroe => heroe.name == name)[0]
   }
}
