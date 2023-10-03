export type DishGarnish = {
    id: string;
    name: string;
    description?: string;
    paused?: string;
    active: boolean;
    image?: string;
    mandatory: boolean;
    maximum: number;
    minimum: number;
    store_id: string;
    dish_garnish_choices: Dishgarnishchoice[];
};

export type Dishgarnishchoice = {
    id: string;
    name: string;
}



export {}