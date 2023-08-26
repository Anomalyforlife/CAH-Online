// import axios from "axios";

import { logEvent } from "firebase/analytics";
import { deleteUser } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import {
  accountDeleted,
  recentLoginRequired,
  serverError,
} from "./toasts";
import { _analytics, _auth, _firestore } from "../utils/firebase/firebase";

export interface UserDocInfos {
  username : string;
  uid: string;
  accountCreationDate: Date;
}



// export const backendURL = "https://mesan-padel.herokuapp.com/"; // https://ludoh.herokuapp.com/ | http://revenge.dynv6.net:8000/

export const getUserDocData = async (uid: string) => {
  const docRef = doc(_firestore, "users", uid);
  const snap = await getDoc(docRef);
  const data = snap.data();

  return data;
};

// export const sendWebhook = async (type: string, ...params: any) => {
//   await axios.post(backendURL + "webhook", {
//     message: `Errore nella creazione dello user document: ${params}`,
//     type,
//   });
// };

export const createUserDocument = async (data: UserDocInfos) => {
  const { username, uid } = data;
  await setDoc(doc(_firestore, "users", data.uid), {
    ...data,
  }).catch(() => console.log(username, uid)); //sendWebhook("createUserDocument", username, uid));
};

export const selectProfilePic = async (uid:string, propicURL:string) => {
  await updateDoc(doc(_firestore, "users", uid), {
    proPic: propicURL,
  }).catch(() => console.log(uid)); //sendWebhook("selectProfilePic", uid));
};

export const getPropic = async (uid:string) => {
  const docRef = doc(_firestore, "users", uid);
  const snap = await getDoc(docRef);
  const data = snap.data();

  return data?.proPic? data.proPic : null;
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const _logout = async () => {
  location.href = "/";
  _auth.signOut();
};

export const userHasInfos = async (uid: string) => {
  let rv = false;

  const docRef = doc(_firestore, "users", uid);
  const snap = await getDoc(docRef);
  const data = snap.data();

  if (data) {
    if (data.username !== "" && data.accountCreationDate !== null) {
      rv = true;
    } else {
      rv = false;
    }
  }
  console.log(rv)

  return rv;
};

export const deleteAccount = async (uid: string) => {
  if (_auth.currentUser !== null) {
    await deleteUser(_auth.currentUser!)
      .then(async () => {
        logEvent(_analytics, "user_deleted_account");
        console.log(uid, "deleted")
        // await axios.post(backendURL + "delete-profile", { uuid: uid });
        accountDeleted();
      })
      .catch((e) =>
        e.code === "auth/requires-recent-login"
          ? recentLoginRequired()
          : serverError()
      );
  } else {
    serverError();
    window.location.href = "/";
  }
};