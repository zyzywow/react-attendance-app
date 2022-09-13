// 상수 처리 해놓은 곳 , 쓰는곳에서 코드 힌트..
export const ACTION_TYPES = {
  ADD: "add",
  DELETE: "delete",
  CHECK: "check",
};
// 기본 state
export const initState = {
  count: 2,
  students: [
    { id: 1, name: "장동건", isHere: false },
    { id: 2, name: "이정재", isHere: false },
  ],
};

// react에서 가장 러인 커브가 높은곳이 redux

export const addStudents = (id, name) => {
  return {
    type: ACTION_TYPES.ADD,
    payload: { id, name, isHere: false },
  };
};
export const deleteStudent = (id) => {
  // console.log("나는 지우는 것입니다.");
  return {
    type: ACTION_TYPES.DELETE,
    payload: { id },
  };
};
export const checkStudent = (id) => {
  return {
    type: ACTION_TYPES.CHECK,
    payload: { id },
  };
};
const attendance = (state = initState, action) => {
  console.log("action===", action);
  switch (action.type) {
    case ACTION_TYPES.CHECK: {
      return {
        count: state.count,
        students: state.students.map((item, idx) => {
          if (item.id === action.payload.id) {
            return { ...item, isHere: !item.isHere };
          }
          return item;
        }),
      };
    }
    case ACTION_TYPES.DELETE: {
      return {
        count: state.count - 1,
        students: state.students.filter((item, idx) => {
          return item.id !== action.payload.id;
        }),
      };
    }
    case ACTION_TYPES.ADD: {
      const name = action.payload.name;
      const newStudent = {
        id: Math.random(),
        name: name,
        isHere: false,
      };
      console.log("나는 학생이 추가되는 곳입니다.");
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    }
    default:
      return state;
  }
};

export default attendance;
