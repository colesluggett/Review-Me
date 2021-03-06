export default /* GraphQL */ `
  mutation {
    u1: CreateUser(id: "u1", username: "willsmith", firstName: "Will", lastName: "Smith", sex: "Male", age: 23, bio: "Hi, I'm Will", location:"Bozeman, MT", phone:"1234567890", email:"email@email.com", password:"password") {
      id
      username
    }
    u2: CreateUser(id: "u2", username: "katiewong", firstName: "Katie",lastName:"Wong", sex: "Female", age: 18,bio:"This is Katie's profile",location:"Bozeman, MT", phone:"1234567890", email:"email@gmail.com", password:"password") {
      id
      username
    }
    u3: CreateUser(id: "u3", username: "colesluggett", firstName: "Cole", lastName:"Sluggett", sex: "Male", age: 21,  bio:"Hello",location:"Bozeman, MT", phone:"1234567890", email:"co.sluggett@gmail.com", password:"password") {
      id
      username
    }
    u4: CreateUser(id: "u4", username:"kaylawheeler", firstName: "Kayla",lastName:"Wheeler", sex: "Female",age: 21, bio:"Hi there", location:"Bozeman, MT", phone:"1234567890", email:"kaylaawheelerr@gmail.com", password:"password") {
      id
      username
    }
    u5: CreateUser(id: "u5", username:"dylanlynn", firstName: "Dylan", lastName: "Lynn", sex: "Male", age: 25, bio:"hi", location:"Bozeman, MT", phone:"1234567890", email:"dlynn@gmail.com", password:"password") {
      id
      username
    }

    
    
    r1: CreateReview(id: "r1", title: "Good Job!", stars: 3, text: "Pretty good group member for our project.") {
      id
    }
    aw1: AddUserReviews_written(from: { id: "u1" }, to: { id: "r1" }) {
      from {
        id
      }
    }
    ar1: AddUserReviews_received(from: { id: "r1" }, to: { id: "u2" }) {
      from {
        id
      }
    }

    r2: CreateReview(id: "r2", title: "You are Awesome!", stars: 5, text: "Thanks for buying me lunch!") {
      id
    }
    ar2: AddUserReviews_written(from: { id: "u3" }, to: { id: "r2" }) {
      from {
        id
      }
    }
    ab2: AddUserReviews_received(from: { id: "r2" }, to: { id: "u1" }) {
      from {
        id
      }
    }

    r3: CreateReview(id: "r3", title: "Bad Friend!", stars: 3, text: "Don't appreciate your humor and you can be very rude.") {
      id
    }
    ar3: AddUserReviews_written(from: { id: "u4" }, to: { id: "r3" }) {
      from {
        id
      }
    }
    ab3: AddUserReviews_received(from: { id: "r3" }, to: { id: "u5" }) {
      from {
        id
      }
    }

    r4: CreateReview(id: "r4", title: "Gains!", stars: 4, text: "Favorite workout buddy") {
      id
    }
    ar4: AddUserReviews_written(from: { id: "u2" }, to: { id: "r4" }) {
      from {
        id
      }
    }
    ab4: AddUserReviews_received(from: { id: "r4" }, to: { id: "u1" }) {
      from {
        id
      }
    }

    r5: CreateReview(id: "r5", title: "Thanks!", stars: 5, text: "Great Friend") {
      id
    }
    ar5: AddUserReviews_written(from: { id: "u3" }, to: { id: "r5" }) {
      from {
        id
      }
    }
    ab5: AddUserReviews_received(from: { id: "r5" }, to: { id: "u4" }) {
      from {
        id
      }
    }

    r6: CreateReview(id: "r6", title: "Good Job!", stars: 5, text: "Thanks for the ride to work") {
      id
    }
    ar6: AddUserReviews_written(from: { id: "u5" }, to: { id: "r6" }) {
      from {
        id
      }
    }
    ab6: AddUserReviews_received(from: { id: "r6" }, to: { id: "u2" }) {
      from {
        id
      }
    }

    r7: CreateReview(id: "r7", title: "Love!", stars: 3, text: "Pretty cool co-worker") {
      id
    }
    ar7: AddUserReviews_written(from: { id: "u5" }, to: { id: "r7" }) {
      from {
        id
      }
    }
    a7: AddUserReviews_received(from: { id: "r7" }, to: { id: "u3" }) {
      from {
        id
      }
    }


    r8: CreateReview(id: "r8", title: "Good Job!", stars: 5, text: "Best Manager!") {
      id
    }
    ar8: AddUserReviews_written(from: { id: "u3" }, to: { id: "r8" }) {
      from {
        id
      }
    }
    ab8: AddUserReviews_received(from: { id: "r8" }, to: { id: "u4" }) {
      from {
        id
      }
    }

    r9: CreateReview(id: "r9", title: "Good Job!", stars: 4, text: "Very easy to work with") {
      id
    }
    ar9: AddUserReviews_written(from: { id: "u1" }, to: { id: "r9" }) {
      from {
        id
      }
    }
    ab9: AddUserReviews_received(from: { id: "r9" }, to: { id: "u3" }) {
      from {
        id
      }
    }

    r10: CreateReview(id: "r10", title: "Negative!", stars: 2, text: "Didn't help much with the project") {
      id
    }
    ar10: AddUserReviews_written(from: { id: "u2" }, to: { id: "r10" }) {
      from {
        id
      }
    }
    ab10: AddUserReviews_received(from: { id: "r10" }, to: { id: "u1" }) {
      from {
        id
      }
    }

    r11: CreateReview(id: "r11", title: "Very Helpful!", stars: 4, text: "Very helpful") {
      id
    }
    ar11: AddUserReviews_written(from: { id: "u1" }, to: { id: "r11" }) {
      from {
        id
      }
    }
    ab11: AddUserReviews_received(from: { id: "r11" }, to: { id: "u4" }) {
      from {
        id
      }
    }

    r12: CreateReview(id: "r12", title: "Hey!", stars: 5, text: "Great Friend") {
      id
    }
    ar12: AddUserReviews_written(from: { id: "u3" }, to: { id: "r12" }) {
      from {
        id
      }
    }
    ab12: AddUserReviews_received(from: { id: "r12" }, to: { id: "u4" }) {
      from {
        id
      }
    }
  }
`;
