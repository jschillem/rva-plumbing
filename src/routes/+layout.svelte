<script>
  import '../app.postcss';
  import logo from '$lib/assets/logo.webp';
  import { Button } from '$lib/components/ui/button';
</script>

<header
  class="z-20 sticky py-2 px-6 lg:px-10 grid gap-4 lg:gap-0 md:grid-cols-3 grid-cols-1 h-fit justify-center items-center pb-4">
  <div class="flex items-center lg:justify-start justify-center lg:pb-2">
    <img
      src={logo}
      class="max-w-full h-20 align-middle object-contain bg-no-repeat bg-cover"
      alt="Stephen's Plumbing Solutions LLC with a stillson wrench" />
  </div>
  <div class="flex flex-col items-center justify-center">
    <h3 class="text-zinc-950 font-semibold text-center text-zinc-950">Hours of Operation:</h3>
    <p class="text-zinc-950 text-center">Open 24/7, Call Anytime!</p>
    <a
      href="tel:8049147711"
      class="text-zinc-950 underline underline-offset-4 text-center focus:text-blue-800 hover:text-blue-800"
      >(804)914-7711</a>
  </div>
  <div class="flex w-full items-center justify-center lg:justify-end">
    <Button
      class="text-sm bg-zinc-950 hover:bg-zinc-800 focus:bg-zinc-800"
      href="https://clienthub.getjobber.com/client_hubs/fa3753d4-3d51-4b95-8903-254401797d6e/public/work_request/new"
      size="lg">Schedule Your Appointment</Button>
  </div>
</header>
<slot />
