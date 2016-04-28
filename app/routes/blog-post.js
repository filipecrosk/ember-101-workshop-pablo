import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveComment(comment) {
      let blogPost = this.controller.get('model');
      this.store.createRecord('comment', {
        blogPost: blogPost,
        content: comment
      }).save();
    },

    deleteComment(commentId){
      this.store.findRecord('comment', commentId).then(function(comment) {
        comment.deleteRecord();
        comment.get('isDeleted'); // => true
        comment.save(); // => DELETE to /posts/1
      });
    }
  }
});