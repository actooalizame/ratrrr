Reports = new Mongo.Collection('reports');
/*
Meteor.startup(function () {
  if (Reports.find({}).count() == 19088) {
    var data = JSON.parse(Assets.getText('seed.json'));
   
      data.forEach(function (item, index, array) {
            Reports.insert(item);
        });
  }
});*/