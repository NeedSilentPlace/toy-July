import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Posts } from '../../api/posts/posts'
import PostEditForm from '../components/PostEditForm.coffee'

export default withTracker(({ match }) ->
  postSubscribe = Meteor.subscribe 'posts.all'
  { _id } = match.params

  return {
    _id
    post: Posts.findOne _id
    isReady: postSubscribe.ready()
  }
) PostEditForm
