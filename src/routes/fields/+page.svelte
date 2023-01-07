<script lang="ts">
  import FieldItem from "./../../lib/components/fields/FieldItem.svelte";
</script>

<div
  class="bg-[#9F9515]/50 backdrop-blur-[60px] rounded-[10px] w-10/12 h-5/6 mt-24 flex flex-col items-center justify-center gap-6"
>
  <div class="bg-[#C0B740] w-10/12 rounded-[10px] text-center text-2xl py-2">
    <p>+ ADD FIELD</p>
  </div>
  <FieldItem name="<name>" area="<area>" unit="<unit>" />
</div>
