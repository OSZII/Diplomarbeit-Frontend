<script lang="ts">
  import SensorItem from "$lib/components/sensors/SensorItem.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div
  class="bg-[#7392A4]/50 scrollbar-none backdrop-blur-[60px] rounded-[10px] w-10/12 h-5/6 mt-24 flex flex-col items-center justify-start py-6 gap-6 overflow-y-scroll"
>
  <div
    class="sticky top-2 border-2 border-[#496c97] bg-[#7C9BC2] w-10/12 rounded-[10px] h-16 flex items-center justify-center text-2xl py-2"
  >
    <p>+ ADD SENSOR</p>
  </div>
  <div class="flex flex-col gap-5 items-center justify-center w-10/12">
    {#each data.sensors as sensor}
      <!-- content -->
      <SensorItem {sensor} />
    {/each}
  </div>
</div>
