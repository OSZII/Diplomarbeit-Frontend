<script lang="ts">
  import { onMount } from "svelte";
  import GraphOptions from "./GraphOptions.svelte";

  import MainWeatherCard from "./MainWeatherCard.svelte";
  import OverviewGraph from "./OverviewGraph.svelte";
  import SmallWeatherCardContainer from "./SmallWeatherCardContainer.svelte";

  let weather: any;
  let currentWeather: any;

  //   function getCoords(): Promise<GeoLocation> {
  //     return new Promise((resolve) => {
  //       navigator.geolocation.getCurrentPosition((response) => resolve(response));
  //     });
  //   }

  //   async function getWeatherdata() {
  //     let geolocation: GeoLocation = await getCoords();
  //     console.log("geolocation");

  //     let lat = geolocation.coords.latitude;
  //     let long = geolocation.coords.longitude;

  //     let data = await fetch(
  //       `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,windspeed_80m,windspeed_120m&current_weather=true&timezone=auto`
  //     );
  //     return await data.json();
  //   }
  onMount(() => {
    navigator.geolocation.getCurrentPosition(async (geolocation) => {
      let lat = geolocation.coords.latitude;
      let long = geolocation.coords.longitude;
      let data = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,windspeed_80m,windspeed_120m&current_weather=true&timezone=auto`
      );
      weather = await data.json();

      currentWeather = weather.current_weather;
    });
  });
</script>

<!-- <h1>{$page.error?.message}</h1> -->
{#if currentWeather}
  <MainWeatherCard
    {currentWeather}
    humidity={weather.hourly.relativehumidity_2m[0]}
  />
{:else}
  <MainWeatherCard placeholder={true} />
{/if}
<div class="flex flex-col max-h-[530px] justify-between">
  {#if weather}
    <SmallWeatherCardContainer weatherData={weather} />
    <OverviewGraph {weather} />
  {:else}
    <SmallWeatherCardContainer placeholder={true} />
    <GraphOptions />
    <OverviewGraph placeholder={true} />
  {/if}
</div>
