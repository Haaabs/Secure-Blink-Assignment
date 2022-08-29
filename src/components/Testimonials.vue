<template>
    <div class="my-4">
        <h4 style="color:#00C853;" class="mx-16"><i>Testimonials</i></h4>
        <h2 class="mx-16">Check Out What Our <br /> Students Think About Us</h2>
        <v-container class="grey lighten-5">
            <v-row no-gutters justify="center">
                <v-col class="pa-4 mx-4" v-for="(testimonial, i) in testimonials" :key="i" cols="12" sm="5" >
                    <v-card class="pa-4" elevation="6">
                        <v-card-text>
                            <div>
                                {{  testimonial.message }}
                            </div>
                        </v-card-text>
                        <v-row align="center" class="my-1 mx-2">
                            <v-avatar size="40px">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                            </v-avatar>
                            <v-col>
                            <div class="font-weight-medium">
                                Black text
                            </div>
                            <div class="test-caption">
                                <i>{{ testimonial.when }}</i>
                            </div>
                            </v-col>
                            <v-spacer></v-spacer>
                            <div class="pa-2 font-weight-black">
                                <v-img width="40" height="40" src="../static/comma.png"></v-img>
                            </div>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Testimonials',
    data: () => ({
        testimonials: [
            {profileImage: "https://cdn.vuetifyjs.com/images/john.jpg", when: "Yesterday", message: "Its A Comprehensive Learning Platform For Everyone Looking to Learn And Course Pro. Providing This Platform Which Is Vaery Beneficial For Practicals. Students Can Revise Everything At Home Like Dissections And Slides"},
            {profileImage: "https://cdn.vuetifyjs.com/images/john.jpg",  when: "Yesterday", message: "Its A Comprehensive Learning Platform For Everyone Looking to Learn And Course Pro. Providing This Platform Which Is Vaery Beneficial For Practicals. Students Can Revise Everything At Home Like Dissections And Slides"},
        ]
    })
}
</script>

