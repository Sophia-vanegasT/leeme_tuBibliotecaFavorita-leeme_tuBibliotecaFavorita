import { Book } from '../types';

export type RootStackParamList = {
  Inicio: undefined;
  Detalle: { book: Book };
  Agregar: undefined;
  Editar: { book: Book };
  Favoritos: undefined;
};