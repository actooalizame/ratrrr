  var T = new Twit({
      consumer_key:         'KCVXdPs0h7Sa4QGjgAprxyYvo',
      consumer_secret:      'wSBuNzIJaaHgDH7uilHUGFda7hJ8jmAhE8Xc3BGkMdfu2xUnPH',
      access_token:         '2791089516-0T8sfHRZseXdyTR1DWxNKDkHH9fUjSR3pdHgwI2',
      access_token_secret:  '9LWjc8miiwl8Cd0Mhsl4A6yMSGOIUUtoBvb29Tw3Mf2fo'
  });
  var stream = T.stream('statuses/filter', { follow: '320046092' })

  stream.on('tweet', Meteor.bindEnvironment(function (rat) {
    var data = {
      userId: rat.user.id_str,
      userName: rat.user.name,
      userScreenName: rat.user.screen_name,
      userImg: rat.user.profile_image_url,
      ratId: rat.id_str,
      ratText: rat.text,
      ratDate: rat.created_at
    }
    Meteor.call('streamRat', data);
  }));