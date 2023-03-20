<template>
    <section class="box feature">
    <a href="#" class="image featured"><img :src="image" alt="" /></a>
    <div class="inner">
        <header>
            <!-- <h2>Put something here</h2> -->
            <p>{{ content }}</p>
        </header>
        <!-- <p>Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet bibendum tristique fringilla.</p> -->
    </div>
    </section>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    },
    mount(){
        console.log(...data)
    }
}
</script>
