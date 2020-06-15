export module OpenData {

    export interface FieldAliases {
        Diepte: string;
        Datum: string;
    }

    export interface Field {
        name: string;
        type: string;
        alias: string;
        length?: number;
    }

    export interface Attributes {
        Diepte: number;
        Datum: any;
    }

    export interface Feature {
        attributes: Attributes;
    }

    export interface RootObject {
        displayFieldName: string;
        fieldAliases: FieldAliases;
        fields: Field[];
        features: Feature[];
    }

}

