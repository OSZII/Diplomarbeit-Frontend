<script lang="ts">
  import type { PageData } from "../$types";

  export let data: PageData;

  import FieldItem from "$lib/components/fields/FieldItem.svelte";
</script>

<div
  class="scrollbar-none bg-[#9F9515]/50 backdrop-blur-[60px] rounded-[10px] w-10/12 h-5/6 mt-24 flex flex-col items-center justify-start py-6 gap-6 overflow-y-scroll"
>
  <div
    class="sticky top-2 border-2 border-[#a89e30] bg-[#C0B740] w-10/12 rounded-[10px] h-16 flex items-center justify-center text-2xl py-2"
  >
    <p>+ ADD FIELD</p>
  </div>
  <div class="flex flex-col gap-5 items-center justify-center w-10/12">
    {#each data.fields as field}
      <!-- content -->
      <FieldItem {field} />
    {/each}
  </div>
</div>
