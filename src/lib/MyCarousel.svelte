<script lang="ts">
  // import { browser } from '$app/environment';

  type ImageType = {
    title: string;
    src: string;
  };

  export let images: ImageType[];

  // let imageUlWidth: number;
  // let imageUlHeight: number;
  //
  // $: {
  //   if (browser) {
  //     imageUlWidth = document.getElementsByTagName('ul')[0].clientWidth;
  //     imageUlHeight = document.getElementsByTagName('ul')[0].clientHeight;
  //   }
  // }
</script>

<!-- <svg -->
<!--   aria-hidden="true" -->
<!--   id="svg-container" -->
<!--   class="pointer-events-none absolute w-screen z-30 h-full"> -->
<!--   <defs> -->
<!--     <lineargradient id="0" x1="0" y1="0.5" x2="1" y2="0.5"> -->
<!--       <stop offset="0%" stop-color="#e4e4e7" /> -->
<!--       <stop offset="6.25%" stop-color="rgba(236, 234, 236, 0.75)" /> -->
<!--       <stop offset="12.5%" stop-color="rgba(242, 241, 242, 0.5)" /> -->
<!--       <stop offset="25%" stop-color="rgba(255, 255, 255, 0)" /> -->
<!--       <stop offset="37%" stop-color="rgba(255, 255, 255, 0)" /> -->
<!--       <stop offset="49%" stop-color="rgba(255, 255, 255, 0)" /> -->
<!--       <stop offset="73%" stop-color="rgba(255, 255, 255, 0)" /> -->
<!--       <stop offset="79.75%" stop-color="rgba(248, 248, 248, 0.25)" /> -->
<!--       <stop offset="86.5%" stop-color="rgba(242, 241, 242, 0.5)" /> -->
<!--       <stop offset="100%" stop-color="#e4e4e7" /> -->
<!--     </lineargradient> -->
<!--   </defs> -->
<!--   <rect fill="url(#0)" height="100%" width="100%" /> -->
<!-- </svg> -->
<ul class="flex overflow-x-auto gap-2 snap-x snap-mandatory">
  {#each images as { title, src }}
    <li class="shrink-0 w-fit snap-center">
      <img {src} {title} alt={title} />
    </li>
  {/each}
</ul>
