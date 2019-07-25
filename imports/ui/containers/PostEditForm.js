import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';
import PostEditForm from '../components/PostEditForm';

export default withTracker(({ match }) => {
  const postSubscribe = Meteor.subscribe('posts.all');
  const _id = match.params._id;

  return {
    _id,
    post: Posts.findOne(_id),
    isReady: postSubscribe.ready()
  };
})(PostEditForm);
