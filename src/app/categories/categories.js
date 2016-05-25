angular.module('categories', [
    'eggly.models.categories'
])
.config(function ($stateProvider) {
	$stateProvider.state('eggly.categories', {
		url: '/',
		views: {
			'categories@': {
				controller: 'CategoriesCtrl as categoriesCtrl',
				templateUrl: 'app/categories/categories.tmpl.html'
			},
			'bookmarks@': {
				controller: 'BookmarksCtrl as bookmarksCtrl',
				templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
			} 
		}
	})
	;
})
.controller('CategoriesCtrl', function (CategoriesModel) {
	var categoriesCtrl = this;
	CategoriesModel.getCategories()
	.then(function(result) {
		categoriesCtrl.categories = result;
	});	
})
;
