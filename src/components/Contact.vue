<template>
    <div>

        <v-container class="mx-10 my-10">
            <h4 style="color:#00C853;"  align="center"><i>Contact Us</i></h4>
            <h2 align="center">Reach Out With Any <br/>Question You Have</h2>
            <v-row no-gutters class="my-10">
                <v-col cols="12" md="5">
                    <v-card class="pa-8" elevation="0">
                        <h2 class="pa-5"> Contact Information</h2>
                        <v-row align="center" class="my-2 mx-0">
                            <v-list disabled>
                                <v-list-item-group v-model="selectedItem" color="primary">
                                    <v-list-item v-for="(item, i) in items" :key="i">
                                        <v-list-item-icon>
                                            <v-avatar class="pa-2" color="#00C853">
                                                <v-icon size="28px" color="white">{{ item.icon }}</v-icon>
                                            </v-avatar>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title class="font-weight-medium " color="#616161">{{ item.text
                                            }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-row>
                        <h2 class="pa-5"> Social Media Channels </h2>
                        <v-row class="px-6 my-3">
                            <v-col v-for="(channel, i) in channels" :key="i" cols="12" sm="3" justify="center" class="px-2">
                                <v-avatar class="pa-2" color=black>
                                    <v-icon size="28px" color="#00C853">{{ channel.icon }}</v-icon>
                                </v-avatar>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="7">
                    <v-card class="pa-8" elevation="0">
                        <Form />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Form from './Form.vue'
import { mdiGmail } from '@mdi/js';
import { mdiMapMarkerOutline } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
export default {
    name: 'Contact',
    data: () => ({
        items: [
            { icon: mdiGmail, text: "contact@coursepro.com" },
            { icon: mdiPhone, text: "1800-562-895, 1800-869-877" },
            { icon: mdiMapMarkerOutline, text: "123 Stree, India" }
        ],
        channels: [
            {icon: mdiFacebook},
            {icon: mdiTwitter},
            {icon: mdiGithub},
            {icon: mdiLinkedin}
        ]
    }),
    components: {
        Form
    }
}
</script>