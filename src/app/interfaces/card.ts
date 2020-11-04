export interface Card {
  $key?: string;
  product: string;
  quantity: number;
  price: number;
  unit: Units;
}

export enum Units {
  kilogramo = 'Kilorgramo',
  libra = 'Libra',
  caja = 'Caja',
  cuartilla = 'Cuartilla',
  arroba = 'Arroba',
  unidad = 'Unidad',
  ato = 'Ato',
}
