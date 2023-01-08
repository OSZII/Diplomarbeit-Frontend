<script lang="ts">
  import SensorValueItem from "$lib/components/sensorvalue/SensorValueItem.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div
  class="bg-[#B4B494]/50 scrollbar-none backdrop-blur-[60px] rounded-[10px] w-10/12 h-5/6 mt-24 flex flex-col items-center justify-start py-6 gap-6 overflow-y-scroll"
>
  <div class="flex flex-col gap-5 items-center justify-center w-10/12">
    {#each data.sensorValues as sensorValue}
      <!-- content -->
      <SensorValueItem {sensorValue} />
    {/each}
  </div>
</div>
