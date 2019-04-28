import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      

      new TextboxQuestion({
        key: 'Name',
        label: 'name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'date',
        label: 'Date',
        type: 'date',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}


