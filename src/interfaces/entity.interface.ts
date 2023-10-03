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

interface People extends CreatedEdited{
    name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: [];
	vehicles: string[];
	starships: string[];
	url: string;
}

interface Films extends CreatedEdited {
    title: string;
    episode_id: number;
    opening_crawl:  string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    url: string;
}

interface Speccies extends CreatedEdited{
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: string[];
    films: string [];
    url: string; 
}

interface Vehicles extends CreatedEdited{
    name: string;
    model: string ;
    manufacturer: string ;
    cost_in_credits: string ;
    length: string;
    max_atmosphering_speed: string;
    crew: string ;
    passengers:string ;
    cargo_capacity:string ;
    consumables:string ;
    vehicle_class:string ;
    pilots:string[];  //need check
    films:string [];
    url:string;
}
interface Starships extends CreatedEdited{
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    url: string;
}
