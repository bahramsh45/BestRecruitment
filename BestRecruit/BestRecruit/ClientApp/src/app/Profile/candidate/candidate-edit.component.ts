
import { Component } from '@angular/core'
import * as can from './interface/candidate'


@Component({
  selector: 'candidate-edit',
  templateUrl: './candidate-edit.component.html'
})

export class CandidateComponent {
  cos: can.Candidate.candidate
}
