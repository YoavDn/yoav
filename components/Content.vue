<script setup lang='ts'>

</script>


<template>
    <section class="about content">
        <h2>About.</h2>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            explicabo voluptate libero maiores voluptas ducimus ipsam tempore
            eos suscipit et. Reprehenderit quidem ducimus asperiores unde
            repellendus, placeat vitae reiciendis adipisci magni suscipit
            dolorum corrupti atque debitis. Quae facilis, provident numquam
            similique sint fugit ducimus dolorem, delectus nisi, nesciunt nam
            laborum odio quis? Cupiditate explicabo necessitatibus quibusdam
            dolorem soluta, totam numquam?
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            ratione commodi ut nesciunt itaque illo deserunt id aliquam rerum,
            quas excepturi aliquid dolorem quidem, fugit ipsum, sit nihil
            repudiandae reiciendis eum laborum possimus veniam eos ipsam quia?
            Rerum, totam possimus. Aliquam, minus. Pariatur debitis excepturi
            dicta molestiae ipsa velit ut!
        </p>
    </section>

    <section class="skills content">
        <h2>Skills</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio,
            dolore quae perspiciatis recusandae dolores hic laboriosam tempora
            cumque numquam sapiente, quasi nisi illum nemo vero molestias
            repudiandae. Fuga qui placeat totam odio quia in quaerat nobis
            quisquam ipsam voluptate?
        </p>
    </section>
</template>


<style lang='scss'>
.content {
    h2 {
        @apply text-3xl font-bold my-6;
        // font-family: "Nanum Brush Script";
    }
    p {
        @apply mb-12;
        @apply text-base sm:text-xl leading-relaxed text-lime-50;
        font-weight: 300;
    }
}
</style>