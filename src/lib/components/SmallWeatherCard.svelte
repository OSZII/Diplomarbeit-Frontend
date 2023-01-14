<script lang="ts">
  export let day: string = "Monday";
  export let icon: string = "116";
  export let temperatureRange: string;

  let logo: string;

  switch (Number(icon)) {
    case 0:
      logo = "sun";
      break;
    case 1:
    case 2:
    case 3:
      logo = "cloudy";
      break;
    case 45:
    case 48:
      logo = "cloudyHeavy";
    case 51:
    case 53:
    case 55:
      logo = "rain";
      break;
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
      logo = "rain";
      break;
    case 66:
    case 67:
      logo = "freezingrain";
      break;
    case 80:
    case 81:
    case 82:
      logo = "rain";
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      logo = "snow";
      break;
    case 95:
    case 96:
    case 99:
      logo = "thunderstorm";
      break;
  }
</script>

<div
  class="backdrop-blur-[60px] bg-[#E09940]/50 rounded-[10px] flex flex-col px-1 py-3 items-center"
>
  <p>{day}</p>
  <img
    class="w-[110px] h-[110px]"
    src="/icons/weatherIcons/{logo}.svg"
    alt=""
  />
  <p>{temperatureRange}</p>
</div>
