import { Component } from '@angular/core';
import { moveEmbeddedView } from '@angular/core/src/view';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ampangularapp';
  encodingMessage;
  buttonClick = false;
  values = '';
  test = '';

  // fake data
  public moviesList = [
    { id: 1, title: 'A Star is Born', movie: 'assets/imgassets/astar.jpg', status: false,
    url: '//seusherams-usct.streaming.media.azure.net/5282e59e-fbd3-4e61-aab7-bc1d567793c9/star_trails.ism/manifest'},
    { id: 2, title: 'Black Panther', movie: 'assets/imgassets/blackp.jpg', status: false,
    url: '//seusherams-usct.streaming.media.azure.net/a70afc20-234d-4f63-9e21-ef55d0194283/Panasonic_HDC_TM_700_P_50i.ism/manifest'},
    { id: 3, title: 'Bohemian Rhapsody', movie: 'assets/imgassets/br.jpg', status: false,
    url: '//seusherams-usct.streaming.media.azure.net/f08db708-0a99-45d6-b3fe-b3de9992a6ac/jellyfish-25-mbps-hd-hevc.ism/manifest'},
    { id: 4, title: 'Ralph Breaks the Internet', movie: 'assets/imgassets/ralph.jpg', status: false,
    url: '//seusherams-usct.streaming.media.azure.net/c67cdfc7-2375-49e9-b413-d192cb48c60d/SampleVideo_1280x720_1mb.ism/manifest'}
  ];

  encodeMovie(event: any) {
    console.log(event.target);
    this.test = 'encoding...' + event.target.id;
  }
}
