import { Langage } from './Langage.model';

export interface BasiData {
  id?: number;
  name: string;
  dis: string;
  langage: Langage[];
}
