import Ember from 'ember';

function clone(from, to) {
  // from = Ember.$.parseJSON(from);
  for (var key in to) {
    if (from.hasOwnProperty(key)) {
      console.log(from[key]);
      to[key] = from[key];
    }
  }

  return to;
}

export default Ember.Component.extend({
  tagName: 'div',
  options: {
    sectionsColor: ['#4f7f9b', '#4BBFC3', '#1bbc9b', 'whitesmoke'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    scrollingSpeed: 600,
    autoScrolling: false,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third', 'Fourth and last page'],
    css3: true
  },

  didRender() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      var options = clone(this, this.options);
      console.log("haha= ", options);
      Ember.$("#fullpage").fullpage(options);
    });
  },

  willDestroyElement() {
    Ember.$.fn.fullpage.destroy('all');
  }
});
