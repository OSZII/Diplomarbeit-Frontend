<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import Form from "$lib/components/Form.svelte";
  import Input from "$lib/components/Input.svelte";
  import "animate.css";
  export let data: PageData;

  export let form: ActionData;

  //   $: console.log(form.error);

  console.log(form);
</script>

<div
  class="w-fit h-[538px] flex items-center justify-center gap-[45px] overflow-hidden"
>
  <!-- Loginform -->
  <Form
    classes="animate__animated animate__fadeInLeft animate__faster"
    header="SIGN IN"
    error={form?.error}
  >
    <Input text="username" type="text" />
    <Input text="password" type="password" />
  </Form>
  <!-- farmer image -->
  <div>
    <img
      class="rounded-[10px] animate__animated animate__fadeInRight animate__faster"
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
