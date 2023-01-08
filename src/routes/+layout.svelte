<script>
  import NavLink from "./../lib/components/NavLink.svelte";
  import "../app.css";
  import { page } from "$app/stores";
  import { text } from "svelte/internal";

  $: color = "";
  //   #region if for navbar color and active link
  $: if ($page.url.pathname == "/login" || $page.url.pathname == "/register") {
    color = "bg-[#E8D08B]/50";
  } else if ($page.url.pathname == "/fields") {
    color = "bg-[#9F9515]/50";
  } else if ($page.url.pathname == "/sensors") {
    color = "bg-[#7392A4]/50";
  } else if ($page.url.pathname == "/sensorvalues") {
    color = "bg-[#B4B494]/50";
  } else if ($page.url.pathname == "/overview") {
    color = "bg-[#DC9A47]/50";
  }
  //   #endregion

  let sameCss = "fixed object-cover -z-10";
</script>

<nav class="absolute top-0 w-full {color} h-[100px] px-14 xl:px-[140px]">
  <div class="w-full h-full flex flex-row items-center justify-between">
    <h1 class="text-lg 2xl:text-4xl">FLOWER AUF DAUER</h1>
    {#if $page.url.pathname == "/register"}
      <NavLink url="/login" text="LOGIN" />
      <!-- <a class="text-3xl" href="/login">LOGIN</a> -->
    {:else if $page.url.pathname == "/login"}
      <NavLink url="/register" text="REGISTER" />
    {:else}
      <NavLink
        url="/overview"
        text="OVERVIEW"
        active={$page.url.pathname == "/overview"}
      />
      <NavLink
        url="/fields"
        text="FIELDS"
        active={$page.url.pathname == "/fields"}
      />
      <NavLink
        url="/sensors"
        text="SENSORS"
        active={$page.url.pathname == "/sensors"}
      />
      <NavLink
        url="/sensorvalues"
        text="SENSORVALUES"
        active={$page.url.pathname == "/sensorvalues"}
      />
    {/if}

    <div
      class="flex gap-5 {$page.url.pathname == '/login' ||
      $page.url.pathname == '/register'
        ? 'hidden'
        : ''}"
    >
      <a href="/logout">
        <img src="/images/settingsIcon.png" alt="" />
      </a>
      <img src="/images/UserIcon.png" alt="" />
    </div>
  </div>
</nav>

<div class="h-full w-full flex items-center justify-center">
  <slot />
</div>

<!-- background image -->
{#if $page.url.pathname == "/fields"}
  <img
    class="{sameCss} -top-[320px] -rotate-[30deg] scale-125"
    src="/images/FieldsBackground.jpg"
    alt="a farms reflection ind a drop of water"
  />
{:else if $page.url.pathname == "/login" || $page.url.pathname == "/register"}
  <img
    class="{sameCss} top-0 w-screen h-screen"
    src="/images/login_register.jpg"
    alt="open gate background"
  />
{:else if $page.url.pathname == "/sensors"}
  <img
    class="{sameCss} -top-[200px] -scale-x-100 -z-10"
    src="/images/Sensors.jpg"
    alt="a farms field with sensor like antenas"
  />
{:else if $page.url.pathname == "/sensorvalues"}
  <img
    class="{sameCss} -top-[500px] -z-10"
    src="/images/SensorValues.jpg"
    alt="a farms reflection ind a drop of water"
  />
{:else if $page.url.pathname == "/overview"}
  <img
    class="{sameCss} -top-[320px] w-[2068px] h-[2068px] -scale-x-100"
    src="/images/Dashboard.jpg"
    alt="open gate background"
  />

  <!-- else if content here -->
{/if}
