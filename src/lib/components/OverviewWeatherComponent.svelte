<script>
  import GraphOptions from "./GraphOptions.svelte";

  import MainWeatherCard from "./MainWeatherCard.svelte";
  import OverviewGraph from "./OverviewGraph.svelte";
  import SmallWeatherCardContainer from "./SmallWeatherCardContainer.svelte";
</script>

<MainWeatherCard />
<div class="flex flex-col justify-between items-start">
  <SmallWeatherCardContainer />
  <GraphOptions />
  <OverviewGraph />
</div>
