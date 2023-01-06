<script>
  // @ts-nocheck

  import AlternativeLogin from "$lib/components/AlternativeLogin.svelte";
  import Input from "$lib/components/Input.svelte";
  export let header;
</script>

<form
  method="POST"
  class="bg-black/50 backdrop-blur-[60px] h-full rounded-[10px] text-white flex flex-col items-center justify-evenly px-[95px]"
>
  <h2 class="text-4xl">{header}</h2>
  <!-- ICONS stuff with google github and discord -->
  <AlternativeLogin />

  <slot><!-- optional fallback --></slot>

  <button class="w-[200px] min-h-[43px] rounded-[5px] bg-[#EED99A]"
    >SIGN IN</button
  >
</form>
