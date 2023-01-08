<script lang>
  import SimpleSensorComponent from "./../sensors/SimpleSensorComponent.svelte";
  export let field;

  $: showDetails = false;

  function toggleDetails() {
    showDetails = !showDetails;
  }
</script>

<div
  class=" bg-[#C0B740] rounded-[10px]  w-full min-h-16 {showDetails
    ? 'py-5 px-10 '
    : 'hover:bg-[#a89e30]'} flex flex-col items-center justify-center transition-all ease-in-out duration-150"
>
  <button
    on:click={toggleDetails}
    class="w-full rounded-[10px] {showDetails
      ? ''
      : 'px-5'} text-2xl py-2 flex items-center justify-between hover:bg-[#a89e30]"
  >
    <div class="flex gap-10 items-center">
      <img class="h-[50px] w-[50px]" src="/icons/fieldIcon.svg" alt="" />
      <p>{field.name}</p>
    </div>
    <div class="flex">
      <p>{field.area}</p>
      <p>{field.unit}</p>
    </div>
  </button>
  <!-- details -->
  {#if showDetails}
    <div class="flex flex-col w-full">
      <div class="w-full">
        <p class="text-2xl">Id: {field.id}</p>
        <p class="text-2xl">{"Field Owner: <firstname> <lastname>"}</p>
      </div>
      <!-- Sensorcontainer -->
      <div
        class="scrollbar scrollbar-thin-w-[3px] flex flex-wrap justify-center gap-1 overflow-y-scroll rounded-[10px] max-h-[200px] bg-[#a89e30]"
      >
        {#each field.sensors as sensor}
          <!-- content -->
          <SimpleSensorComponent {sensor} />
        {/each}
      </div>
    </div>
  {/if}
</div>
