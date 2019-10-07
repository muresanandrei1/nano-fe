<template>
  <div class="list-background book-wrapper">
    <v-container>
      <v-layout row wrap>
        <v-flex md8 class="higher-z">
          <h1>Completeaza campurile si rezervati masina</h1>
          <p>Mai jos poti selecta locatia preluarii si predarii masinii,</p>
          <p>Precum si datele acestora.</p>
          <div class="prices mt-5 mb-5" v-if="this.car">
            <div class="prices__header">
              <h2>Zile</h2>
              <h2>1-4</h2>
              <h2>5-8</h2>
              <h2>>9</h2>
            </div>
            <div class="prices__content">
              <h2>&euro; / zi</h2>
              <h2>{{this.car.pret1}}</h2>
              <h2>{{this.car.pret2}}</h2>
              <h2>{{this.car.pret3}}</h2>
            </div>
          </div>
          <h1 class="total-price">
            Total:
            <span v-if="showPlaceholder">Va rog selectati datele</span>
            <span v-else>{{getTotal || "0,00"}} &euro; + garantie {{this.car.pret4}} &euro;</span>
          </h1>
        </v-flex>
        <v-flex md4 class="higher-z" pt-4 v-if="this.car">
          <h2>{{this.car.nume}}</h2>
          <img :src="`/api${this.car.poza.url}`" />
        </v-flex>
      </v-layout>
      <v-layout row wrap class="date-section" mt-4>
        <v-flex md6 class="higher-z" pr-2>
          <h1>Preluare</h1>
          <v-layout row>
            <v-flex md6 mr-2>
              <p>Data</p>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
                :min="minDate"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="comanda.preluare.data" append-icon="event" v-on="on" solo></v-text-field>
                </template>
                <v-date-picker v-model="comanda.preluare.data" no-title @input="menu1 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex md6 ml-2>
              <p>ora</p>
              <v-text-field v-model="comanda.preluare.ora" solo />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md12>
              <p>Locatie</p>
              <v-select :items="locatii" solo v-model="comanda.preluare.locatie" />
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md6 class="higher-z" pl-2>
          <h1>Predare</h1>
          <v-layout row>
            <v-flex md6 mr-2>
              <p>Data</p>
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
                :min="minDate"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="comanda.predare.data" append-icon="event" v-on="on" solo></v-text-field>
                </template>
                <v-date-picker v-model="comanda.predare.data" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex md6 ml-2>
              <p>ora</p>
              <v-text-field v-model="comanda.predare.ora" solo />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md12>
              <p>Locatie</p>
              <v-select :items="locatii" solo v-model="comanda.predare.locatie" />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="date-section">
        <v-flex md12 pt-5 class="higher-z">
          <h1>Date de contact</h1>
          <v-layout row>
            <v-flex md3 mr-2>
              <p>nume</p>
              <v-text-field v-model="comanda.nume" solo />
            </v-flex>
            <v-flex md3 ml-2 pr-4>
              <p>prenume</p>
              <v-text-field v-model="comanda.prenume" solo />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md6 mr-1>
              <p>email</p>
              <v-text-field v-model="comanda.email" solo />
            </v-flex>
            <v-flex md6 ml-2 pl-1>
              <p>Numar de telefon</p>
              <v-text-field v-model="comanda.telefon" solo />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md6 mr-1>
              <p>Serie Pass/CI</p>
              <v-text-field v-model="comanda.serie" solo />
            </v-flex>
            <v-flex md6 ml-2 pl-1>
              <p>CNP</p>
              <v-text-field v-model="comanda.cnp" solo />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md6 mr-1>
              <p>Tara rezidenta</p>
              <v-text-field v-model="comanda.tara" solo />
            </v-flex>
            <v-flex md6 ml-2 pl-1>
              <p>Serie Permis</p>
              <v-text-field v-model="comanda.permis" solo />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md6 mr-1>
              <p>Nr. Zbor</p>
              <v-text-field v-model="comanda.zbor" solo />
            </v-flex>
            <v-flex md6 ml-2 pl-1>
              <p>Limba</p>
              <v-text-field v-model="comanda.limba" solo />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md-6 mr-1>
              <p>Observatii</p>
              <v-textarea v-model="comanda.observatii" solo />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md4 class="higher-z">
          <button class="btn btn-dark btn-submit" @click="sendOrder()">Rezerva</button>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="overlay" />
  </div>
</template>

<script>
import { getCarById } from "../../service/cars";
import { apiCall } from "../../service/api";

