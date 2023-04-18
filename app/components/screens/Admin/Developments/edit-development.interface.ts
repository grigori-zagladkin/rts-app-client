import { IDevelopment } from "@/core/shared/types/development.types";

export interface IEditDevelopment extends Omit<IDevelopment, "id"> {}
