<template>

    <v-container class="grey lighten-5">
        <h4 style="color:#00C853;" class="mx-6"><i>Top Earners</i></h4>
        <h2 class="mx-6">Transforming Your Ideas <br /> Into Reality</h2>
        <v-row no-gutters class="my-10">
            <v-col v-for="(earner, i) in earners" :key="i" cols="12" sm="3">
                <v-card class="mx-auto" max-width="250" elevation="0">
                    <v-img height="200px" :src="earner.pic"></v-img>
                    <v-row class="my-2 mx-0">
                        <v-sheet :class="radius" :max-width="10" class="transition-swing" color="#00C853" elevation="3"
                            height="42" width="7">
                        </v-sheet>
                        <v-card-title class="pa-2">
                            {{  earner.price  }}
                        </v-card-title>
                    </v-row>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Earner',
    data: () => ({
        earners: [
            { pic: require('@/static/earner1.png'), price: "₹8,00,000" },
            { pic: require('@/static/earner2.png'), price: "₹6,00,000" },
            { pic: require('@/static/earner3.png'), price: "₹5,00,000" },
            { pic: require('@/static/earner4.png'), price: "₹4,50,000" }
        ]
    }),
    // methods: {
    //     getImage(img) {
    //         return require('../static/' + img + '.png')
    //     }
    // }
}
</script>
