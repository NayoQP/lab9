
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Fnatic",
      bio: "Fnatic es el club más laureado del LoL europeo y este éxito le ha valido para convertirse en uno de los más populares del mundo. Deportivamente no ha sido su mejor año, aunque consiguieron el subcampeonato de la LEC en verano.",
      img: "assets/img/Fnatic.jpg",
      aparicion: "2000-10-25",
      posicion: "262 000"
    },
    {
      nombre: "G2 Esports",
      bio: "G2 ha sido el gran dominador europeo del año y solo FunPlus Phoenix les ha separado del Mundial. Pese a que esa derrota ha supuesto terminar con un gusto amargo, ha sido un muy buen año para ellos con dos títulos de la LEC y el MSI, siendo el primer equipo occidental en ganarlo.",
      img: "assets/img/G2.jpg",
      aparicion: "1996-08-12",
      posicion: "256 000"
 
    },
    {
      nombre: "Team Liquid",
      bio: "La LCS se le resistió mucho tiempo a Team Liquid, pero ya encadena cuatro títulos consecutivos. Pese a que fracasaron de nuevo en el Mundial, no ha sido un mal año para ellos, ya que consiguieron los dos títulos locales y llegar a la final del MSI.",
      img: "assets/img/Team-Liquid.jpg",
      aparicion: "2005-07-18",
      posicion: "244 000"
 
    },
    {
      nombre: "TSM",
      bio: "TSM es uno de los equipos más populares del mundo y no es raro escuchar a la afición corear sus siglas. No obstante, ha sido otro año nefasto para ellos en lo deportivo y se han quedado fuera del Mundial.",
      img: "assets/img/TSM.jpg",
      aparicion: "1998-11-02",
      posicion: "240 000"

    },
    {
      nombre: "Cloud9",
      bio: "Cloud9 sigue consolidándose entre los equipos favoritos del público, aunque sus datos ya se alejan de los dos más populares de su región. Este año no pudieron salvar el honor de su región en el Mundial y cayó en grupos. ",
      img: "assets/img/Cloud9.jpg",
      aparicion: "2009-11-16",
      posicion: "213 000"
    },
    {
      nombre: "Origen",
      bio: "RFRSH —ahora su escisión Astralis Group— se hizo con la marca Origen para entrar en la LEC confiando en que mantuviese su popularidad pese a los años convulsos de los que venía. Los datos parece que le han dado la razón y se colocan en la tercera plaza en un año muy dispar para ellos: subcampeonato en primavera y fuera de playoffs en verano.",
      img: "assets/img/Origen.jpg",
      aparicion: "1997-09-14",
      posicion: "212 000"

    },
    {
      nombre: "Splyce",
      bio: "Splyce fue este año el tercer representante europeo en el Mundial y allí dio una buena imagen al pasar de grupos y ponerle las cosas difíciles a SKT. Las serpientes no volverán como tal a la LEC, ya que a partir del próximo split harán un rebranding a MAD Lions.",
      img: "assets/img/Splyce.jpg",
      aparicion: "2008-05-09",
      posicion: "181 000"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: any ){
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  posicion: string;
  idx?: number;
};
