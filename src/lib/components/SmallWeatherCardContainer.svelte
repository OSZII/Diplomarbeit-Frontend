<script lang="ts">
  import SmallWeatherCard from "./SmallWeatherCard.svelte";

  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  type WeatherData = {
    current_weather: Object;
    hourly: {
      relativehumidity_2m: Number[];
      temperature_2m: Number[];
      time: string[];
      weathercode: Number[];
      windspeed_10m: Number[];
    };
  };

  export let weatherData: WeatherData | null = null;

  export let placeholder: Boolean = false;
  let dataObject: any = {};

  // for example if it is the 15th january the line below will be 15
  let currentDate = new Date().getDate();

  if (!placeholder && weatherData != null) {
    // console.log("weatherData");
    // console.log(weatherData.hourly.time);
    let times = weatherData.hourly.time;
    let humidities = weatherData.hourly.relativehumidity_2m;
    let weatherCodes = weatherData.hourly.weathercode;
    let windSpeeds = weatherData.hourly.windspeed_10m;
    let temperatures = weatherData.hourly.temperature_2m;

    // let parsedDate = currentDate
    //   .toString()
    //   .substring(0, currentDate.toISOString().indexOf("T"));
    // console.log(parsedDate);

    for (let i = 0; i < weatherData.hourly.time.length; i++) {
      let date = new Date(times[i]).getDate();
      if (date != currentDate) {
        if (!dataObject[date])
          dataObject[date] = {
            humidity: [],
            temperature: [],
            windspeed: [],
            weathercode: null,
          };
        dataObject[date].humidity.push(humidities[i]);
        dataObject[date].temperature.push(temperatures[i]);
        dataObject[date].windspeed.push(windSpeeds[i]);
        if (!dataObject[date].weathercode)
          dataObject[date].weathercode = weatherCodes[i];
      }
    }
  }
</script>

<div class="flex justify-between items-center w-[1000px]">
  {#if dataObject[currentDate + 1]}
    <SmallWeatherCard
      temperatureRange="{Math.min(
        ...dataObject[currentDate + 1].temperature
      )}°C | {Math.max(...dataObject[currentDate + 1].temperature)}°C"
      day={new Date(
        new Date().getTime() + 1 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-us", { weekday: "long" })}
      icon={dataObject[currentDate + 1].weathercode}
    />
    <SmallWeatherCard
      temperatureRange="{Math.min(
        ...dataObject[currentDate + 2].temperature
      )}°C | {Math.max(...dataObject[currentDate + 1].temperature)}°C"
      day={new Date(
        new Date().getTime() + 2 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-us", { weekday: "long" })}
      icon={dataObject[currentDate + 1].weathercode}
    />
    <SmallWeatherCard
      temperatureRange="{Math.min(
        ...dataObject[currentDate + 3].temperature
      )}°C | {Math.max(...dataObject[currentDate + 1].temperature)}°C"
      day={new Date(
        new Date().getTime() + 3 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-us", { weekday: "long" })}
      icon={dataObject[currentDate + 1].weathercode}
    />
    <SmallWeatherCard
      temperatureRange="{Math.min(
        ...dataObject[currentDate + 4].temperature
      )}°C | {Math.max(...dataObject[currentDate + 1].temperature)}°C"
      day={new Date(
        new Date().getTime() + 4 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-us", { weekday: "long" })}
      icon={dataObject[currentDate + 1].weathercode}
    />
    <SmallWeatherCard
      temperatureRange="{Math.min(
        ...dataObject[currentDate + 5].temperature
      )}°C | {Math.max(...dataObject[currentDate + 1].temperature)}°C"
      day={new Date(
        new Date().getTime() + 5 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-us", { weekday: "long" })}
      icon={dataObject[currentDate + 1].weathercode}
    />
    <SmallWeatherCard
      temperatureRange="{Math.min(
        ...dataObject[currentDate + 6].temperature
      )}°C | {Math.max(...dataObject[currentDate + 1].temperature)}°C"
      day={new Date(
        new Date().getTime() + 6 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-us", { weekday: "long" })}
      icon={dataObject[currentDate + 6].weathercode}
    />
  {/if}
  <!-- <SmallWeatherCard temperatureRange="17°C | 23°C" day="Tuesday" icon="116" />
  <SmallWeatherCard temperatureRange="17°C | 23°C" day="Tuesday" icon="116" />
  <SmallWeatherCard temperatureRange="17°C | 23°C" day="Tuesday" icon="116" />
  <SmallWeatherCard temperatureRange="17°C | 23°C" day="Tuesday" icon="116" />
  <SmallWeatherCard temperatureRange="17°C | 23°C" day="Tuesday" icon="116" /> -->
</div>
<!-- ['2023-01-14T00:00', '2023-01-14T01:00', '2023-01-15T00:00', '2023-01-15T01:00'] -->
<!-- [50, 67, 12, 11] -->
