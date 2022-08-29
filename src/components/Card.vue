<template>
    <v-card :loading="loading" class="ma-10" elevation="0" max-width="300" max-height="400" outlined>


        <v-img max-height="200" :src="course.courseProfile">
            <v-btn absolute bottom right elevation="5" color=black class="font-italic text-caption green--text" >
                Primary
            </v-btn>
        </v-img>

        <div class="pa-2 font-weight-medium">{{  course.title  }}</div>

        <v-card-text class="pa-2">
            <div class="text-font-weight-medium">
                {{  course.students  }} Students
            </div>
            <v-row align="center" class="my-2 mx-0">

                <div class="grey--text">
                    <v-icon>{{  svg1  }}</v-icon>
                    {{  course.duration  }}
                </div>
                <v-spacer></v-spacer>
                <div class="grey--text">
                    <v-icon>{{  svg2  }}</v-icon>
                    {{  course.lectures  }} Lectures
                </div>
            </v-row>

            <v-divider></v-divider>

            <v-row align="center" class="my-2 mx-0">
                <v-avatar size="36px">
                    <img :src="course.owner.profile" alt="John">
                </v-avatar>
                <div class="pa-2 font-weight-black">
                    {{  course.owner.name  }}
                </div>
                <v-spacer></v-spacer>
                <div class="pa-2 font-weight-medium" style="color:#00C853;">
                    ₹ {{  course.price  }}
                </div>
                <div class="font-weight-medium text-decoration-line-through">
                    ₹ {{  course.price  }}
                </div>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiClockTimeFourOutline, mdiCalendarRange } from '@mdi/js';
export default {
    name: 'Card',
    data: () => ({
        svg1: mdiClockTimeFourOutline,
        svg2: mdiCalendarRange
    }),
    props: {
        course: Object
    }
}

</script>


