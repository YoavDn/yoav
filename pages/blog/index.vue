<script setup lang="ts">
const site = useSite()

const { data: posts } = await useAsyncData('blog-index', () =>
  queryCollection('blog')
    .select('path', 'title', 'description', 'date', 'readingTime')
    .where('draft', '=', false)
    .order('date', 'DESC')
    .all(),
)

const grouped = computed(() => {
  const by: Record<string, typeof posts.value> = {}
  for (const p of posts.value ?? []) {
    const y = new Date(p.date).getUTCFullYear().toString()
    ;(by[y] ||= []).push(p)
  }
  return Object.entries(by).sort(([a], [b]) => Number(b) - Number(a))
})

function fmtDate(d: string) {
  const date = new Date(d)
  const month = date
    .toLocaleString('en-US', { month: 'short', timeZone: 'UTC' })
    .toLowerCase()
  const day = date.getUTCDate().toString().padStart(2, '0')
  return `${month} ${day}`
}

const total = computed(() => posts.value?.length ?? 0)
const pageTitle = 'Writing — Yoav Mendelson'
const pageDescription =
  'Essays and notes by Yoav Mendelson on building products, engineering, and the quiet web.'
const url = `${site.url}/blog`

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: url,
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
})

useHead({
  link: [{ rel: 'canonical', href: url }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Writing — Yoav Mendelson',
        url,
        author: {
          '@type': 'Person',
          name: site.name,
          url: site.url,
        },
        blogPost: (posts.value ?? []).map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          description: p.description,
          datePublished: p.date,
          url: `${site.url}${p.path}`,
        })),
      }),
    },
  ],
})
</script>

<template>
  <section class="writing">
    <header class="intro">
      <span class="crumb">writing</span>
      <span class="dot" aria-hidden="true">·</span>
      <span class="count">{{ total }} {{ total === 1 ? 'piece' : 'pieces' }}</span>
    </header>

    <div v-for="[year, items] in grouped" :key="year" class="year">
      <div class="year-row">
        <span class="year-num">{{ year }}</span>
      </div>

      <ol class="list">
        <li v-for="post in items" :key="post.path" class="entry">
          <NuxtLink :to="post.path" class="row">
            <time class="when" :datetime="post.date">{{ fmtDate(post.date) }}</time>

            <span class="body">
              <span class="h">{{ post.title }}</span>
              <span class="d">{{ post.description }}</span>
            </span>

            <span v-if="post.readingTime" class="rt">{{ post.readingTime }} min</span>
          </NuxtLink>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
@reference "../../assets/styles/tailwind-ref.css";

.writing {
  @apply mx-auto w-full max-w-[68ch] px-6 pt-32 pb-28;
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  font-feature-settings: 'ss01', 'cv11';
}

/* ————— intro: single breadcrumb line ————— */

.intro {
  @apply flex items-center gap-2 pb-10 font-mono text-[0.72rem] lowercase tracking-tight text-white/40;

  .crumb { @apply text-white/70; }
  .dot   { @apply text-white/25; }
}

/* ————— year marker ————— */

.year + .year { @apply mt-10; }

.year-row {
  @apply sticky top-20 z-10 mb-2 -mx-2 flex items-center gap-3 bg-black/80 px-2 py-2 font-mono text-[0.72rem] tracking-tight text-white/35 backdrop-blur-sm;

  .year-num { @apply text-primary/80; }
}

/* ————— list ————— */

.list { @apply flex flex-col; }

.entry {
  @apply border-t border-white/[0.06];

  &:last-child { @apply border-b border-white/[0.06]; }
}

.row {
  @apply grid items-baseline gap-x-6 py-5;
  grid-template-columns: 5.5rem 1fr auto;
}

.row:hover {
  .h  { @apply text-primary; }
  .d  { @apply text-white/65; }
  .when,
  .rt { @apply text-white/65; }
}

.when {
  @apply font-mono text-[0.78rem] lowercase tracking-tight text-white/45 transition-colors duration-200;
  font-variant-numeric: tabular-nums;
}

.body {
  @apply flex flex-col gap-1.5;

  .h {
    @apply text-[1.0625rem] font-medium leading-snug text-white transition-colors duration-200;
    letter-spacing: -0.012em;
  }

  .d {
    @apply max-w-[54ch] text-[0.9375rem] font-normal leading-relaxed text-white/45 transition-colors duration-200;
  }
}

.rt {
  @apply self-baseline whitespace-nowrap font-mono text-[0.72rem] tracking-tight text-white/35 transition-colors duration-200;
  font-variant-numeric: tabular-nums;
}

/* ————— responsive ————— */

@media (max-width: 640px) {
  .row {
    grid-template-columns: 1fr;
    grid-template-areas:
      'meta'
      'body';
    row-gap: 0.35rem;
    @apply py-4;
  }
  .when { grid-area: meta; }
  .body { grid-area: body; }
  .rt   { display: none; }
}
</style>
