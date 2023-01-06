<script lang="ts">
  import type { PageData } from "./$types";
  import Form from "$lib/components/Form.svelte";
  import Input from "$lib/components/Input.svelte";

  export let data: PageData;
</script>

<div class="w-fit h-[700px] flex items-center justify-center gap-[45px]">
  <!-- Loginform -->
  <Form header="SIGN UP">
    <Input text="firstname" type="text" />
    <Input text="lastname" type="text" />
    <Input text="username" type="text" />
    <Input text="email" type="text" />
    <Input text="password" type="password" />
  </Form>
  <!-- farmer image -->
  <div>
    <img
      class=" rounded-[10px]"
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
