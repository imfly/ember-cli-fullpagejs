import Ember from 'ember';

export default Ember.Component.extend({

  // fixme: can`t use the following when link-to 'home', because it doesn`t refresh
  // https://github.com/bkj/penny/issues/5
  // didInsertElement: function() {
  //   this.enableFullpage();
  // },
  //
  // willDestroyElement: function() {
  //   // Ember.$("#fullpage").destroy();
  // },

  enableFullpage: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      Ember.$("#fullpage").fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        // anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        // menu: '#menu',
        scrollingSpeed: 600,
        autoScrolling: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third and last page'],
        css3: true
      });
    });
  }.on('didRender')
});
