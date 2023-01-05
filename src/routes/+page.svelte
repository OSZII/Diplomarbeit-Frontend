<script>
  // @ts-nocheck

  import Input from "$lib/components/Input.svelte";
</script>

<div class="w-screen h-screen flex items-center justify-center gap-[45px]">
  <form
    class="bg-black/50 backdrop-blur-[60px] h-[540px] rounded-[10px]  text-white"
  >
    <h2 class="text-3xl">SING IN</h2>
    <!-- ICONS stuff with google github and discord -->

    <Input text="email" type="text" />
    <Input text="password" type="password" />
    <button>Sign In</button>
  </form>
  <div>
    <img
      class="h-[540px] rounded-[10px]"
      src="/images/HappyFarmer.webp"
      alt="A happy farmer"
    />
  </div>
</div>

<!-- Background -->
<img
  class="absolute top-0 -z-10 w-screen h-screen"
  src="/images/login_register.jpg"
  alt="open gate background"
/>
