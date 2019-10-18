import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
                Welcome {{ name }}
              </h2>
              <input [id]= "myId" type="text" value="Rushikesh"/>
              <input bind-disabled="isDisabled" id= {{myId}} type="text" value="Rushikesh"/>`,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = "Rushikesh";
  public myId = "testId";
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  

}
