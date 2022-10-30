import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedradio='All';
  @Output() filter:EventEmitter<string>=new EventEmitter<string>();
changeinradio()
{
 this.filter.emit(this.selectedradio);
  
}

}


