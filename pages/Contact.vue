<template>
  <div>
    <section>
      <div class="hero">
        <v-container class="index-power">
          <v-flex class="hero_text">
            <h1>
              Masini de inchiriat in Cluj-Napoca Aeroport din Flota Nano rent a
              car
            </h1>
          </v-flex>
        </v-container>
      </div>
    </section>
    <section>
      <v-container>
        <v-flex md6>
          <v-layout column>
            <v-form ref="contactForm" v-model="formValid">
              <v-flex>
                <v-text-field
                  v-model="name"
                  solo
                  label="Nume"
                  required
                  :rules="requiredRule"
                />
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="email"
                  solo
                  label="E-mail"
                  required
                  :rules="requiredRule"
                />
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="subject"
                  solo
                  label="Subiect"
                  required
                  :rules="requiredRule"
                />
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="phone"
                  solo
                  label="Telefon"
                  required
                  :rules="requiredRule"
                />
              </v-flex>
              <v-flex>
                <v-textarea
                  v-model="message"
                  solo
                  label="Mesaj"
                  required
                  :rules="requiredRule"
                />
              </v-flex>
            </v-form>

            <v-flex>
              <button class="btn btn-dark btn-submit" @click="sendEmail()">
                Trimite mesaj
              </button>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
    </section>
  </div>
</template>
<script>
import { apiCall } from "../service/api";
export default {
  name: "Contact",
  data: () => ({
    head() {
      return {
        title:
          "Contact închirieri maşini si rent a car Nano rent a car Cluj – Targu Mures- Oradea –Contact  Nano rent a car Cluj",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Contact închirieri maşini si rent a car Cluj, Oradea, Targu-Mures Nano Rentacar. Pentru mai multe informatii despre ce masini de inchiriat sunt disponibile in Aeroportul Cluj-Napoca va invitam sa ne contactati pe email: nano.rentacar.cluj@gmail.com si la numarul de telefon : +40 (743) 285 053",
          },
          {
            hid: "keywords",
            name: "keywords",
            content:
              "contact, Nano rentacar, Nano rent a car cluj, masini de inchiriat cluj, inchirieri auto cluj, inchirieri masini cluj, telefon Nano rent a car contact, email Nano rent a car, adresa Nano Rentacar",
          },
        ],
      };
    },
    name: "",
    requiredRule: [(v) => !!v || "Campul este obligatoriu."],
    formValid: false,
    email: "",
    subject: "",
    phone: "",
    message: "",
  }),
  computed: {
    clientMail() {
      const mail = `
        <div class="container" style="width: 768; margin: 0 auto;">
          <h1 style="color: #e84c3d">Nano Rent a car</h1>
          <p>Mesaj nou</p>
            <div style="display: flex;">
            <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                <bold>Nume:</bold>
            </h4>
            <p style="margin-bottom: 0; padding-top: 4px;">
                ${this.name || "---"}
            </p>
            </div>
            <div style="display: flex;">
            <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                <bold>Email:</bold>
            </h4>
            <p style="margin-bottom: 0; padding-top: 4px;">
                ${this.email || "---"}
            </p>
            </div>
            <div style="display: flex;">
            <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                <bold>Subiect:</bold>
            </h4>
            <p style="margin-bottom: 0; padding-top: 4px;">
                ${this.subject || "---"}
            </p>
            </div>
            <div style="display: flex;">
            <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                <bold>Telefon:</bold>
            </h4>
            <p style="margin-bottom: 0; padding-top: 4px;">
                ${this.phone || "---"}
            </p>
            </div>
            <div style="display: flex;">
            <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                <bold>Mesaj:</bold>
            </h4>
            <p style="margin-bottom: 0; padding-top: 4px;">
                ${this.message || "---"}
            </p>
            </div>
          <div style="width: 100%; text-align: center; background-color: #e84c3d; height: 60px; padding-top: 20px">
            <a href="https://nano-rentacar.ro/" style="text-decoration: none; color: white; font-size: 24px">Nano rent a car</a>
          </div>
        </div>
      `;
      return mail;
    },
  },
  methods: {
    validate() {
      this.$refs.contactForm.validate();
    },
    sendEmail() {
      this.validate();
      if (this.formValid) {
        const payload = {
          body: this.clientMail,
        };
        apiCall("post", "/email/send", {
          ...payload,
          email: "nano.rentacar.cluj@gmail.com",
        }).then(() => {
          this.$router.push("/done?contact=true");
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.index-power {
  z-index: 2;
  position: relative;
}
.hero {
  height: 300px;
  background-image: url("../assets/cars.webp");
  background-size: cover;
  background-position: 100% 70%;
  display: flex;
  &_text {
    h1 {
      font-size: 34px;
      color: #fff;
      text-align: center;
    }
  }
}
.hero2 {
  background: #fff;
  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
}
</style>
