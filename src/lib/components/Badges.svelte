<script lang="ts">
  export let url: string;
  export let title: string;
  export let text: string;
</script>

<a
  class="bg-[#E09940]/50 rounded-[10px] backdrop-blur-[60px] flex items-center gap-5 px-5 py-5"
  href={url}
>
  <img class="w-[45px] h-[45px]" src="/images/plusIcon.png" alt="" />
  <div class="flex flex-col gap-6">
    <h2 class="text-3xl">{title}</h2>
    <p class="w-[300px]">{text}</p>
  </div>
</a>
