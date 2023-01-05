<script lang="ts">
  export let text: string;
  export let type: string;
</script>

<div class="flex flex-col">
  <label for={text.toLowerCase()}>{text.toUpperCase()}</label>
  <input
    class="border-2 rounded-[5px] h-[42px] w-[310px] border-[#7C7A7A]"
    id={text.toLowerCase()}
    {type}
    name={text.toLowerCase()}
  />
</div>
