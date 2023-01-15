<script lang="ts">
  import type { SensorValue } from "$lib/types";

  export let sensorValue: SensorValue;

  $: showDetails = false;

  function toggleDetails() {
    showDetails = !showDetails;
  }
</script>

<div
  class=" bg-[#B4B494] rounded-[10px]  w-full min-h-16 {showDetails
    ? 'py-5 px-10 '
    : 'hover:bg-[#818141]'} flex flex-col items-center justify-center gap-5 transition-all ease-in-out duration-150"
>
  <!-- #region button -->
  <button
    on:click={toggleDetails}
    class="w-full rounded-[10px] {showDetails
      ? ''
      : 'px-5'} text-2xl py-2 flex items-center justify-between hover:bg-[#818141]"
  >
    <div class="flex gap-10 items-center">
      <img class="h-[50px] w-[50px]" src="/icons/sensorValueIcon.svg" alt="" />
      <p>{sensorValue.timeStamp}</p>
    </div>
    <div class="flex">
      <p>{sensorValue.value}</p>
    </div>
  </button>
  <!-- #endregion -->
  <!-- details -->
  {#if showDetails}
    <div class="flex flex-col w-full gap-5">
      <div>
        <p class="text-2xl">UserId: {sensorValue.Sensor.field.userId}</p>
        <p class="text-2xl">SensorId: {sensorValue.sensorId}</p>
        <p class="text-2xl">FieldId: {sensorValue.Sensor.field.id}</p>
      </div>
    </div>
  {/if}
</div>
