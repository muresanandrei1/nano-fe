<template>
  <div class="home">
    <section class="hero">
      <div class="hero-image">
        <div class="hero-text">
          <h1>GASESTE</h1>
          <h1>MASINA PERFECTA</h1>
          <h1>PENTRU TINE.</h1>
          <div class="hero-text__bottom">
            <p class="bold">Mai jos poti gasi cea mai cool gama de masini.</p>
            <p>alege-o pe cea preferata si exploreaza</p>
          </div>
        </div>
      </div>
    </section>
    <div class="white-section">
      <v-flex class="z-indexpower">
        <h2>
          <bold>Inchirieri auto si Rent a Car Cluj Napoca</bold> –
          Nano-rentacar.ro Cluj
        </h2>
        <h2>
          <bold
            >Servicii de Inchirieri Auto Cluj la Aeroportul International Avram
            Iancu Cluj-Napoca</bold
          >
        </h2>
      </v-flex>
    </div>
    <HomeCars />
    <div class="white-section">
      <v-flex class="z-indexpower">
        <h2 class="head1">
          Descopera oferta completa de masini de
          <router-link to="/masini">inchiriat</router-link>
        </h2>
        <h2 class="head2">
          Nano-Rent a car Cluj-Napoca este o echipa cu experienta din domeniul
          rent a car care va furnizeaza servicii de
          <router-link to="/masini"
            >inchirieri masini si rent a car</router-link
          >
          cu sau fară sofer, cu <bold>preluare şi livrare gratuita</bold> în
          <bold>Aeroportul International Avram Iancu Cluj-Napoca.</bold>
        </h2>
      </v-flex>
    </div>
    <section class="hero hero2">
      <div class="hero-image2">
        <v-container>
          <div class="hero-text">
            <h2>
              Echipa de la Nano-Rent a car Cluj-Napoca va sta la dispozitie
              non-stop cu o gama diversificata
              <router-link to="/masini">de masini de inchiriat</router-link>
              complet echipate pentru siguranta si confortul dumneavoastra la
              <span class="color-red"
                >cele mai mici preturi de pe piata de rent a car</span
              >
              din Cluj-Napoca.
            </h2>
            <h2>
              Nano-Rent a car nu percepe plata în avans pentru masina de
              inchiriat la
              <span class="color-red">rezervarea online sau prin telefon.</span>
              Va stam la dispozitie cu oferte complete de masini de inchiriat in
              regim de rent a car in orasele: Cluj-Napoca, Targu-Mures si
              Oradea.
            </h2>
            <h2>
              Nano-Rent a car ofera si un serviciu de
              <span class="color-red">inchirieri auto in regim de urgenta</span
              >, indiferent de ora sau zi, pentru persoanele care doresc sa
              opteze pentru rent a car Cluj.
            </h2>
            <h2>
              Nano-Rent a car se adreseaza tuturor persoanelor aflate fie in
              vacanta, fie in interes de serviciu si care doresc sa
              <router-link to="/masini"
                >inchirieze o masina in Cluj.</router-link
              >
            </h2>
          </div>
        </v-container>
      </div>
    </section>
    <section class="cards">
      <v-container>
        <v-layout row wrap class="z-indexpower">
          <v-flex :class="$vuetify.breakpoint.xs ? 'pa-2' : 'pr-2'" md3>
            <v-card class="pa-3">
              <h1>Profesionalism</h1>
              <img src="../assets/profesionalism.svg" width="100" />
              <h2>
                Echipa cu experienta de la Nano rent a car va avea întotdeauna
                grijă de închirierea autovehiculului în funcție de alegerea dvs.
              </h2>
            </v-card>
          </v-flex>
          <v-flex :class="$vuetify.breakpoint.xs ? 'pa-2' : 'px-2'" md3>
            <v-card class="pa-3">
              <h1>Cele mai bune preturi de pe piata de rent a car Cluj</h1>
              <img src="../assets/wallet.svg" width="100" />
              <h2>
                Datorita flexibilitati si a preturilor mici, Nano-rentacar a
                devenit una din cele mai apreciate firme de închiriere de mașini
                din Cluj.
              </h2>
            </v-card>
          </v-flex>
          <v-flex :class="$vuetify.breakpoint.xs ? 'pa-2' : 'px-2'" md3>
            <v-card class="pa-3">
              <h1>Masini in cele mai bune conditii</h1>
              <img src="../assets/security.svg" width="100" />
              <h2>
                Pentru siguranta dumneavoastra, toate masinile de inchiriat din
                flota Nano-rent a car sunt bine intretinute si asigurate.
              </h2>
            </v-card>
          </v-flex>
          <v-flex :class="$vuetify.breakpoint.xs ? 'pa-2' : 'pl-2'" md3>
            <v-card class="pa-3">
              <h1>Fara costuri sau taxe ascunse</h1>
              <img src="../assets/check.svg" width="100" />
              <h2>
                Semnarea contractului de inchiriere auto al unei masini se face
                intr-un mod transparent, fara taxe sau alte costuri ascunse.
              </h2>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <v-container class="pa-0 overlay" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCars from "@/components/HomeCars.vue";

