Template.getChart.helpers({
    createChart: function () {
      var thisId = Session.get('currentId');
      var rat = Rats.findOne({_id:thisId}),
          dali = rat.dali,
          yessir = rat.yessir,
          wtf = rat.wtf,
          meh = rat.meh,
          lol = rat.lol
          tasksData = [
            {
              y: dali,
              name: "dali"
            }, 
            {
              y: yessir,
              name: "yessir"
            },
            {
              y: wtf,
              name: "wtf"
            },
            {
              y: meh,
              name: "meh"
            },
            {
              y: lol,
              name: "lol"
            }
          ];
      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart', {
          series: [{
            type: 'pie',
            data: tasksData
          }]
        });
      });
    }

  });