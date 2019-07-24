import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Posts } from '../../api/posts/posts'
import PostCard from '../components/PostCard'

export default withTracker(-> 
  postSubscribe = Meteor.subscribe('posts.all');

  {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    isLoggedIn: Meteor.userId(),
    isReady: postSubscribe.ready()
  }
) PostCard
