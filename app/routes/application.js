import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    }
  }
})

function randomPic() {
    // Array of image urls
    var bgPics = ['http://i.imgur.com/CmXIz9J.jpg', 'http://i.imgur.com/AFh5hCE.jpg', 'http://i.imgur.com/OV1LBgD.jpg', 'http://i.imgur.com/aU2WoJF.jpg', 'http://i.imgur.com/Rd9Ig5M.jpg', 'http://i.imgur.com/D80GBtZ.jpg', 'http://i.imgur.com/LKUO4Ia.jpg', 'http://i.imgur.com/OUzmVhm.jpg', 'http://i.imgur.com/x76WFJp.jpg', 'http://i.imgur.com/uWzJwu5.jpg', 'http://i.imgur.com/lmQGTh3.jpg', 'http://i.imgur.com/oRtM0ef.jpg', 'http://i.imgur.com/EowtVtp.jpg', 'http://i.imgur.com/R5wgqD2.jpg', 'http://i.imgur.com/yNjzhpL.jpg', 'http://i.imgur.com/tTTyRqf.jpg', 'http://i.imgur.com/5dLkDF8.jpg', 'http://i.imgur.com/xXRjans.jpg', 'http://i.imgur.com/ekmSuMm.jpg', 'http://i.imgur.com/EvkMU1L.jpg', 'http://i.imgur.com/JxkzkP7.jpg', 'http://i.imgur.com/ZpIgePd.jpg', 'http://i.imgur.com/hSi9ocO.jpg', 'http://i.imgur.com/U51QIRT.jpg', 'http://i.imgur.com/gYOUWNx.jpg', 'http://i.imgur.com/d4AMDK5.jpg', 'http://i.imgur.com/D47HEdI.jpg', 'http://i.imgur.com/gTTN7sE.jpg', 'http://i.imgur.com/DlIi0tv.jpg', 'http://i.imgur.com/7vAa2CG.jpg', 'http://i.imgur.com/izpKHXp.jpg', 'http://i.imgur.com/ulDr1gE.jpg', 'http://i.imgur.com/WXWGMlB.jpg', 'http://i.imgur.com/Ap0lpJF.jpg', 'http://i.imgur.com/2rw5GT8.jpg', 'http://i.imgur.com/HUWWlRW.jpg', 'http://i.imgur.com/UvMvTsJ.jpg', 'http://i.imgur.com/mUznO7t.jpg'];

    // jquery to add css
    $('body').css( {
      //selects random image to set as bg url & styles image for no scroll and fixed position
        'background' : 'url('+ bgPics[Math.floor(Math.random() * bgPics.length)] + ') no-repeat',
        'background-attachment' : 'fixed',
        'background-size' : 'cover'
    });
}

  // Show Random Image on Page Load
  randomPic()
