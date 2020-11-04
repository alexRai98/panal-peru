export interface Card {
  $key?: string;
  product: string;
  quantity: number;
  price: number;
  unit: Units;
}

export enum Units {
  kilogramo,
  libra,
  caja,
  cuartilla,
  arroba,
  unidad,
  ato
}
