import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mordor',
  templateUrl: './mordor.component.html',
  styleUrl: './mordor.component.css'
})
export class MordorComponent implements OnInit{
  ngOnInit(): void {
    let paths = document.querySelectorAll<SVGPathElement>('path');
    paths.forEach(country => {
      
      //If mouseover, fill the country
      country.addEventListener('mouseover', event => {
        const mouse = event.target as SVGPathElement;
        if (mouse.id == "path1" ) {
          let text: string = "Four score";
          document.getElementById('road')!.innerText = text;
        }
      });
      
      //Unfill without mouseover
      country.addEventListener('mouseleave', event => {
        const mouse = event.target as SVGPathElement;
        if (mouse) {
          let text: string = "";
          document.getElementById('road')!.innerText = text;
        }
      });

    });
    async function logMovies() {
      const response = await fetch("https://sheetdb.io/api/v1/7n3c27rmub5c8");
      const movies = await response.json();
      let dataPath: any = movies[31];
      
      let gol:string = dataPath.Gollum + ' mi';         
      document.getElementById('Gollum')!.innerText = gol;

      let gim:string = dataPath.Gimli + ' mi';         
      document.getElementById('Gimli')!.innerText = gim;

      let sam:string = dataPath.Gollum + ' mi';         
      document.getElementById('Sam')!.innerText = sam;
      
      console.log(gol);
      console.log(dataPath);
    }

    
    

    logMovies();
  }



}

