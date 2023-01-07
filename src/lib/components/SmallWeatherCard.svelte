<script lang="ts">
  export let day: string = "Monday";
  export let icon: string = "116";
  export let temperatureRange: string;
</script>

<div
  class="backdrop-blur-[60px] bg-[#E09940]/50 rounded-[10px] flex flex-col px-1 py-3 items-center"
>
  <p>{day}</p>
  <img
    class="w-[110px] h-[110px]"
    src="/icons/weatherIcons/{icon}.svg"
    alt=""
  />
  <p>{temperatureRange}</p>
</div>
