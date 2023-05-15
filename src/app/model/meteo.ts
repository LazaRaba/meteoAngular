export interface Meteo {

    cord: {
        lon: number;
        lat: number;
    };

    main: {
        temp: number;
        humidity: number;
    };

    wind: {
        speed: number;
    };

    name: string;

    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
}
