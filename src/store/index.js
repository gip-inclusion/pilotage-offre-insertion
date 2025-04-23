import { createStore } from 'vuex'

export const store = createStore({
    state () {
      return {
        servicesData:undefined,
        structuresData:undefined,
        endImport:false,
        selectedThematique: null,
        selectedRegion: null,
        selectedDepartement: "01",
        selectedCommune: null,
        selectedBassin: null,
        selectedZoomAndCenter: {
          zoom: 10,
          center: [46.3622,1.5231]
        }
      }
    },
    mutations: {
      initializeData (state,data) {
        state.servicesData = data
      },
      initializeStructuresData (state,data) {
        state.structuresData = data
      },
      endImport(state,value){
        state.endImport = value
      },
      SET_SELECTED_THEMATIQUE(state, theme) {
        state.selectedThematique = theme;
      },
      SET_SELECTED_DEPARTEMENT(state, departement) {
        state.selectedDepartement = departement;
      },
      SET_SELECTED_ZOOM_AND_CENTER(state, zoomAndCenter) {
        state.selectedZoomAndCenter = zoomAndCenter;
      },
      SET_SELECTED_COMMUNE(state, commune) {
        state.selectedCommune = commune;
      },
      SET_SELECTED_BASSIN(state, bassin) {
        state.selectedBassin = bassin;
      }
    }
})