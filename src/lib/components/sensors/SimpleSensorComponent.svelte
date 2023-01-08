<script lang="ts">
  type Sensor = {
    id: string;
    type: string;
    name: string;
  };

  export let sensor: Sensor;
</script>

<div
  class="bg-[#7C9BC2] rounded-[10px] h-[60px] w-[32%] flex items-center justify-around"
>
  <img class="w-[40px] h-[40px]" src="/icons/sensorIcon.svg" alt="" />
  <p class="text-2xl">{sensor.name}</p>
</div>
