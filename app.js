$(document).ready(function() {

	var AppView = Backbone.View.extend({
	
		tagName:"span",

//		el: $("#abc"),

		setName: function(text) {
			
		
		},
		
		render:function(){
			this.$el.html("<a href='http://www.google.com'>hello world! </a>");
			return this;
		
		}
	
	});
	
	var app1 = new AppView();	
	$(document.body).append(app1.render().el) //AppView().el

	var app2 = new AppView();	
	$(document.body).append(app2.render().el) //AppView().el
	
	var app3 = new AppView();	
	$(document.body).append(app3.render().el) //AppView().el
	
	

});