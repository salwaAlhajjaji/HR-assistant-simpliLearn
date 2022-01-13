import { Question } from './../services/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.resultCount = 0;
    localStorage.setItem('result', "");
  }
  answerAllQ: boolean = false;
  resultCount: number = 0;
  allQuestions: Question[] = [
    {
      qId: 1,
      qTxt: "'OS' computer abbreviation usually means ?",
      options:
        [
          { optionVal: '1', optionTxt: "Order of Significance" },
          { optionVal: '2', optionTxt: "Open Software" },
          { optionVal: '3', optionTxt: "Operating System" },
          { optionVal: '4', optionTxt: "Optical Sensor" }
        ],
      answer: '3',
      slesctedOption: ''
    },
    {
      qId: 2,
      qTxt: "What is part of a database that holds only one type of information?",
      options:
        [
          { optionVal: '1', optionTxt: "Report" },
          { optionVal: '2', optionTxt: "Field" },
          { optionVal: '3', optionTxt: "Record" },
          { optionVal: '4', optionTxt: "File" }
        ],
      answer: '2',
      slesctedOption: ''
    },
    {
      qId: 3,
      qTxt: "'.MOV' extension refers usually to what kind of file?",
      options:
        [
          { optionVal: '1', optionTxt: "Image file" },
          { optionVal: '2', optionTxt: "Animation/movie file" },
          { optionVal: '3', optionTxt: "Audio file" },
          { optionVal: '4', optionTxt: "MS Office document" }
        ],
      answer: '2',
      slesctedOption: ''
    },
    {
      qId: 4,
      qTxt: "Made from a variety of materials, such as carbon, which inhibits the flow of current...?",
      options:
        [
          { optionVal: '1', optionTxt: "Resistor" },
          { optionVal: '2', optionTxt: "Inductor" },
          { optionVal: '3', optionTxt: "Capacitor" },
          { optionVal: '4', optionTxt: "Choke" }
        ],
      answer: '1',
      slesctedOption: ''
    },
    {
      qId: 5,
      qTxt: "'DB' computer abbreviation usually means ?",
      options:
        [
          { optionVal: '1', optionTxt: "Double Byte" },
          { optionVal: '2', optionTxt: "Data Block" },
          { optionVal: '3', optionTxt: "Driver Boot" },
          { optionVal: '4', optionTxt: "Database" }
        ],
      answer: '4',
      slesctedOption: ''
    },
    {
      qId: 6,
      qTxt: "What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines.",
      options:
        [
          { optionVal: '1', optionTxt: "WAN (Wide Area Network)" },
          { optionVal: '2', optionTxt: "LAN (Local Area Network)" },
          { optionVal: '3', optionTxt: "URL (Universal Resource Locator)" },
          { optionVal: '4', optionTxt: "World Wide Web" }
        ],
      answer: '1',
      slesctedOption: ''
    },
    {
      qId: 7,
      qTxt: "'.TMP' extension refers usually to what kind of file?",
      options:
        [
          { optionVal: '1', optionTxt: "Compressed Archive file" },
          { optionVal: '2', optionTxt: "Temporary file" },
          { optionVal: '3', optionTxt: "Image file" },
          { optionVal: '4', optionTxt: "Audio file" }
        ],
      answer: '2',
      slesctedOption: ''
    },
    {
      qId: 8,
      qTxt: "'CD' computer abbreviation usually means ?",
      options:
        [
          { optionVal: '1', optionTxt: "Command Description" },
          { optionVal: '2', optionTxt: "Change Data" },
          { optionVal: '3', optionTxt: "Copy Density" },
          { optionVal: '4', optionTxt: "Compact Disc" }
        ],
      answer: '4',
      slesctedOption: ''
    },
    {
      qId: 9,
      qTxt: "What is the term to ask the computer to put information in order numerically or alphabetically?",
      options:
        [
          { optionVal: '1', optionTxt: "Crop" },
          { optionVal: '2', optionTxt: "Report" },
          { optionVal: '3', optionTxt: "Sort" },
          { optionVal: '4', optionTxt: "Record" }
        ],
      answer: '3',
      slesctedOption: ''
    },
    {
      qId: 10,
      qTxt: "What's a web browser?",
      options:
        [
          { optionVal: '1', optionTxt: "A kind of spider" },
          { optionVal: '2', optionTxt: "A computer that stores WWW files" },
          { optionVal: '3', optionTxt: "A person who likes to look at websites" },
          { optionVal: '4', optionTxt: "A software program that allows you to access sites on the World Wide Web" }
        ],
      answer: '4',
      slesctedOption: ''
    },

  ];

  radioChange(event: any, id: number) {
    this.allQuestions.find(function (obj) {
      if (obj.qId == id) {
        obj.slesctedOption = event.target.value;
      }
    })
    this.answerAll();
  }

  submitAssessment() {
    this.resultCount = 0;
    this.allQuestions.forEach(element => {
      (element.slesctedOption == element.answer) ? this.resultCount++ : null;
    });
    this.resultCount = (this.resultCount / this.allQuestions.length) * 100;
    this.resultCount = Math.round(this.resultCount)
    this.router.navigate(['/result'])
    localStorage.setItem('result', "" + this.resultCount)
  }

  answerAll() {
    let result = this.allQuestions.filter((obj) => obj.slesctedOption === '');
    (result.length == 0) ? this.answerAllQ = true : this.answerAllQ = false;
  }
}
