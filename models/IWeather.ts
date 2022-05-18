interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Current {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
}

interface Weather2 {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Rain {
    '1h': number;
}

interface Hourly {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather2[];
    pop: number;
    rain: Rain;
}

interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

interface Weather3 {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather3[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}

export interface IWeather {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    hourly: Hourly[];
    daily: Daily[];
}