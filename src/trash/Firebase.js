import * as firebase from "server/Firebase";
import firestore from "firebase/firestore";
import firebaseConfig from "const/firebase";

const settings = { timestampsInSnapshots: true };

const config = {
  projectId: firebaseConfig.projectId,
  apiKey: firebaseConfig.apiKey,
  databaseURL: firebaseConfig.databaseURL,
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
