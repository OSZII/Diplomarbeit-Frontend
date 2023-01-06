<script>
  import NavLink from "./../lib/components/NavLink.svelte";
  import "../app.css";
  import { page } from "$app/stores";
  import { text } from "svelte/internal";

  let overViewActive = false;
  let fieldsActive = false;
  let sensorsActive = false;
  let sensorValuesActive = false;

  $: color = "";
  $: if ($page.url.pathname == "/login" || $page.url.pathname == "/register") {
    color = "bg-[#E8D08B]/50";
  } else if ($page.url.pathname == "/fields") {
    overViewActive = false;
    fieldsActive = true;
    sensorsActive = false;
    sensorValuesActive = false;
    color = "bg-[#9F9515]/50";
  } else if ($page.url.pathname == "/sensors") {
    overViewActive = false;
    fieldsActive = false;
    sensorsActive = true;
    sensorValuesActive = false;
    color = "bg-[#7392A4]/50";
  } else if ($page.url.pathname == "/sensorvalues") {
    overViewActive = false;
    fieldsActive = false;
    sensorsActive = false;
    sensorValuesActive = true;
    color = "bg-[#B4B494]/50";
  } else if ($page.url.pathname == "/overview") {
    overViewActive = true;
    fieldsActive = false;
    sensorsActive = false;
    sensorValuesActive = false;
    color = "bg-[#DC9A47]/50";
  }
</script>

<nav class="absolute top-0 w-full {color} h-[100px] px-[140px]">
  <div class="w-full h-full flex flex-row items-center justify-between">
    <h1 class="text-5xl">FLOWER AUF DAUER</h1>
    {#if $page.url.pathname == "/register"}
      <NavLink url="/login" text="LOGIN" />
      <!-- <a class="text-3xl" href="/login">LOGIN</a> -->
    {:else if $page.url.pathname == "/login"}
      <NavLink url="/register" text="REGISTER" />
    {:else}
      <NavLink url="/overview" text="OVERVIEW" active={overViewActive} />
      <NavLink url="/fields" text="FIELDS" active={fieldsActive} />
      <NavLink url="/sensors" text="SENSORS" active={sensorsActive} />
      <NavLink
        url="/sensorvalues"
        text="SENSORVALUES"
        active={sensorValuesActive}
      />
    {/if}
  </div>
</nav>

<div class="h-full w-full flex items-center justify-center">
  <slot />
</div>
