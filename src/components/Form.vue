<template>
    <div>
        <h3 align="center">Fill up the form and our team will get back to <br /> you within 24 hours</h3>
        <v-form v-model="valid" ref="form" class="my-4" lazy-validation>
            <v-container>
                <v-row>
                    <v-col class="pa-4" cols="12" md="6">
                        <v-text-field color="#00C853" v-model="name" :rules="nameRules" label="Name" required>
                        </v-text-field>
                    </v-col>

                    <v-col class="pa-4" cols="12" md="6">
                        <v-text-field color="#00C853" v-model="email" :rules="emailRules" label="Email" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pa-4" cols="12" md="6">
                        <v-row>
                            <v-col md="5">
                                <v-select color="#00C853" v-model="select" :items="codes" :rules="[v => !!v || 'Code is required']"
                                    label="Country" required>
                                </v-select>
                            </v-col>
                            <v-col md="7">
                                <v-text-field color="#00C853" v-model="phoneNumber" :rules="phoneRules" label="Phone Number"
                                    required>
                                </v-text-field>
                            </v-col>
                        </v-row>

                    </v-col>

                    <v-col class="pa-4" cols="12" md="6">
                        <v-text-field color="#00C853" v-model="subject" :rules="nameRules" label="Subject" required>
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-container>
            <v-textarea color="#00C853" outlined solo name="input-7-4" label="Message" class="mx-4"></v-textarea>
            <div class="text-center">
                <v-btn large depressed color=black class="font-italic text-body-1 white--text px-10" :disabled="!valid"
                    @click="validate">
                    Submit
                </v-btn>
            </div>
        </v-form>
    </div>
</template>



<script>
export default {
    name: 'Form',
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 30) || 'Name must be less than or equal to 30 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: '',
        codes: [
            'code 1',
            'code 2',
            'code 3',
            'code 4',
        ],
        phoneNumber: '',
        phoneRules: [
            v => !!v || 'Phone Number is required',
            v => (v && v.length >= 10) || 'Phone Number must contain at least 10 digits'
        ],
        subject: '',
        subjectRules: [
            v => !!v || 'Subject is required',
            v => (v && v.length <= 20) || 'Subject must be less than or equal to 20 characters',
        ],
    }),
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>