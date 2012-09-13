$(document).ready(function() {

	var AppView = Backbone.View.extend({
	
		tagName:"span",

//		el: $("#abc"),

		setName: function(text) {
			this.name = text;
			
		
		},
		
		render:function(){
			this.$el.html("<a href='http://www.google.com'>" + this.name + "</a>" + "<br /> <br />");
			return this;
		
		}
	
	});
	
	var app1 = new AppView();
	app1.setName("N1");	// 
	$(document.body).append(app1.render().el) //AppView().el

	var app2 = new AppView();	
	app2.setName(" Hello2 ")
	$(document.body).append(app2.render().el) //AppView().el
	
	var app3 = new AppView();
	app3.setName(" Hello 3 ");	
	$(document.body).append(app3.render().el) //AppView().el
	
	

});