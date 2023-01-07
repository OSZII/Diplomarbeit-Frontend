<script lang="ts">
  export let name: string;
  export let area: string;
  export let unit: string;

  let showDetails = false;
</script>

<div class="w-full">
  <button
    class="bg-[#C0B740] w-10/12 rounded-[10px] text-center text-2xl py-2 flex items-center px-10 justify-between"
  >
    <div class="flex gap-10 items-center">
      <img class="h-[50px] w-[50px]" src="/icons/fieldIcon.svg" alt="" />
      <p>{name}</p>
    </div>
    <div class="flex">
      <p>{area}</p>
      <p>{unit}</p>
    </div>
  </button>
</div>