export default {
  name: "home",
  head() {
    return {
      title:
        "Inchirieri auto si rent a car aeroport Cluj |Inchirieri masini Cluj| by Nano rent a car Cluj",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Cautati masini de inchiriat in Cluj? Nano-rent a car Cluj va furnizeaza servicii de inchirieri de maşini si rent a car cu sau fară sofer în Aeroportul International Avram Iancu Cluj-Napoca si Cluj-Napoca.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Inchirieri auto Cluj, Rent a car Cluj, Masini de inchiriat Cluj, Nano rent a car Cluj, inchirieri masini Cluj, cele mai mici preturi de pe piata de rent a car Cluj, cel mai ieftin rent a car Cluj, rent a car Aeroport Cluj, inchirieri auto cluj ieftine, inchirieri auto in regim de urgenta",
        },
      ],
    };
  },
  components: {
    HomeCars,
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/variables/_colors.scss";
.z-indexpower {
  position: relative;
  z-index: 10;
}
.white-section {
  background-color: white;
  text-align: center;
  padding: 24px;
  z-index: 100000;
  h2 {
    z-index: 100000;
    font-size: 24px;
    font-weight: 400;
    bold {
      font-weight: bolder;
    }
    &.head1 {
      padding: 12px;
      font-size: 30px;
      font-weight: 600;
    }
    &.head2 {
      width: auto;
      padding: 12px 48px;
      font-size: 20px;
      font-weight: 400;
    }
  }
}
.overlay {
  background-image: url("../assets/texture.png");
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
.bold {
  font-weight: 800;
}
.hero {
  height: 500px;
  &-text {
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      line-height: 65px;
      font-size: 70px;
      font-family: "Roboto";
      font-style: italic;
    }
    &__bottom {
      font-size: 16px;
      text-align: center;
      margin-top: 24px;
      p {
        text-transform: uppercase;
        margin-bottom: 0;
      }
    }
  }
  &-image {
    position: relative;
    background-image: url("../assets/homepage.jpg");
    background-size: cover;
    background-position: center;
    height: inherit;
  }
  &-image2 {
    position: relative;
    background-image: url("../assets/airport.jpg");
    background-size: cover;
    background-position: center;
    height: inherit;
  }
}
.hero2 {
  @media screen and (max-width: 500px) {
    height: 1000px;
  }
  & .hero-text {
    h2 {
      margin-bottom: 32px;
    }
    top: 0;
    left: 0;
    transform: initial;
    position: relative;
    color: #fff;
    z-index: 100;
    text-align: center;
    font-size: 22px;
    .color-red {
      color: $red;
    }
  }
}
.cards {
  h1,
  h2 {
    text-align: center;
    font-size: 14px;
    min-height: 45px;
  }
  h1 {
    color: $red;
    font-weight: bold;
  }
  h2 {
    margin-top: 24px;
    min-height: 110px;
  }
  img {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
