import { ICompetence } from "@/core/shared/types/competencies.types";
import { keys } from "ts-transformer-keys";

export interface IEditCompetence extends Omit<ICompetence, "id"> {}
export const keyOfEditCompetence = keys<IEditCompetence>();
