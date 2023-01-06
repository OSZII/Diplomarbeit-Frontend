<script lang="ts">
  export let text: string;
  export let type: string;
</script>

<div class="flex flex-col h-[65px] justify-between">
  <label class="text-[16px] line- h-[16px] p-0" for={text.toLowerCase()}
    >{text.toUpperCase()}</label
  >
  <input
    class="border-2 rounded-[5px] h-[40px] w-[310px] border-[#7C7A7A] text-black"
    id={text.toLowerCase()}
    {type}
    name={text.toLowerCase()}
  />
</div>
