
export default interface carModel {
    name: string;

    imageUrl: string;

    type: string;

    rating?: number;

    decription?: string;

    capacity: number;

    steering: string;

    gasoline: number;

    retalPricePerDay: number;

    like?: boolean;
}