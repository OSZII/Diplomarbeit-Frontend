<script lang="ts">
  import { Chart } from "chart.js/auto";
  import { onMount } from "svelte";
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

  export let placeholder: Boolean = false;

  export let weather: WeatherData | null = null;
  //   let data: any;
  //   if (weather) {
  //     data = {
  //       labels: weather.hourly.time.map((timestamp) =>
  //         timestamp.replaceAll("-", ".").replace("T", " ").replace(".000Z", "")
  //       ),
  //       datasets: [
  //         {
  //           label: "Temperature",
  //           fill: true,
  //           //   lineTension: 0.3,
  //           backgroundColor: "rgb(255,255,255, .2)",
  //           borderColor: "rgb(255,255,255)",
  //           //   borderCapStyle: "butt",
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: "miter",
  //           pointBorderWidth: 10,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: "rgb(0, 0, 0)",
  //           pointHoverBorderColor: "rgba(220, 220, 220, 1)",
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: weather.hourly.temperature_2m,
  //         },
  //       ],
  //     };
  //   }
  onMount(() => {
    if (weather) {
      const ctx = document.getElementById("myChart");

      new Chart(ctx, {
        type: "line",
        options: {},
        data: {
          labels: weather.hourly.time.map((timestamp) => {
            let date: Date = new Date(timestamp);
            return (
              date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
            );
          }),
          datasets: [
            {
              label: "Temperature",
              data: weather.hourly.temperature_2m,
              borderWidth: 1,
            },
            {
              label: "Humidity",
              data: weather.hourly.relativehumidity_2m,
              borderWidth: 1,
            },
            {
              label: "Windspeed",
              data: weather.hourly.windspeed_10m,
              borderWidth: 1,
            },
          ],
        },
      });
    }
  });
</script>

<div
  class="bg-[#E09940]/50 p-2 rounded-[10px] backdrop-blur-[60px] flex items-center justify-center"
>
  {#if placeholder}
    <!-- content -->
    <img src="/images/chartPlaceholder.png" alt="" />
  {:else}
    <canvas
      class="bg-white rounded-[10px]"
      width="1000px"
      height="309px"
      id="myChart"
    />
  {/if}
</div>
