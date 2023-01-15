<script lang="ts">
  import type { CurrentWeather } from "$lib/types";

  export let currentWeather: CurrentWeather | null = null;
  export let humidity: Number | null = null;
  export let placeholder: Boolean = false;

  let logo: string;
  if (currentWeather) {
    switch (currentWeather.weathercode) {
      case 0:
        logo = "sun";
        break;
      case 1:
      case 2:
      case 3:
        logo = "cloudy";
        break;
      case 45:
      case 48:
        logo = "cloudyHeavy";
      case 51:
      case 53:
      case 55:
        logo = "rain";
        break;
      case 56:
      case 57:
      case 61:
      case 63:
      case 65:
        logo = "rain";
        break;
      case 66:
      case 67:
        logo = "freezingrain";
        break;
      case 80:
      case 81:
      case 82:
        logo = "rain";
        break;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        logo = "snow";
        break;
      case 95:
      case 96:
      case 99:
        logo = "thunderstorm";
        break;
    }
  }
</script>

<div
  class="bg-[#E09940]/50 rounded-[10px] backdrop-blur-[60px] h-full w-[300px] flex flex-col items-center justify-evenly px-10 py-[50px]"
>
  <p class="text-5xl">
    {new Date().toLocaleDateString("en-us", { weekday: "long" })}
  </p>
  <img class="w-[140px] " src="/icons/weatherIcons/{logo}.svg" alt="" />
  <div class="flex w-full items-center justify-start">
    <img class="h-[50px] w-[50px]" src="/icons/temperature.svg" alt="" />
    <p class="text-3xl">
      {#if placeholder}
        Loading...
      {:else}
        <!-- content -->
        {currentWeather.temperature.toString().replace(".", ",")} °C
      {/if}
    </p>
  </div>
  <div class="flex w-full items-center justify-start">
    <img class="h-[50px] w-[50px]" src="/icons/humidity.svg" alt="" />
    {#if placeholder}
      <p class="text-3xl">Loading... %</p>
    {:else}
      <!-- content -->

      <p class="text-3xl">{humidity} %</p>
    {/if}
  </div>
  <div class="flex w-full items-center justify-start">
    <img class="h-[50px] w-[50px]" src="/icons/windspeed.svg" alt="" />
    <p class="text-3xl">
      {#if placeholder}
        Loading...
      {:else}
        <!-- content -->
        {currentWeather.windspeed.toString().replace(".", ",")} km/h
      {/if}
    </p>
  </div>
</div>
<div />
