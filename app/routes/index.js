import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
  model(){
    var quotes = ['The difference between winning and losing is most often not quitting. - Walt Disney', 'When something is important enough, you do it even if the odds aren’t in your favor. - Elon Musk', 'If you want to know where your heart is, look to where your mind goes when it wanders. - Unknown', 'Beauty begins the moment you decide to be yourself. - Coco Chanel', 'Every experience, no matter how bad it seems, hold within it a blessing of some kind. The goal is to find it. - Buddha', 'The struggle you’re in today is developing the strength you need for tomorrow. - Unknown', 'The question isn’t who is going to let me; it’s who is going to stop me. - Ayn Rand', 'Quiet people have the loudest minds. - Stephen King', 'Do what you have to do until you can do what you want to do. - Oprah Winfrey', 'To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde', 'A diamond is a chunk of coal that did well under pressure. - Henry Kissinger', 'Doubt kills more dreams that failure ever will. - Karim Seddiki', 'Rule your mind or it will rule you. - Buddha', 'It does not matter how slowly you go as long as you do not stop. - Confucius', 'In the end, we only regret the chances we did not take. - Unknown', 'If you want something you’ve never had, you have to do something you’ve never done. - Unknown', 'The meaning of life is to find your gift. The purpose of life is to give it away. - William Shakespeare', 'Be an encourager. The world has plenty of critics already. - Dave Willis', 'Believe you can and you’re halfway there. - Teddy Roosevelt', 'Everything you’ve ever wanted is on the other side of fear. - George Addair', 'Creativity is intelligence having fun. - Albert Einstein', 'Failure is the opportunity to begin again more intelligently. - Henry Ford', 'Holding onto anger is like drinking poison and expecting the other person to die. - Buddha', 'Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi', 'Try to be a rainbow in someone’s cloud. - Maya Angelou', 'Nothing is impossible, the word itself says ‘I’m possible’! - Audrey Hepburn', 'Change your thoughts and you change your world. - Norman Vincent Peale', 'No act of kindness, no matter how small, is ever wasted - Aesop', 'The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb', 'Your time is limited, so don’t waste it living some else’s life. - Steve Jobs', 'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily. - Zig Ziglar']
    return quotes[Math.floor(Math.random() * quotes.length)]
  },
  actions: {
    allGoals() {
      this.transitionTo('goals')
    },
    newGoal() {
      this.transitionTo('goals.new')
    },
    logIn() {
      this.transitionTo('login')
    },
    signUp(){
      this.transitionTo('users.new')
    }
  }
})
