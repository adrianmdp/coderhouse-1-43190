import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const getTasks = async (filter) => {
  const db = getFirestore();
  const collectionRef = collection(db, "tasks");

  let tasksCollection;

  if (filter.q === "") {
    const querySnapshot = await getDocs(collectionRef);

    tasksCollection = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } else {
    const q = query(
      collection(db, "tasks"),
      where("title", "%like%", filter.q)
    );
  }

  return tasksCollection;
};

const createTask = async (task) => {
  const db = getFirestore();
  const taskCollection = collection(db, "tasks");
  const { id } = await addDoc(taskCollection, task);

  return id;
};

export { createTask, getTasks };
