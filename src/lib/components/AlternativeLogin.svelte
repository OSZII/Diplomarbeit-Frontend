<script>
  import LoginIcons from "$lib/components/LoginIcons.svelte";
  // your script goes here
</script>

<div class="flex flex-col w-full h-[81px] justify-between">
  <!-- Icons -->
  <div class="flex flex-row items-center justify-between">
    <LoginIcons icon="googleIcon.svg" />
    <LoginIcons icon="githubIcon.svg" />
    <LoginIcons icon="discordIcon.svg" />
  </div>
  <div class="flex flex-row items-center justify-between gap-[16px]">
    <div class="bg-white h-[1px] flex-grow" />
    <p class="text-sm">OR CONTINUE WITH</p>
    <div class="bg-white h-[1px] flex-grow" />
  </div>
</div>
