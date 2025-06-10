import { component$ } from "@builder.io/qwik";

export const TailwindTest = component$(() => {
  return (
    <div class="p-8 space-y-8">
      {/* Colors Section */}
      <section>
        <h1 class="text-4xl font-bold text-primary mb-4">Colors</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="bg-primary text-primary-foreground p-4 rounded-lg shadow">
            Primary
          </div>
          <div class="bg-secondary text-secondary-foreground p-4 rounded-lg shadow">
            Secondary
          </div>
          <div class="bg-accent text-accent-foreground p-4 rounded-lg shadow">
            Accent
          </div>
          <div class="bg-muted text-muted-foreground p-4 rounded-lg shadow">
            Muted
          </div>
          <div class="bg-card text-card-foreground p-4 rounded-lg shadow">
            Card
          </div>
          <div class="bg-popover text-popover-foreground p-4 rounded-lg shadow">
            Popover
          </div>
          <div class="bg-background text-foreground p-4 rounded-lg shadow border border-border">
            Background
          </div>
          <div class="bg-alert text-alert-foreground p-4 rounded-lg shadow">
            Alert
          </div>
        </div>
      </section>

      {/* Border Radius Section */}
      <section>
        <h2 class="text-3xl font-bold text-primary mb-4">Border Radius</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-primary text-primary-foreground p-4 rounded-base shadow">
            Base
          </div>
          <div class="bg-primary text-primary-foreground p-4 rounded-sm shadow">
            Small
          </div>
          <div class="bg-primary text-primary-foreground p-4 rounded shadow">
            Default
          </div>
          <div class="bg-primary text-primary-foreground p-4 rounded-md shadow">
            Medium
          </div>
          <div class="bg-primary text-primary-foreground p-4 rounded-lg shadow">
            Large
          </div>
          <div class="bg-primary text-primary-foreground p-4 rounded-xl shadow">
            XL
          </div>
          <div class="bg-primary text-primary-foreground p-4 rounded-2xl shadow">
            2XL
          </div>
          <div class="bg-primary text-primary-foreground p-4 rounded-3xl shadow">
            3XL
          </div>
        </div>
      </section>

      {/* Shadows Section */}
      <section>
        <h2 class="text-3xl font-bold text-primary mb-4">Shadows</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-background p-4 rounded-lg shadow-base">Base</div>
          <div class="bg-background p-4 rounded-lg shadow-sm">Small</div>
          <div class="bg-background p-4 rounded-lg shadow">Default</div>
          <div class="bg-background p-4 rounded-lg shadow-md">Medium</div>
          <div class="bg-background p-4 rounded-lg shadow-lg">Large</div>
          <div class="bg-background p-4 rounded-lg shadow-xl">XL</div>
          <div class="bg-background p-4 rounded-lg shadow-2xl">2XL</div>
          <div class="bg-background p-4 rounded-lg shadow-inner">Inner</div>
        </div>
      </section>

      {/* Border Width Section */}
      <section>
        <h2 class="text-3xl font-bold text-primary mb-4">Border Width</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-background p-4 rounded-lg border-base border-border">
            Base
          </div>
          <div class="bg-background p-4 rounded-lg border border-border">
            Default
          </div>
          <div class="bg-background p-4 rounded-lg border-2 border-border">
            2px
          </div>
          <div class="bg-background p-4 rounded-lg border-4 border-border">
            4px
          </div>
          <div class="bg-background p-4 rounded-lg border-8 border-border">
            8px
          </div>
        </div>
      </section>

      {/* Stroke Width Section */}
      <section>
        <h2 class="text-3xl font-bold text-primary mb-4">Stroke Width</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <svg class="w-8 h-8 stroke-current" stroke-width="0">
            <circle cx="16" cy="16" r="14" />
          </svg>
          <svg class="w-8 h-8 stroke-current" stroke-width="base">
            <circle cx="16" cy="16" r="14" />
          </svg>
          <svg class="w-8 h-8 stroke-current" stroke-width="1">
            <circle cx="16" cy="16" r="14" />
          </svg>
          <svg class="w-8 h-8 stroke-current" stroke-width="2">
            <circle cx="16" cy="16" r="14" />
          </svg>
        </div>
      </section>

      {/* Animation Section */}
      <section>
        <h2 class="text-3xl font-bold text-primary mb-4">Animations</h2>
        <div class="space-y-4">
          <div class="bg-primary text-primary-foreground p-4 rounded-lg animate-accordion-down">
            Accordion Down
          </div>
          <div class="bg-primary text-primary-foreground p-4 rounded-lg animate-accordion-up">
            Accordion Up
          </div>
        </div>
      </section>
    </div>
  );
});
