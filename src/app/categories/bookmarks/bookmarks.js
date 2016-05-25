angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'eggly.models.categories',
    'eggly.models.bookmarks'
])
.config(function ($stateProvider) {
	$stateProvider.state('eggly.categories.bookmarks', {
		url: 'categories/:category',
		views: {
			'bookmarks@': {
				templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
				controller: 'BookmarksCtrl as bookmarksCtrl'
			}
		}

	})
	;
})
.controller('BookmarksCtrl', function ($stateParams, BookmarksModel, CategoriesModel) {
	var bookmarksCtrl = this;
	
	CategoriesModel.setCurrentCategory($stateParams.category);
	
	BookmarksModel.getBookmarks().then(function(bookmarks) {
		bookmarksCtrl.bookmarks = bookmarks;
	});

	bookmarksCtrl.getCurrentCategory  = CategoriesModel.getCurrentCategory;
	bookmarksCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
	bookmarksCtrl.deleteBookmark = BookmarksModel.deleteBookmark;
})
;
