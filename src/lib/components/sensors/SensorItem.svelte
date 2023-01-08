<script lang="ts">
  //   import { data } from "./data.ts";
  // TODO: Get sensorvalue data after opening the sensor info, to safe performance on click fetch(sensorvalues/<bySensorId>)
  import SimpleSensorValueComponent from "../sensorvalue/SimpleSensorValueComponent.svelte";
  import { Line } from "svelte-chartjs";
  import "chart.js/auto";
  type Sensor = {
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

  export let sensor: Sensor;

  const data = {
    labels: sensor.sensorValues.map((sensorValue) =>
      sensorValue.timeStamp
        .replaceAll("-", ".")
        .replace("T", " ")
        .replace(".000Z", "")
    ),
    datasets: [
      {
        label: "Sensor Values",
        fill: true,
        //   lineTension: 0.3,
        backgroundColor: "rgb(255,255,255, .2)",
        borderColor: "rgb(255,255,255)",
        //   borderCapStyle: "butt",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: sensor.sensorValues.map((sensorValue) => sensorValue.value),
      },
    ],
  };

  $: showDetails = false;

  function toggleDetails() {
    showDetails = !showDetails;
  }
</script>

<div
  class=" bg-[#7C9BC2] rounded-[10px]  w-full min-h-16 {showDetails
    ? 'py-5 px-10 '
    : 'hover:bg-[#496c97]'} flex flex-col items-center justify-center gap-5 transition-all ease-in-out duration-150"
>
  <!-- #region button -->
  <button
    on:click={toggleDetails}
    class="w-full rounded-[10px] {showDetails
      ? ''
      : 'px-5'} text-2xl py-2 flex items-center justify-between hover:bg-[#496c97]"
  >
    <div class="flex gap-10 items-center">
      <img class="h-[50px] w-[50px]" src="/icons/sensorIcon.svg" alt="" />
      <p>{sensor.name}</p>
    </div>
    <div class="flex">
      <p>{sensor.type}</p>
    </div>
  </button>
  <!-- #endregion -->
  <!-- details -->
  {#if showDetails}
    <div class="flex flex-col w-full gap-5">
      <div class="w-full flex items-center justify-center">
        <Line
          {data}
          options={{
            plugins: {
              backgroundColor: "white",
            },
          }}
        />
      </div>
      <div>
        <p class="text-2xl">
          Field Owner:{" " +
            sensor.field.User.firstName +
            " " +
            sensor.field.User.lastName}
        </p>
        <p class="text-2xl">SensorId: {sensor.id}</p>
        <p class="text-2xl">FieldId: {sensor.field.id}</p>
      </div>
      <div
        class="scrollbar-none  gap-1 flex flex-wrap justify-between overflow-y-scroll rounded-[10px] max-h-[200px] bg-[#496c97] border-2 border-[#496c97] p-1"
      >
        {#each sensor.sensorValues as sensorValue}
          <!-- content -->
          <SimpleSensorValueComponent {sensorValue} />
        {/each}
      </div>
    </div>
  {/if}
</div>
