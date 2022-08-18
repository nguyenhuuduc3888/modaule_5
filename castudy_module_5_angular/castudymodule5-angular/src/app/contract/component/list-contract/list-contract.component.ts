import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractList: Contract[];

  constructor(private contract: ContractService) {
  }

  ngOnInit(): void {
    this.contractList = this.contract.getAll();
  }

}
