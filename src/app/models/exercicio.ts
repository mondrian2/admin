export class Exercicio {
    id: number;
    comando: string;
    itens: Item[];
}

export class Item {
    id: number;
    label: string;
    exercicio_id: number;
    options: string[];
    correta?: string;
}