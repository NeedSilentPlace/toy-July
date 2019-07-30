import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Posts } from '../../api/posts/posts'
import PostCard from '../components/PostCard.coffee'

export default withTracker(->
  favoritesSubscribe = Meteor.subscribe 'posts.favorites'
  
  return
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch()
    userId: Meteor.userId()
    isReady: favoritesSubscribe.ready()
) PostCard
