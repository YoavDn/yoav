<script setup lang="ts">
const route = useRoute()
const site = useSite()

const path = computed(() => route.path.replace(/\/$/, ''))

const { data: post } = await useAsyncData(`post-${path.value}`, () =>
  queryCollection('blog').path(path.value).first(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surround } = await useAsyncData(`surround-${path.value}`, () =>
  queryCollectionItemSurroundings('blog', path.value, {
    fields: ['title', 'description', 'date'],
  }).order('date', 'DESC'),
)

const prev = computed(() => surround.value?.[0] ?? null)
const next = computed(() => surround.value?.[1] ?? null)

const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  return new Date(post.value.date)
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    })
    .toLowerCase()
})

const machineDate = computed(() => {
  if (!post.value?.date) return ''
  return new Date(post.value.date).toISOString().slice(0, 10)
})

const canonical = computed(() => `${site.url}${path.value}`)
const ogImage = `${site.url}/og-mysite.jpg`

useSeoMeta({
  title: `${post.value.title} — ${site.name}`,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  ogUrl: canonical.value,
  ogType: 'article',
  ogImage,
  articlePublishedTime: post.value.date,
  articleAuthor: [site.url],
  articleTag: post.value.tags,
  twitterCard: 'summary_large_image',
  twitterTitle: post.value.title,
  twitterDescription: post.value.description,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: canonical.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value.title,
        description: post.value.description,
        datePublished: post.value.date,
        dateModified: post.value.date,
        keywords: post.value.tags?.join(', '),
        author: {
          '@type': 'Person',
          name: site.name,
          url: site.url,
        },
        publisher: {
          '@type': 'Person',
          name: site.name,
          url: site.url,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical.value,
        },
      }),
    },
  ],
})
</script>

<template>
  <article v-if="post" class="piece">
    <nav class="crumbs" aria-label="Breadcrumb">
      <NuxtLink to="/blog" class="back">
        <span aria-hidden="true">←</span>
        <span>writing</span>
      </NuxtLink>
      <span class="sep" aria-hidden="true">·</span>
      <time :datetime="machineDate">{{ formattedDate }}</time>
      <span v-if="post.readingTime" class="sep" aria-hidden="true">·</span>
      <span v-if="post.readingTime">{{ post.readingTime }} min read</span>
    </nav>

    <header class="head">
      <h1 class="h1">{{ post.title }}</h1>
      <p class="dek">{{ post.description }}</p>
      <ul v-if="post.tags?.length" class="tags">
        <li v-for="t in post.tags" :key="t">#{{ t }}</li>
      </ul>
    </header>

    <div class="prose-wrap">
      <ContentRenderer :value="post" class="prose-body" />
    </div>

    <footer class="foot">
      <div class="pair">
        <NuxtLink v-if="prev" :to="prev.path" class="cell prev">
          <span class="label">← previous</span>
          <span class="link">{{ prev.title }}</span>
        </NuxtLink>
        <span v-else class="cell empty" aria-hidden="true"></span>

        <NuxtLink v-if="next" :to="next.path" class="cell next">
          <span class="label">next →</span>
          <span class="link">{{ next.title }}</span>
        </NuxtLink>
        <span v-else class="cell empty" aria-hidden="true"></span>
      </div>

      <p class="signoff">
        <NuxtLink to="/blog">← All writing</NuxtLink>
      </p>
    </footer>
  </article>
</template>

<style scoped>
@reference "../../assets/styles/tailwind-ref.css";

.piece {
  @apply mx-auto w-full max-w-[62ch] px-6 pt-32 pb-24 xl:max-w-[72ch];
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  font-feature-settings: 'ss01', 'cv11';
}

/* ————— breadcrumbs ————— */

.crumbs {
  @apply mb-14 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.72rem] lowercase tracking-tight text-white/45;

  .back {
    @apply flex items-center gap-1.5 text-white/65 transition-colors;

    &:hover { @apply text-primary; }
  }

  .sep { @apply text-white/20; }
}

/* ————— head ————— */

