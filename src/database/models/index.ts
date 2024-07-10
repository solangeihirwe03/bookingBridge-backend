import Users from "./users";
import Sessions from "./sessions";

const db: {Users, Sessions} = {
    Users,
    Sessions
}

Object.values(db).forEach(model => {
    if (model.associate) {
      model.associate(db);
    }
  });
  
  export default db