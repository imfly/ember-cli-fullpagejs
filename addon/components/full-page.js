import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['fullpage-wrapper'],

  didRender() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      Ember.$("#fullpage").fullpage({
        sectionsColor: ['#4f7f9b', '#4BBFC3', '#1bbc9b', 'whitesmoke'],
        // anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        // menu: '#menu',
        scrollingSpeed: 600,
        autoScrolling: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third', 'Fourth and last page'],
        css3: true
      });
    });
  },
  
  willDestroyElement() {
    Ember.$.fn.fullpage.destroy('all');
  }
});