.head {
  @apply mb-12;
}

.h1 {
  @apply text-white;
  font-size: clamp(1.85rem, 4.5vw, 2.6rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.022em;
}

.dek {
  @apply mt-5 max-w-[52ch] text-[1.0625rem] font-normal leading-relaxed text-white/55;
  letter-spacing: -0.005em;
}

.tags {
  @apply mt-6 flex flex-wrap gap-2 font-mono text-[0.7rem] lowercase tracking-tight text-white/35;

  li {
    @apply rounded-full border border-white/10 px-2.5 py-0.5;
  }
}

/* ————— body ————— */

.prose-wrap {
  @apply mx-auto border-t border-white/[0.08] pt-12;
}

/* ————— footer prev/next ————— */

.foot {
  @apply mt-20 border-t border-white/[0.08] pt-10;
}

.pair {
  @apply grid gap-6 md:grid-cols-2;
}

.cell {
  @apply flex flex-col gap-2 rounded-md border border-white/[0.06] p-4 transition-colors duration-200;

  &.next  { @apply md:text-right; }
  &.empty { @apply hidden md:block border-transparent; }

  .label {
    @apply font-mono text-[0.7rem] lowercase tracking-tight text-white/40 transition-colors duration-200;
  }

  .link {
    @apply text-[0.975rem] font-medium leading-snug text-white/75 transition-colors duration-200;
    letter-spacing: -0.012em;
  }

  &:hover {
    @apply border-primary/30 bg-primary/[0.04];
    .label { @apply text-primary/70; }
    .link  { @apply text-white; }
  }
}

.signoff {
  @apply mt-10 font-mono text-[0.72rem] lowercase tracking-tight text-white/35;

  a {
    @apply text-white/55 transition-colors;
    &:hover { @apply text-primary; }
  }
}
</style>

<style>
/* ————— reading layer (unscoped so it reaches ContentRenderer output) ————— */

.prose-body {
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  font-feature-settings: 'ss01', 'cv11';
  font-size: 1.0625rem;
  line-height: 1.78;
  color: rgba(255, 255, 255, 0.78);
  letter-spacing: -0.003em;
}

.prose-body > * + * {
  margin-top: 1.35em;
}

.prose-body p {
  hyphens: auto;
}

.prose-body h2 {
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.018em;
  color: #fff;
  margin-top: 2.4em;
  margin-bottom: 0.3em;
}

.prose-body h3 {
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  font-size: 1.0625rem;
  font-weight: 600;
  letter-spacing: -0.012em;
  color: rgba(255, 255, 255, 0.92);
  margin-top: 2em;
  margin-bottom: 0.2em;
}

.prose-body a {
  color: rgb(163, 230, 53);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  text-decoration-color: rgba(163, 230, 53, 0.4);
  transition: text-decoration-color 0.15s ease;
}

.prose-body a:hover {
  text-decoration-color: rgb(163, 230, 53);
}

.prose-body strong {
  color: #fff;
  font-weight: 600;
}

.prose-body em { font-style: italic; }

.prose-body blockquote {
  border-left: 2px solid rgb(163, 230, 53);
  padding-left: 1.1rem;
  margin-left: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.0625rem;
}

.prose-body code {
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.88em;
  background: rgba(255, 255, 255, 0.06);
  padding: 0.12em 0.38em;
  border-radius: 3px;
  color: rgb(220, 255, 170);
}

.prose-body pre {
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.875rem;
  line-height: 1.7;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 6px;
  padding: 1rem 1.15rem;
  overflow-x: auto;
  letter-spacing: 0;
}

.prose-body pre code {
  background: transparent;
  padding: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: inherit;
}

.prose-body ul,
.prose-body ol {
  padding-left: 1.35rem;
}

.prose-body ul li { list-style: disc;    margin-top: 0.45em; }
.prose-body ol li { list-style: decimal; margin-top: 0.45em; }
.prose-body li::marker { color: rgba(255, 255, 255, 0.35); }

.prose-body hr {
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 2.5em 0;
}
</style>
