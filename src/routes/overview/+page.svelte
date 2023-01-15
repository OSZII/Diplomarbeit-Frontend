<script>
  import OverviewWeatherComponent from "$lib/components/OverviewWeatherComponent.svelte";
  import BadgesContainer from "$lib/components/BadgesContainer.svelte";
</script>

<div class="flex flex-col px-[10px]">
  <!-- horizontal container1 -->
  <div class="xl:h-[550px] flex gap-[25px]  py-[10px]">
    <!-- made seperate component for it because all it does is it handles weather data and displays it. So i can fetch the weather data in this component seperately and avoid clogging the other components with code -->
    <OverviewWeatherComponent />
  </div>
  <BadgesContainer />
</div>
