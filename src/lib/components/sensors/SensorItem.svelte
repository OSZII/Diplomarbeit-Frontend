<script lang="ts">
  import SimpleSensorValueComponent from "../sensorvalue/SimpleSensorValueComponent.svelte";
  import SimpleSensorValue from "../sensorvalue/SimpleSensorValueComponent.svelte";
  import SimpleSensorComponent from "./../sensors/SimpleSensorComponent.svelte";
  export let sensor;

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
      <p>{name}</p>
    </div>
    <div class="flex">
      <p>{type}</p>
    </div>
  </button>
  <!-- #endregion -->
  <!-- details -->
  {#if showDetails}
    <div class="flex flex-col w-full gap-5">
      <div class="w-full flex items-center justify-center">
        <img class="w-full" src="/images/chartPlaceholder.png" alt="" />
      </div>
      <div>
        <p class="text-2xl">Field Owner:{"<firstname> <lastname>"}</p>
        <p class="text-2xl">SensorId: {sensor.id}</p>
        <p class="text-2xl">{"FieldId: <fieldId>"}</p>
      </div>
      <div
        class="scrollbar-none  gap-1 flex flex-wrap justify-between overflow-y-scroll rounded-[10px] max-h-[200px] bg-[#496c97] border-2 border-[#496c97] p-1"
      >
        {#each Array(100) as i}
          <!-- content -->
          <SimpleSensorValueComponent />
        {/each}
      </div>
    </div>
  {/if}
</div>
