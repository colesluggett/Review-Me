export default /* GraphQL */ `
  mutation {
    u1: CreateUser(id: "u1", firstName: "Will", lastName: "Smith", age: 23, username: "willsmith", bio: "Hi, I'm Will", sex: "Male", location:"Bozeman, MT", phone:4061231234, email:"email@email.com") {
      id
      name
    }
    u2: CreateUser(id: "u2", firstName: "Katie",lastName:"Wong", sex: "Female", age: 18, username: "katiewong",bio:"This is Katie's profile",location:"Bozeman, MT", phone:4061231233, email:"email@gmail.com") {
      id
      name
    }
    u3: CreateUser(id: "u3", firstName: "Cole", lastName:"Sluggett", sex: "Male", age: 21, username: "colesluggett", bio:"Hello",location:"Bozeman, MT", phone:4061231254, email:"co.sluggett@gmail.com") {
      id
      name
    }
    u4: CreateUser(id: "u4", firstName: "Kayla",lastName:"Wheeler", sex: "Female",age: 21, username:"kaylawheeler",bio:"Hi there", location:"Bozeman, MT", phone:4061221234, email:"kaylaawheelerr@gmail.com") {
      id
      name
    }
    u5: CreateUser(id: "u5", firstName: "Dylan", lastName: "Lynn", sex: "Male", age: 25, username:"dylanlynn",bio:"hi" location:"Bozeman, MT", phone:4061237234, email:"dlynn@gmail.com") {
      id
      name
    }

    
    
    r1: CreateReview(id: "r1", stars: 3, text: "Pretty good group member for our project.", dateOfReview: { formatted: "2016-01-03"}) {
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

    r2: CreateReview(id: "r2", stars: 5, text: "Thanks for buying me lunch!", dateOfReview: { formatted: "2016-07-14"}) {
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

    r3: CreateReview(id: "r3", stars: 3, text: "Loser. KYS", dateOfReview: { formatted: "2018-09-10"}) {
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

    r4: CreateReview(id: "r4", stars: 4, text: "Favorite workout buddy", dateOfReview: { formatted: "2017-11-13"}) {
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

    r5: CreateReview(id: "r5", stars: 5, text: "Great Friend", dateOfReview: { formatted: "2017-11-13"}) {
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

    r6: CreateReview(id: "r5", stars: 5, text: "Thanks for the ride to work", dateOfReview: { formatted: "2017-11-13"}) {
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

    r7: CreateReview(id: "r5", stars: 3, text: "Pretty cool co-worker", dateOfReview: { formatted: "2017-11-13"}) {
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


    r8: CreateReview(id: "r5", stars: 5, text: "Best Manager!", dateOfReview: { formatted: "2017-11-13"}) {
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

    r9: CreateReview(id: "r5", stars: 4, text: "Very easy to work with", dateOfReview: { formatted: "2017-11-13"}) {
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

    r10: CreateReview(id: "r5", stars: 2, text: "Didn't help much with the project", dateOfReview: { formatted: "2017-11-13"}) {
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

    r11: CreateReview(id: "r5", stars: 4, text: "Very helpful", dateOfReview: { formatted: "2017-11-13"}) {
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

    r12: CreateReview(id: "r5", stars: 5, text: "Great Friend", dateOfReview: { formatted: "2017-11-13"}) {
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
