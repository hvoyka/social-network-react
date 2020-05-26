const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    /* {
      id: 1, followed: true, name: 'Stanislav', status: "GOGOGO!", location: {
        city: 'Omsk',
        country: 'Russia'
      }
    },
    {
      id: 2, followed: true, name: 'Dmitrich', status: "HEY!", location: {
        city: 'Minsk',
        country: 'Belarus'
      }
    },
    {
      id: 3, followed: false, name: 'Andrey', status: "hi evereone!", location: {
        city: 'Moscow',
        country: 'Russia'
      }
    } */
  ]
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state;
  }

}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
