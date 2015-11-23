const initialState = {
  friendsAdded: 3,
  friends: [ 
    {
      id: 1,
      name: 'Brian Lara',
      starred: false
    },
    {
      id: 2,
      name: 'Sachin Tendulkar',
      starred: false
    },
    {
      id: 3,
      name: 'Ricky Ponting',
      starred: false
    }
  ]
}

export default function list(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
