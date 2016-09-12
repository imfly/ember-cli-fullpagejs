import Ember from 'ember';

function clone(from, to) {
  for (var key in to) {
    if (from.hasOwnProperty(key)) {
      var value = Ember.$.parseJSON(from[key]) // Please use Standard JSON, and text wrapped by ''
      to[key] = value;
    }
  }

  return to;
}

export default Ember.Component.extend({
  tagName: 'div',
  // https://github.com/alvarotrigo/fullPage.js#options
  options: {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third', 'Fourth and last page'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ['#4f7f9b', '#4BBFC3', '#1bbc9b', 'whitesmoke'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction) {},
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {},
    afterResize: function() {},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
  },

  didRender() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      var options = clone(this, this.options);
      Ember.$("#fullpage").fullpage(options);
    });
  },

  willDestroyElement() {
    Ember.$.fn.fullpage.destroy('all');
  }
});
