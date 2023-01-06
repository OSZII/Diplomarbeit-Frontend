<script lang="ts">
  export let url: string;
  export let text: string;
  export let active: boolean = false;
</script>

<a class="text-3xl relative group hover:cursor-pointer" href={url}>
  <p>
    {text}
  </p>
  {#if active}
    <!-- content -->
    <div
      class="h-[3px] w-1/2  bg-black group-hover:visible group-gover:hover:transition-transform group-hover:w-full duration-150"
    />
  {:else}
    <div
      class="h-[3px] invisible w-1/12 bg-black group-hover:visible group-gover:hover:transition-transform group-hover:w-full duration-150"
    />
  {/if}
</a>
