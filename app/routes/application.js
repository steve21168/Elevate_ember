import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  model() {
    var quotes = ['The difference between winning and losing is most often not quitting. - Walt Disney', 'When something is important enough, you do it even if the odds aren’t in your favor. - Elon Musk', 'If you want to know where your heart is, look to where your mind goes when it wanders. - Unknown', 'Beauty begins the moment you decide to be yourself. - Coco Chanel', 'Every experience, no matter how bad it seems, hold within it a blessing of some kind. The goal is to find it. - Buddha', 'The struggle you’re in today is developing the strength you need for tomorrow. - Unknown', 'The question isn’t who is going to let me; it’s who is going to stop me. - Ayn Rand', 'Quiet people have the loudest minds. - Stephen King', 'Do what you have to do until you can do what you want to do. - Oprah Winfrey', 'To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde', 'A diamond is a chunk of coal that did well under pressure. - Henry Kissinger', 'Doubt kills more dreams that failure ever will. - Karim Seddiki', 'Rule your mind or it will rule you. - Buddha', 'It does not matter how slowly you go as long as you do not stop. - Confucius', 'In the end, we only regret the chances we did not take. - Unknown', 'If you want something you’ve never had, you have to do something you’ve never done. - Unknown', 'The meaning of life is to find your gift. The purpose of life is to give it away. - William Shakespeare', 'Be an encourager. The world has plenty of critics already. - Dave Willis', 'Believe you can and you’re halfway there. - Teddy Roosevelt', 'Everything you’ve ever wanted is on the other side of fear. - George Addair', 'Creativity is intelligence having fun. - Albert Einstein', 'Failure is the opportunity to begin again more intelligently. - Henry Ford', 'Holding onto anger is like drinking poison and expecting the other person to die. - Buddha', 'Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi', 'Try to be a rainbow in someone’s cloud. - Maya Angelou', 'Nothing is impossible, the word itself says ‘I’m possible’! - Audrey Hepburn', 'Change your thoughts and you change your world. - Norman Vincent Peale', 'No act of kindness, no matter how small, is ever wasted - Aesop', 'The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb', 'Your time is limited, so don’t waste it living some else’s life. - Steve Jobs', 'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily. - Zig Ziglar']
    return quotes[Math.floor(Math.random() * quotes.length)]
  },
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    hide: function() {
      $('.quote').hide()
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
