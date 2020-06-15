export module IOpenData {

    export interface FieldAliases {
    }

    export interface SpatialReference {
    }

    export interface Attributes {
        gemeente: string;
    }

    export interface Geometry {
        x: number;
        y: number;
    }

    export interface Feature {
        attributes: Attributes;
        geometry: Geometry;
    }

    export interface RootObject {
        displayFieldName: string;
        fieldAliases: FieldAliases;
        geometryType: string;
        spatialReference: SpatialReference;
        fields: any[];
        features: Feature[];
    }

}

