import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-backenddata',
  templateUrl: './backenddata.component.html',
  styleUrls: ['./backenddata.component.css']
})
export class BackenddataComponent implements OnInit {

  backendMessage:string;
  inputText:string;
  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  // getBackendData(){
  //   console.log(this.service.executeDataEntryService());
  //   this.service.executeDataEntryService().subscribe(
  //     response => this.handleSuccessfulResponse(response)
  //   );
  //   console.log("last line of backenddata");
  // }


  getBackendData(){
    console.log(this.service.executeDataEntryService(this.inputText));
    this.service.executeDataEntryService(this.inputText).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    //console.log(this.backendMessage);
    console.log("last line of backenddata");
  }

  handleSuccessfulResponse(response){
    this.backendMessage = JSON.stringify(response);
    console.log(this.backendMessage);
    //console.log(response.message);
  }

}
