<script lang="ts">
  import Carousel from '$lib/Carousel.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import logo from '$lib/assets/logo.webp';

  let images = [
    { title: 'Our work van', src: 'images/van.jpg' },
    { title: 'Unclogging a drain', src: 'images/working_on_sink.jpg' },
    { title: 'Beautiful sink installation', src: 'images/sink.jpg' },
    { title: 'Example of high quality plumbing within the walls', src: 'images/wall.jpg' },
  ];
</script>

<svelte:head>
  <title>Stephen's Plumbing & Gas LLC</title>
  <meta property="og:title" content="Stephen's Plumbing & Gas LLC" />
  <meta property="og:url" content="https://rva.plumbing" />
  <meta
    property="og:description"
    content={`Licensed and Insured Commercial and Residential Plumbing and Gas Repair Service

Guaranteed Craftsmanship!`}/>
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale" content={logo} />
</svelte:head>

<div class="flex flex-col justify-center w-full items-center">
  <Carousel {images} />
  <main class="max-w-4xl mx-6">
    <h2 class="font-semibold text-xl my-5 text-center underline">
      Licensed and Insured Commercial and <br /> Residential Plumbing and Gas Repair Service
    </h2>
    <div class="grid leading-7">
      <ul class="list-inside list-disc">
        <li>Drain Cleaning</li>
        <li>Hydro-Jetting</li>
        <li>Sewer Inspection and Location</li>
        <li>Sewer and Water Pipe Repair, Replacement, and Installation</li>
        <li>Water Heater Repair, Replacement, and Installation</li>
        <li>Fixture Repair, Replacement, and Installation (Anything from Faucets to Bidets)</li>
        <li>Gas Piping and Appliance Installation</li>
      </ul>
      <span class="text-right font-semibold">..And More!</span>
    </div>
    <h3 class="font-semibold text-xl underline text-center mt-16">
      Why choose us instead of the big names?
    </h3>
    <p class="text-center leading-7 mt-4">
      We are a fully licensed and insured family business that strives to maintain longstanding
      relationships with our customers. Our focus is providing the highest quality of work at a
      competitive price. Other companies may try to trap customers with marketing tricks showing
      untruthful prices, without disclosing their swindling fees such as trip charges, dispatch
      fees, and much more. When you call us, you can be certain there are no gimmicks. Most of the
      time, a master plumber and gasfitter licensed by The State of Virginia Board of Contractors
      will be completing your work.
    </p>
    <h3 class="font-semibold text-xl underline text-center mt-16">What is your hourly cost?</h3>
    <ul class="text-center">
      <li class="my-2">Regular Business Hours: $160.00 per hour (including travel time)</li>
      <li>After Business Hours: $240.00 per hour (including travel time)</li>
    </ul>
  </main>
  <footer
    class="w-full flex items-center justify-center py-10 bg-zinc-300 mx-6 mt-28 text-center font-semibold text-2xl">
    <div class="max-w-xl px-6">
      <p class="text-center">
        We look forward to gaining your business. Submit a request or call us today to setup your
        appointment. We're here for you 24/7!
      </p>
      <p class="text-center font-semibold text-2xl mt-4">
        Call Us! <a
          class="underline underline-offset-4 text-center focus:text-blue-800 hover:text-blue-800"
          href="tel:8049147711">(804)914-7711</a>
      </p>
      <Button
        href="https://clienthub.getjobber.com/client_hubs/fa3753d4-3d51-4b95-8903-254401797d6e/public/work_request/new"
        size="lg"
        class="mt-10 scale-[1.2] hover:scale-[1.3] bg-zinc-950 hover:bg-zinc-800 focus:bg-zinc-800">
        Schedule Your Appointment
      </Button>
    </div>
  </footer>
</div>
