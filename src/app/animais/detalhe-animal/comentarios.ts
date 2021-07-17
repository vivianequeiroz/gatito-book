export interface Comentarios {
  date: Date;
  text: string;
  userName: string;
}

export type Comentario = Array<Comentarios>;
