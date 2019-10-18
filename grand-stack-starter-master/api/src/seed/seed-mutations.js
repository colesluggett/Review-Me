export default /* GraphQL */ `
  mutation {
    u1: CreateUser(id: "u1", name: "Will") {
      id
      name
    }
    u2: CreateUser(id: "u2", name: "Bob") {
      id
      name
    }
    u3: CreateUser(id: "u3", name: "Jenny") {
      id
      name
    }
    u4: CreateUser(id: "u4", name: "Angie") {
      id
      name
    }
    u5: CreateUser(id: "u5", name: "Cole") {
      id
      name
    }
    u6: CreateUser(id: "u6", name: "Kayla") {
      id
      name
    }
    u7: CreateUser(id: "u7", name: "Dylan") {
      id
      name
    }

    r1: CreateReview(id: "r1", stars: 4, text: "Great IPA selection!", date: { formatted: "2016-01-03"}) {
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

    r2: CreateReview(id: "r2", stars: 5, text: "", date: { formatted: "2016-07-14"}) {
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

    r3: CreateReview(id: "r3", stars: 3, text: "", date: { formatted: "2018-09-10"}) {
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

    r4: CreateReview(id: "r4", stars: 5, text: "", date: { formatted: "2017-11-13"}) {
      id
    }
    ar4: AddUserReviews_written(from: { id: "u3" }, to: { id: "r4" }) {
      from {
        id
      }
    }
    ab4: AddUserReviews_received(from: { id: "r4" }, to: { id: "u2" }) {
      from {
        id
      }
    }
  }
`;
