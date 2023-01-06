<script>
  import Form from "$lib/components/Form.svelte";

  // @ts-nocheck

  import AlternativeLogin from "$lib/components/AlternativeLogin.svelte";
  import Input from "$lib/components/Input.svelte";
</script>

<div class="h-full w-full flex items-center justify-center">
  <div class="w-fit h-[538px] flex items-center justify-center gap-[45px]">
    <!-- Loginform -->
    <Form>
      <Input text="email" type="text" />
      <Input text="password" type="password" />
    </Form>
    <!-- farmer image -->
    <div>
      <img
        class="w-[770px] h-[537px] rounded-[10px]"
        src="/images/HappyFarmer.webp"
        alt="A happy farmer"
      />
    </div>
  </div>
</div>

<!-- Background -->
<img
  class="absolute top-0 -z-10 w-screen h-screen"
  src="/images/login_register.jpg"
  alt="open gate background"
/>
