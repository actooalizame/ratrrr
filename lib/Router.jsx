/*FlowRouter.route('/', {
	name: 'home',
	action(){
		ReactLayout.render(AppLayout, {content: <TweetForm  />});
	}
});*/

FlowRouter.route('/', {
	name: 'userFeed',
	action(){
		ReactLayout.render(AppLayout, {content: <UserFeed  />});
	}
});