<template>

<div id="app">
    <div id="wrapper">
      <div class="intro">
        <h2>Informations sur ce tableau</h2>
        Cet outil vous accompagne dans l'analyse de l'offre d'insertion dans les territoires. Vous pouvez analyser la répartition de l'offre par territoire ou thématique. L'outil propose également des indicateurs clés utiles à la rédaction de vos rapports d'analyse.
        <br><br>
        ⚠️ Remarques : 
        <ul>
          <li>Les informations présentées s'appuient sur les données de <a href="https://data.inclusion.gouv.fr/" target="_blank">data·inclusion</a>, qui recense les services d’insertion sociale et professionnelle en France. Ce référencement n’étant pas encore complet, il est nécessaire d’utiliser l’outil avec précaution. La répartition de l’offre présentée doit être considérée comme un indicateur mais non pas comme la réalité du terrain.</li>
          <li>La capacité d’accueil des services référencés n’est pas prise en compte.</li>
          <li>Cet outil n'est pas un catalogue d'offre d'insertion. Pour consulter dans le détail les offres d'insertion sur un territoire, vous êtes invités à utiliser <a href="https://dora.inclusion.beta.gouv.fr/" target="_blank">l'outil DORA</a>.</li>
        </ul>
      </div>
      
      <div class="locfiltres_container">
        <h2>Filtres</h2>
        <GeoFilters />
      </div>

      <div id="pages_controler">
        <div class="page_btn" @click="(page='ensemble')" :class="page=='ensemble'?'active':''">Analyse du territoire</div>
        <div class="page_btn" @click="(page='zoom')" :class="page=='ensemble'?'':'active'">Données</div>
      </div>

      <vueTerritoire v-if="page=='ensemble'" class="datavue"></vueTerritoire>
      <vueTableau v-if="page=='zoom'&&dataImport" class="datavue"></vueTableau>

    </div>
  </div>

</template>

<script>

import { getData } from './import.js'
import GeoFilters from './components/GeoFilters.vue'
import VueTableau from './components/vueTableau.vue'
import VueTerritoire from './components/vueTerritoire.vue'
export default {
  components: {
    GeoFilters,
    VueTableau,
    VueTerritoire
  },
  data() {
    return {
      "page":"ensemble"
    }
  },

  computed: {
    dataImport() {
      return this.$store.state.endImport
    },
    selectedDepartement() {
      return this.$store.state.selectedDepartement
    },
    dataTest() {
      return this.$store.state.servicesData
    }
  },

  watch:{
    selectedDepartement:function(){
      getData(this.$store)
    }
  },
  
  created(){
    getData(this.$store)
  }
}
</script>

<style lang="scss">

@use "../css/variables.scss";
@use "../css/overload-fonts.css";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    #wrapper{
      width: 100%;
      max-width: 1020px;
      margin:0 auto;
      h1{
        color: #000638;
        font-family:"Marianne-Regular";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        margin-bottom:25px;
      }
      #pages_controler{
        display: flex;
        width: 374px;
        height: 40px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 0px;
        .page_btn{
          width: auto;
          padding:0 25px;
          color:#000638;
          font-family:Marianne;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border:1px solid #E6E6EB;
          border-bottom:1px solid white;
          border-radius: 8px 8px 0 0;
          background:#F2F3F5;
          margin-right: 5px;
          transform: translateY(1px);
          &:hover{
            text-decoration: underline;
          }
          &.active{
            font-weight: 700;
            background:#fff;
            cursor: default;
          }
        }
      }
      .intro{
        color:#000638;
        font-family: Marianne;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 25px;
        border:1px solid #E6E6EB;
        padding:25px;
        display:block;
        border-radius: 8px;
        h2{
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px;
          margin-bottom: 15px;
        }
        b{
          font-weight: 700;
        }
        a{
          color:black;
          text-decoration: underline;
        }
        ul{
          margin-left: 25px;
          max-width: 90%;
        }
      }
      .locfiltres_container{
        border:1px solid #E6E6EB;
        padding:25px;
        border-radius: 8px;
        margin-bottom: 25px;
        h2{
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px;
          margin-bottom: 15px;
        }
      }
      .filters_box {
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-top: 4px;
          max-height: 200px;
          overflow-y: auto;
          z-index: 1000;
          min-width: 100%;
          width: max-content;
          white-space: nowrap;
          .dropdown-separator {
            height: 1px;
            background-color: #ccc;
            margin: 4px 0;
          }
          .dropdown-item {
            padding: 8px 12px;
            &:hover {
              background-color: #f5f5f5;
            }
          }
        }
      }
      .datavue{
        border:1px solid #E6E6EB;
        padding:25px;
        border-radius: 8px;
        border-top-left-radius: 0px;
        h2{
          color: #000638;
          font-family:Marianne;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px;
          margin-bottom: 15px;
        }
      }
      .filters_selector{
          .filters_selector_item{
            display: inline-block;
            margin-right: 1rem;
            &:last-child{
              display: block;
              margin-top: 20px;
            }
          }
          margin-bottom: 25px;
          h4{
            color: #000638;
            font-family:Marianne;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            margin-bottom: 10px;
          }
          .filters_box{
            display: inline-flex;
            padding: 8px 35px 8px 16px;
            justify-content: left;
            align-items: center;
            font-family: Marianne;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            border-radius: 4px;
            cursor: pointer;
            border: 1px solid black;
            width: fit-content;
            position: relative;
            min-width: 115px;
            &:hover{
              background: #f5f5f5;
            }
            svg{
              position: absolute;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
    }
    
  }

</style>
