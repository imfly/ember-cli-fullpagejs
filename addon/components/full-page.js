import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
      Ember.$('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 1000
      });
  },

  willRemoveElement: function() {
  
  }

});
