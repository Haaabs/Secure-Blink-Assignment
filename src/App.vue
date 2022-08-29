<template>
<v-app>
  <Header/>
  <Info/>
  <Courses/>
  <Earners/>
  <Refer/>
  <Testimonials/>
  <Contact/>
  <Footer/>
</v-app>
</template>

<script>
import Header from './components/Header';
import Info from './components/Info.vue';
import Courses from './components/Courses.vue';
import Earners from './components/Earners.vue';
import Refer from './components/Refer.vue';
import Testimonials from './components/Testimonials.vue'
import Contact from './components/Contact.vue'
import Footer  from './components/Footer.vue'
export default {
  name: 'App',

  components: {
    Header, 
    Info,
    Courses,
    Earners,
    Refer,
    Testimonials,
    Contact,
    Footer
  }
  
};
</script>
