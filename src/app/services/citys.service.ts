import { Injectable } from '@angular/core';
import { Citys } from '../models/citys';

@Injectable({
  providedIn: 'root'
})
export class CitysService {

  citys : Citys[] = [
    {
        id : 1,
        name : 'Helir',
        image : '../../../../assets/city/helir.jpg',
        shortDesc: `Helir est la capital d'Antharse, il s'agit du coeur de tous les marchés de la région.`,
        longDesc: `Helir est la capital d'Antharse, le roi ses généraux et le ministre de la magie s'y trouve. Il s'agit du coeur de tous les marchés de la région. C'est égalemet à hélir que nos aventuriers vont se retourver engagé par le roi pour la quête des orbes.`
    },
    {
        id : 2,
        name : 'Jalow',
        image : '../../../../assets/city/jalow.jpg',
        shortDesc: `Jalow est le vilage des gobelins et des trolls, ils sont dirigés par le Roi gobelin Jourde.`,
        longDesc: `Jalow est le vilage des gobelins et des trolls, ils sont dirigés par le Roi gobelin Jourde. C'est un peuple de profiteur, beaucoup de groupe de gobelins parcours les terres d'Antharse à la recherche de faible personnes à piller.`
    },
    {
        id : 3,
        name : 'La marche des dieux',
        image : '../../../../assets/city/marche.jpg',
        shortDesc: `Antharse samourai de feu implora l'aide des soleils pour stopper les autres dieux`,
        longDesc: `A force de voir les Hommes se moquer des dieux, ceux ci apparurent des cieux au centre de cormundum pour punir les Hommes et leur blasphème. C'est à la marche des dieux qu'Antharse samourai de feu implora l'aide des soleils pour les stopper. Rao plongeat dans sa lame et c'est anisi qu'il soumit les dieux à sa volonté et les enferma dans 4 sphères de Source. Sa légende est écrite au sommet de la marche des dieux`
    },
    {
        id : 4,
        name : 'Oxor',
        image : '../../../../assets/city/oxor.jpg',
        shortDesc: `Au sommet du mont syran se trouve la ville d'Oxor, habité par le peuple du vent.`,
        longDesc: `Au sommet du mont syran se trouve la ville d'Oxor, habité par le peuple du vent. Pendant des siècles ils ont été persécuté se qui les à poussés aujourd'hui à se retrancher à Oxor protégé par des vents magiques qui balayent la montagne empechant quiconque souhaite s'en approcher sauf quelques guides.`
    },
    {
        id : 5,
        name : 'Patir',
        image : '../../../../assets/city/patir.jpg',
        shortDesc: `Dacir est un village caché dans la cime des arbres de la forêt de Lys. Il est contruit autour du temple de la terre.`,
        longDesc: `Dacir est un village caché dans la cime des arbres de la forêt de Lys. Il est contruit autour du temple de la terre. Ce village est uniquement peuplé de moine apartenant à toutes les races et tous les éléments. Au sommet du temple se trouve le grand maitre et doyen Uhlm surnommé "La paume du néant"`
    },
    {
        id : 6,
        name : 'Temple de l\'origine',
        image : '../../../../assets/city/temple.jpg',
        shortDesc: `Dans le temple de l'origine repose habituellement les orbes élémentaire de feu, d'eau, de terre et de vent`,
        longDesc: `Dans le temple de l'origine repose habituellement les orbes élémentaire de feu, d'eau, de terre et de vent représentant chacune les 4 dieux directement liés à leurs éléments.  protégé par un gardien d'une puissance incommensurable, elles furent pendant des siècles loint du dangé...`
    },
    {
        id : 7,
        name : 'Zul',
        image : '../../../../assets/city/zul.jpg',
        shortDesc: `Zul est une ville très réputé pour sa taverne "la tour de l'oublie"`,
        longDesc: `Zul est une ville très réputé pour sa taverne "la tour de l'oublie" nomé ainsi car une immense tour faites de bouteille d'alcool situé en son centre. La ville est bondé de monde et on peut y retrouve tellement de races différentes que même Athkor se fond dans la masse.`
    },
  ];

  constructor() { }

  addCitys(city: Citys) :void {
    this.citys.push(city);
  }

  findById(id: number) :Citys {
   return this.citys.filter(city => city.id == id)[0]
  }
}
