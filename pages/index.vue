<template>
  <div>  

    <div id="banner-wrapper">
					<div id="banner" class="box container">
						<div class="row">
							<div class="col-12 col-12-medium">
								<h2>Welcome to the world of TMBK.</h2>
								<p>Please go through our services.</p>
							</div>
							
						</div>
					</div>
				</div>

    <div id="features-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-medium" v-for="(b,key) in content_list" :key="key">
            <Box :image ="b.image" :content = "b.content"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Box from '~/components/Tile.vue'

export default {
  name: 'IndexPage',
  data(){
    return {
      content_list : this.$store.state.fix.box_data
    }
  }
  
}
</script>
