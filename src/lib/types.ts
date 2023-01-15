export type Sensor = {
  field: {
    id: string;
    User: {
      firstName: string;
      lastName: string;
    };
  };
  id: string;
  name: string;
  sensorValues: {
    timeStamp: string;
    value: string;
  }[];
  type: string;
};

export type CurrentWeather = {
  temperature: Number;
  time: Date;
  weathercode: Number;
  winddirection: Number;
  windspeed: Number;
};

export type WeatherData = {
  current_weather: CurrentWeather;
  hourly: {
    relativehumidity_2m: Number[];
    temperature_2m: Number[];
    time: string[];
    weathercode: Number[];
    windspeed_10m: Number[];
  };
};

export type SensorValue = {
  sensorId: string;
  timeStamp: string;
  value: string;
  Sensor: {
    field: {
      id: string;
      userId: string;
    };
  };
};

export type Field = {
  User: {
    firstName: string;
    lastName: string;
  };
  area: Number;
  description: string;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  sensors: Sensor[];
  unit: string;
};
