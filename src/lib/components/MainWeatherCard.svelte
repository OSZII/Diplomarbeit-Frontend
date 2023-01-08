<script>
  export let currentWeather;
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
</script>

<div
  class="bg-[#E09940]/50 rounded-[10px] backdrop-blur-[60px] h-full w-[300px] flex flex-col items-center justify-evenly px-10 py-[50px]"
>
  <p class="text-5xl">{days[new Date().getDay()]}</p>
  <img class="w-[140px] " src="/icons/weatherIcons/113.svg" alt="" />
  <div class="flex w-full items-center justify-start">
    <img class="h-[50px] w-[50px]" src="/icons/temperature.svg" alt="" />
    <p class="text-3xl">
      {currentWeather.temperature.toString().replace(".", ",")}
    </p>
  </div>
  <!-- <div class="flex w-full items-center justify-start">
    <img class="h-[50px] w-[50px]" src="/icons/humidity.svg" alt="" />
    <p class="text-3xl">37 %</p>
  </div> -->
  <div class="flex w-full items-center justify-start">
    <img class="h-[50px] w-[50px]" src="/icons/windspeed.svg" alt="" />
    <p class="text-3xl">
      {currentWeather.temperature.toString().replace(".", ",")} km/h
    </p>
  </div>
</div>
<div />
