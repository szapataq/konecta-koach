import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons:{
    iconfont:'md'
  },
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#03dac5',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#00B8AD',
        warning: '#FFC107',
        bg:'#FFFFFF',
        bgview:'#F5F6F9',
        bgtitle: '#FF7900'
      },
    },
  },
});
