import { component$ } from "@builder.io/qwik";

export const TailwindTest = component$(() => {
  return (
    <div class="p-8">
      <h1 class="text-4xl font-bold text-primary mb-4">h1</h1>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-primary text-primary-foreground p-4 rounded-lg shadow">
          Primary Card
        </div>
        <div class="bg-secondary text-secondary-foreground p-4 rounded-lg shadow">
          Secondary Card
        </div>
        <div class="bg-accent text-accent-foreground p-4 rounded-lg shadow">
          Accent Card
        </div>
        <div class="bg-muted text-muted-foreground p-4 rounded-lg shadow">
          Muted Card
        </div>
      </div>
    </div>
  );
});
