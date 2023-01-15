<script lang="ts">
  import { enhance } from "$app/forms";
  import "animate.css";

  import AlternativeLogin from "$lib/components/AlternativeLogin.svelte";
  export let header: string;
  export let error: string | null;
  export let classes: string = "";
</script>

<form
  use:enhance
  method="POST"
  class="{classes} bg-black/50 backdrop-blur-[60px] h-full rounded-[10px] text-white flex flex-col items-center justify-evenly px-[95px]"
>
  <h2 class="text-4xl">{header}</h2>
  <!-- ICONS stuff with google github and discord -->
  <AlternativeLogin />

  <slot><!-- optional fallback --></slot>

  {#if error != null}
    <p
      class="text-red-600 font-extrabold text-xl transition-all duration-75 animate-scale-up"
    >
      {error}
    </p>
  {/if}

  <button
    class="w-[200px] min-h-[43px] rounded-[5px] bg-[#EED99A] hover:bg-[#beaf82] hover:text-black"
    >SIGN IN</button
  >
</form>

<style>
  @keyframes scale-up {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .animate-scale-up {
    animation: scale-up 75ms ease-in-out;
  }
</style>
