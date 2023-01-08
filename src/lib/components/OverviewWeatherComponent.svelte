<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import GraphOptions from "./GraphOptions.svelte";

  import MainWeatherCard from "./MainWeatherCard.svelte";
  import OverviewGraph from "./OverviewGraph.svelte";
  import SmallWeatherCardContainer from "./SmallWeatherCardContainer.svelte";

  let weatherData;
  let currentWeather;

  onMount(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let data = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,windspeed_80m,windspeed_120m&current_weather=true&timezone=auto`
      );
      weatherData = await data.json();
      currentWeather = weatherData.current_weather;
    });
  });
</script>

<h1>{$page.error?.message}</h1>
<MainWeatherCard {currentWeather} />
<div class="flex flex-col justify-between items-start">
  <SmallWeatherCardContainer />
  <GraphOptions />
  <OverviewGraph />
</div>
