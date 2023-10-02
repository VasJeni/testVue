export interface Planet extends CreatedEdited{
    name: string;
    rotation_period: string;
    orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
    residents: string[];
    films: string[];
    url:  string;
}
export interface GetList <T>{
    count: number;
    next: string | null;
    previous : null | string;
    results : T[]
}

interface CreatedEdited{
    created: string;
    edited:  string | null;
}