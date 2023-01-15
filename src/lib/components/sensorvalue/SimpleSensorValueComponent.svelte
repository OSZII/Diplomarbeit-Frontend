<script lang="ts">
  import type { SensorValue } from "$lib/types";

  export let sensorValue: SensorValue;
</script>

<div
  class="bg-[#B4B494] text-2xl rounded-[10px] h-[60px] w-full flex items-center gap-[60px] justify-between px-8"
>
  <div class=" flex items-center justify-center gap-10">
    <img class="w-[40px] h-[40px]" src="/icons/sensorValueIcon.svg" alt="" />
    <p class="">
      {sensorValue.timeStamp.replace("T", " ").replace(".000Z", "")}
    </p>
  </div>
  <p>{sensorValue.value}</p>
</div>
