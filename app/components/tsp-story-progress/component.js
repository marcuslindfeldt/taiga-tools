import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['storycard__progress'],

  didInsertElement: function() {
    this.$('img').attr('src', this.storyWheel(100, 60));
  },

  storyWheel(outer, inner) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const or = outer / 2;
    const ir = inner / 2;

    canvas.width = outer;
    canvas.height = outer;

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(or,or,or-1, 0, 2*Math.PI, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(or,or,ir, 0, 2*Math.PI, false);
    ctx.stroke();
    ctx.beginPath();

    let a, c, s, i;
    for (i = 0; i < 5; i++) {
      a = i * 2 * Math.PI / 5 - Math.PI/2;
      c = Math.cos(a);
      s = Math.sin(a);
      ctx.moveTo(or + ir * c, or + ir * s);
      ctx.lineTo(or + or * c, or + or * s);
    }

    ctx.stroke();

    return canvas.toDataURL();
  },
});