export default {
  name: "Book",
  data: () => ({
    menu1: false,
    menu2: false,
    car: undefined,
    comanda: {
      preluare: {
        data: "",
        ora: "",
        locatie: "Aeroport Cluj-Napoca"
      },
      predare: {
        data: "",
        ora: "",
        locatie: "Aeroport Cluj-Napoca"
      },
      nume: "",
      prenume: "",
      email: "",
      telefon: "",
      serie: "",
      tara: "",
      cnp: "",
      permis: "",
      zbor: "",
      observatii: "",
      limba: ""
    },
    locatii: ["Aeroport Cluj-Napoca", "Cluj-Napoca", "Targu-Mures", "Oradea"]
  }),
  created() {
    getCarById(this.$route.params.id).then(rsp => {
      this.car = rsp.data;
    });
  },
  computed: {
    minDate() {
      const today = new Date();
      // const dd = today.getUTCDate();
      return this.formatDate(today);
    },
    showPlaceholder() {
      return (
        this.comanda.preluare.data === "" || this.comanda.predare.data === ""
      );
    },
    getTotal() {
      let price;
      if (this.getNrOfDays) {
        if (this.getNrOfDays >= 1 && this.getNrOfDays <= 4) {
          price = this.car.pret1;
        } else if (this.getNrOfDays >= 5 && this.getNrOfDays <= 8) {
          price = this.car.pret2;
        } else if (this.getNrOfDays >= 9) {
          price = this.car.pret3;
        }
      }
      return parseInt(this.getNrOfDays, 10) * parseInt(price, 10);
    },
    getNrOfDays() {
      const date1 = new Date(this.comanda.preluare.data);
      const date2 = new Date(this.comanda.predare.data);
      const Difference_In_Time = date2.getTime() - date1.getTime();
      const diff = Difference_In_Time / (1000 * 3600 * 24);
      return diff;
    }
  },
  methods: {
    formatDate(date) {
      let month = `${date.getMonth() + 1}`;
      let day = `${date.getDate()}`;
      const year = date.getFullYear();

      if (month.length < 2) month = `0${month}`;
      if (day.length < 2) day = `0${day}`;

      return [year, month, day].join("-");
    },
    clientMail() {
      const mail = `
        <div class="container" style="width: 768; margin: 0 auto;">
          <h1 style="color: #e84c3d">Nano Rent a car</h1>
          <p>Buna ziua,</p>
          <p>Cererea dumneavoastra a fost inregistrata cu success <br/>
            In cel mai scurt timp ea va fi verificata de un operator si veti fi contactat pentru finalizarea detaliilor.
          </p>
          <br/>
            <div style="flex: 0 0 50%; max-width: 50%;">
              <h3 style="text-decoration: underline; margin-bottom: 0;">Date Contact:</h3>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Limba:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.limba || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Tara:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.tara || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Nume si prenume:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.nume || ""} ${this.comanda.prenume || ""}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Email:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.email || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Telefon:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.telefon || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Serie Pass/CI:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.serie || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>CNP:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.cnp || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Serie Permis:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.permis || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Nr Zbor:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.zbor || "---"}
                </p>
              </div>
            </div>
            <br/>
            <div style="flex: 0 0 50%; max-width: 50%;">
              <h3 style="text-decoration: underline; margin-bottom: 0;">Date Comanda:</h3>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Masina se preia din:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.preluare.locatie || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Data de preluare:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.preluare.data}, ora: ${this.comanda.preluare
        .ora || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Masina se preda in:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.predare.locatie || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Data dee preedare:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.predare.data}, ora: ${this.comanda.predare
        .ora || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Numar de zile:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.getNrOfDays || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Masina dorita:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.car.nume || "---"}
                </p>
              </div>
              <div style="display: flex;">
                <h4 style="padding-right: 10px; color: color: #e84c3d; margin-bottom: 0">
                  <bold>Observatii:</bold>
                </h4>
                <p style="margin-bottom: 0; padding-top: 4px;">
                  ${this.comanda.observatii || "---"}
                </p>
            </div>
          </div>
          <br />
          <div style="display: flex;">
            <h1 style="color: #e84c3d">Total: ${this.getTotal}</h1>
          </div>
          <div style="width: 100%; text-align: center; background-color: #e84c3d; height: 60px; padding-top: 20px">
            <a href="https://nanorental.ro" style="text-decoration: none; color: white; font-size: 24px">Nano rent a car</a>
          </div>
        </div>
      `;
      return mail;
    },
    sendOrder() {
      const payload = {
        comanda: this.comanda,
        masina: this.car,
        body: this.clientMail()
      };
      apiCall("post", "/email/send", {
        ...payload,
        email: "murinuareemail@gmail.com"
      })
        .then(rsp => {
          apiCall("post", "/email/send", {
            ...payload,
            email: this.comanda.email
          })
            .then(rsp => {
              this.$router.push("/done");
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables/_colors.scss";
.prices {
  width: 45%;
  text-align: center;
  &__header,
  &__content {
    display: flex;
    flex-direction: row;
    h2 {
      flex: 0 0 25%;
      padding: 5px 0;
      margin-bottom: 0 !important;
      border-left: 1px solid white;
      &:first-child {
        border-left: 0;
      }
    }
  }
  &__header {
    border-bottom: 1px solid white;
  }
}
.higher-z {
  z-index: 2;
}
.overlay {
  background-image: url("../../assets/texture.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 50%;
  width: 100%;
  right: 50%;
  z-index: 1;
  transform: translateX(-50%);
}
.list-background {
  background-color: $red;
  min-height: calc(100vh - 92px);
  z-index: 1;
}
.book-wrapper {
  h1 {
    font-weight: bold;
    font-size: 30px;
    text-transform: uppercase;
    font-style: italic;
    margin-bottom: 18px;
  }
  h2 {
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    font-style: italic;
    margin-bottom: 18px;
  }
  label {
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
  }
  p {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    line-height: 20px;
  }
}
.date-section {
  p {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 525px) {
  .prices {
    width: 100%;
  }
}
</style>
