export interface Country {
  name: {
    official: string;
  };
  population: number;
  region: string;
  capital: string[];
}

export interface Countries {
  countries: Country[];
}
