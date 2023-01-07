<script>
  import OverviewWeatherComponent from "./../../lib/components/OverviewWeatherComponent.svelte";
  import BadgesContainer from "./../../lib/components/BadgesContainer.svelte";
  import SmallWeatherCardContainer from "$lib/components/SmallWeatherCardContainer.svelte";
  import OverviewGraph from "$lib/components/OverviewGraph.svelte";
  import GraphOptions from "$lib/components/GraphOptions.svelte";
  import MainWeatherCard from "$lib/components/MainWeatherCard.svelte";
  import SmallWeatherCard from "$lib/components/SmallWeatherCard.svelte";
  let cardBGColor = "bg-[#E09940]/50 rounded-[10px] backdrop-blur-[60px]";
</script>

<div class="flex flex-col px-[10px]">
  <!-- horizontal container1 -->
  <div class="xl:h-[550px] flex gap-[25px]  py-[10px]">
    <!-- made seperate component for it because all it does is it handles weather data and displays it. So i can fetch the weather data in this component seperately and avoid clogging the other components with code -->
    <OverviewWeatherComponent />
  </div>
  <BadgesContainer />
</div>
