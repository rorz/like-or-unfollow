// Auth the account(s)
// => Get User Info:
// --> First Name

// Start a Loop
// Perhaps do this programmatically in batches of (R) rounds for performance
// => For Each User:
// --> Get their list of followed accounts
//  --> If followed lists are paginated, generate (R) random page indices
// --> Get (R) random followed accounts from each list iteration
//
// => For Each Followed Result:
// --> Get post history
//  --> If paginated, as above
// --> Get a random post from the history list

// For Each round
// Display some kind of aniticipatory animation
// Given the user a choice between Unfollowing the result, or Liking its post
// (from the array[(R)])

// Thoughts:
// If multi-auth is possible, need to be secure in log-outs
// Probably implement de-auth on session close to stop abuse

// Would be nice to have some extra results for each user that could appear on a 'spinning' wheel style UI animation
