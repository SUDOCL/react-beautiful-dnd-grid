import React from "react";
import { Omit } from "../util/omit";
interface Location {
    id: string;
    index: number;
}
export interface DragAndDropResult {
    source: Location;
    destination: Location;
}
export interface Chunk {
    id: string;
    items: any[];
}
export interface Props {
    chunks: Chunk[];
    onDragEnd(result: DragAndDropResult): void;
}
export interface WithMaxItemsProps {
    items: any[];
    maxItems?: number;
    onDragEnd(sourceIndex: number, destinationIndex: number): void;
}
export declare const withMaxItems: <T, P extends Props>(Component: React.ComponentType<P>, createId: () => string) => React.ComponentType<Omit<P, Props> & WithMaxItemsProps>;
export {};
