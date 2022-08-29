<template>
  <div>

    <v-container class="grey lighten-5 ma-10">
      <h4 style="color:#00C853;" align="center"><i>Courses</i></h4>
      <h2 align="center">Our Most Popular Courses</h2>
      <v-row class="my-2" no-gutters>
        <v-col v-for="(course, i) in popularCourses" :key="i" cols="12" sm="4">

          <Card :course="course"/>

        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Courses',
  components: {
    Card
  },
  data: () => ({
    popularCourses: [
      {
        courseProfile: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        courseCategory: "Business",
        title: "Ultimate Business Intelligence Analyst A to Z course 2021",
        students: "46,995",
        duration: " 11 hrs 20 mins",
        lectures: 44,
        owner: { name: "Albet Hitler", profile: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" },
        price: 2000
      },
      {
        courseProfile: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        courseCategory: "Design",
        title: "Adobe Photoshop Training: From Beginner To Pro",
        students: "6,995",
        duration: " 6 hrs 20 mins",
        lectures: 24,
        owner: { name: "Wanda Wilson", profile: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" },
        price: 3000
      },
      {
        courseProfile: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        courseCategory: "Marketing",
        title: "Social Media Marketing - A to Z Content Marketing Class 2021",
        students: "46,995",
        duration: " 11 hrs 20 mins",
        lectures: 44,
        owner: { name: "Yaman Can", profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" },
        price: 2000
      }
    ]
  })
}
</script>

