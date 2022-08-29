<template>

    <v-container fluid class="container my-0 px-0 py-0 mb-10">
        <v-row no-gutters>
            <v-col>
                <v-card max-height="700" max-width="1000" class="pa-16 rounded-0" color="#00C853">
                    <div class="text-h4 white--text mt-11"><b>Anytime, Anywhere<br />
                        Learn On Your Schedule<br />
                        From Any Device</b><br /></div>
                    <div class="my-6 text-h6">
                        <i>We Believe everyone has the capacity to be creative</i><br />
                        <span style="color:white;">Course Pro</span> <i>is a place where people develop there own
                            potential</i>
                    </div>
                    <v-btn x-large class="font-italic text-subtitle-1 white--text mb-10" depressed color="black">
                        Let's get started
                    </v-btn>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="rounded-0" max-height="700" max-width="1000">
                    <v-img src="../static/bg-pic.png">
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="pa-10" align="center">
                <div class="font-weight-bold grey--text text-h5 my-5">Total Student <br /> </div>
                <div class="text-h4 "><b>5140</b></div>
                <v-sheet :class="radius" :max-width="80" class="mx-8 my-4 transition-swing" color="#00C853"
                    elevation="5" height="6" width="100%"></v-sheet>
            </v-col>
            <v-col class="pa-10" align="center">
                <div class="font-weight-bold grey--text text-h5 my-5">Partners <br /> </div>
                <div class="text-h4"><b>4123</b></div>
                <v-sheet :class="radius" :max-width="80" class="mx-8 my-4 transition-swing" color="#00C853"
                    elevation="5" height="6" width="100%"></v-sheet>
            </v-col>
            <v-col class="pa-10" align="center">
                <div class="font-weight-bold grey--text text-h5 my-5">Affiliate Distribution<br /> </div>
                <div class="text-h4"><b>4.18 Lac</b></div>
                <v-sheet :class="radius" :max-width="130" class="mx-8 my-4 transition-swing" color="#00C853"
                    elevation="5" height="6" width="100%"></v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Info'
}
</script>

<styled scoped>
.container {
    max-width: 1300px;
}
.button {
    font-size: 10px;
}
</styled>