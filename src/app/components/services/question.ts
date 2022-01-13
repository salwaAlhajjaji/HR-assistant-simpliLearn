import { Option } from './option';
export interface Question {
    qId: number;
    qTxt: string;
    options: Option[];
    answer: string;
    slesctedOption: string;

}
