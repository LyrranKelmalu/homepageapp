<template>
  <div>
    <v-main
    class="header"
    >
      <div class="main_top">
        <h1>Hello</h1>
        <h1>I`m <span>Roman</span></h1>
        <h1>That is my portfolio</h1>
        <div class="main_paragraph">
          <p>I create and host elegant, hand-coded websites and web applications for my clients.</p>
        </div>
      </div>
    </v-main>
    <v-main>
      <div class="skills">
        <div class="pa-10 col-12 d-flex flex-wrap justify-space-around">
          <div class="card_container">
            <div class="card">
              <img src="@/assets/browser.png" alt="">
            </div>
            <div class="card_text">
              <h3>Websites & Applications</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, fugiat nemo sed iusto, eos magnam pariatur</p>
            </div>
            <div class="card_border"></div>
          </div>
          <div class="card_container">
            <div class="card">
              <img src="@/assets/browser.png" alt="">
            </div>
            <div class="card_text">
              <h3>Websites & Applications</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, fugiat nemo sed iusto, eos magnam pariatur</p>
            </div>
            <div class="card_border"></div>
          </div>
          <div class="card_container">
            <div class="card">
              <img src="@/assets/browser.png" alt="">
            </div>
            <div class="card_text">
              <h3>Websites & Applications</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, fugiat nemo sed iusto, eos magnam pariatur</p>
            </div>
            <div class="card_border"></div>
          </div>
        </div>
        <div class="screen pa-10 col-12">
          <h1>Realized projects</h1>
          <div class="img_cards d-flex">
            <div class="left_card">
              <img src="@/assets/left_img.jpg" alt="">
            </div>
            <div class="middle_card">
              <img src="@/assets/middle_img.jpg" alt="">
            </div>
            <div class="right_card">
              <img src="@/assets/right_img.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </v-main>
    <v-main class="info">
      <div>
        <div class="skills d-flex flex-md-row flex-column align-center justify-space-around col-12">
          <h1 :class="[$vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-2']" class="align-center black--text font-weight-black">I have skills in</h1>
          <div class="carouselXS align-center col-md-6 col-lg-6 col-xl-4">
            <v-carousel v-model="model"
              justify="center"
              align="center"
              height="100%"
              hide-delimiters
            >
              <v-carousel-item
                max-height="300"
                max-width="300"
                eager
                v-for="(item, i) in items"
                :key="i"
              >
              <v-img
              eager
              :src="item.src"
              >
              </v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </div>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    bg: require('@/assets/bootstrap_logo_300x300.png'),
    model: 0,
    items: [
      {
        src: require('@/assets/bootstrap_logo_300x300.png')
      },
      {
        src: require('@/assets/css_logo_300x300.png')
      },
      {
        src: require('@/assets/html_logo_300x300.png')
      },
      {
        src: require('@/assets/javascript_logo_300x300.png')
      },
      {
        src: require('@/assets/jquery-logo-png-jquery-320.png')
      },
      {
        src: require('@/assets/vue_logo_300x300.png')
      },
      {
        src: require('@/assets/firabase_logo.png')
      },
      {
        src: require('@/assets/vuetify_logo.png')
      },
      {
        src: require('@/assets/photoshop_logo.png')
      }
    ]
  }),
  async mounted () {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  }
}
</script>

<style>
.header{
  width: 100%;
  height: 100vh;
  position: relative;
  background: url( '../assets/background_mountain.jpg') no-repeat center center;
  background-size: cover;
  border-bottom: 2px solid black;
}
.main_top{
  margin-top: 25vh;
  width: 100vw;
  text-align: center;
}
.main_top h1{
  font-family: 'Balsamiq Sans';
  color: white;
  font-size: 9vh;
  line-height: 1.1;
}
.main_top h1 span{
  color: red;
  border-bottom: 4px solid red;
}
.main_paragraph{
  width: 30vw;
  margin: 0 auto;
}
.main_paragraph p{
  font-family: 'Balsamiq Sans';
  margin-top: 20px;
  color: white;
  font-size: 35px;
  line-height: 1;
}
.skills{
  position: relative;
  width: 100%;
  height: 100vh;
}
.card_container{
  width: 30vh;
  text-align: center;
  margin-top: 10px;
}
.card_border{
  width: 15vh;
  margin: 0 auto;
  border-bottom: 2px solid #000;
}
.card img{
  width: 10vh;
  height: auto;
}

.title_span{
  font-size: 8vw;
  color: black;
}
.screen{
  position: relative;
  height: 68%;
  background-color: #fbfaf8;
  text-align: center;
}
.img_cards img{
  width: 33vw;
  height: auto;
}
.left_card{
  z-index: 2;
}
.middle_card{
  margin: 0 auto;
  z-index: 3;
}
.right_card{
  z-index: 2;
}
.info{
  height: 100vh;
  background-color: #1e1e1e !important;
}
@media only screen and (max-width: 500px) {
  .carouselXS{
    margin-bottom: 300px;
  }
  .main_top{
    margin-top: 10vh;
    width: 100vw;
    text-align: center;
  }
  .main_top h1{
    font-family: 'Balsamiq Sans';
    color: white;
    font-size: 7vh;
    line-height: 1.1;
  }
  .main_paragraph{
    width: 80vw;
    margin: 0 auto;
  }
}
</style>
