import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, User, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc, serverTimestamp, getDocFromServer } from 'firebase/firestore';
import { SurveyResponse, UserProgress } from '../types';
import firebaseConfig from '../firebase-applet-config.json';

// Detect whether firebase config is local placeholder or real config
const isPlaceholder = 
  !firebaseConfig || 
  firebaseConfig.apiKey === 'placeholder_api_key' || 
  firebaseConfig.projectId === 'placeholder_project_id' ||
  !firebaseConfig.apiKey;

let db: any = null;
let auth: any = null;
let isFirebaseConnected = false;

if (!isPlaceholder) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = firebaseConfig.firestoreDatabaseId 
      ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
      : getFirestore(app);
    auth = getAuth(app);
    isFirebaseConnected = true;
    console.log("Firebase initialized successfully with credentials.");

    // Validate connection asynchronously on boot as per integration skill guidelines
    getDocFromServer(doc(db, 'test', 'connection')).catch((error) => {
      if (error instanceof Error && error.message.includes('the client is offline')) {
        console.error("Please check your Firebase configuration.");
      }
    });

  } catch (error) {
    console.warn("Failed to initialize real Firebase, falling back to local storage simulator mode:", error);
    isFirebaseConnected = false;
  }
} else {
  console.log("Using browser LocalStorage simulation mode for smart digital literacy.");
}

// Global state simulation for Local Storage Fallback
const STORAGE_PREFIX = "smart_literacy_";
const memoryStore: Record<string, string> = {};

const getLocal = <T>(key: string, fallback: T): T => {
  if (typeof window === 'undefined' || !window.localStorage) {
    const val = memoryStore[STORAGE_PREFIX + key];
    return val ? JSON.parse(val) : fallback;
  }
  try {
    const data = localStorage.getItem(STORAGE_PREFIX + key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
};

const setLocal = (key: string, value: any) => {
  if (typeof window === 'undefined' || !window.localStorage) {
    memoryStore[STORAGE_PREFIX + key] = JSON.stringify(value);
    return;
  }
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.warn("Storage write error:", e);
  }
};

// Bootstrap pre-seeded default mock entries for Admin view if local-storage is empty!
// This is critical to make the Admin charts attractive, interactive, and functional right out of the box!
const seedLocalMockData = () => {
  const surveys = getLocal<any[]>("surveys", []);
  if (surveys.length === 0) {
    const mockSurveys: SurveyResponse[] = [
      {
        id: "s1",
        fullName: "Rahul Prasad",
        villageName: "Madanapalle",
        age: 26,
        gender: "Male",
        phoneNumber: "9845120301",
        educationLevel: "Intermediate (12th)",
        isSmartphoneUser: true,
        isInternetUser: true,
        hasDigitalAwareness: true,
        createdAt: new Date(Date.now() - 4 * 24 * 3600 * 1000).toISOString()
      },
      {
        id: "s2",
        fullName: "Lakshmi Devi",
        villageName: "Madanapalle",
        age: 48,
        gender: "Female",
        phoneNumber: "9440123456",
        educationLevel: "Primary School",
        isSmartphoneUser: true,
        isInternetUser: false,
        hasDigitalAwareness: false,
        createdAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString()
      },
      {
        id: "s3",
        fullName: "Ketan Sharma",
        villageName: "Chinnur",
        age: 62,
        gender: "Male",
        phoneNumber: "9882200331",
        educationLevel: "Non-literate",
        isSmartphoneUser: false,
        isInternetUser: false,
        hasDigitalAwareness: false,
        createdAt: new Date(Date.now() - 2 * 24 * 3600 * 1000).toISOString()
      },
      {
        id: "s4",
        fullName: "Anand G.",
        villageName: "Chinnur",
        age: 32,
        gender: "Male",
        phoneNumber: "8123456780",
        educationLevel: "Graduate (B.Sc)",
        isSmartphoneUser: true,
        isInternetUser: true,
        hasDigitalAwareness: true,
        createdAt: new Date(Date.now() - 1 * 24 * 3600 * 1000).toISOString()
      },
      {
        id: "s5",
        fullName: "Priya Murugan",
        villageName: "Vallur",
        age: 19,
        gender: "Female",
        phoneNumber: "7012345678",
        educationLevel: "Graduate (B.Tech)",
        isSmartphoneUser: true,
        isInternetUser: true,
        hasDigitalAwareness: true,
        createdAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString()
      },
      {
        id: "s6",
        fullName: "Subbaiah Naidu",
        villageName: "Vallur",
        age: 68,
        gender: "Male",
        phoneNumber: "9000123412",
        educationLevel: "Secondary School (10th)",
        isSmartphoneUser: true,
        isInternetUser: false,
        hasDigitalAwareness: false,
        createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString()
      },
      {
        id: "s7",
        fullName: "Meena Kumari",
        villageName: "Madanapalle",
        age: 35,
        gender: "Female",
        phoneNumber: "8885552211",
        educationLevel: "Secondary School (10th)",
        isSmartphoneUser: true,
        isInternetUser: true,
        hasDigitalAwareness: false,
        createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString()
      }
    ];
    setLocal("surveys", mockSurveys);
  }

  const certificates = getLocal<any[]>("certificates", []);
  if (certificates.length === 0) {
    const mockCerts = [
      { id: "c1", userName: "Priya Murugan", villageName: "Vallur", score: 95, date: "2026-06-04", sha: "8F9D7C2A" },
      { id: "c2", userName: "Rahul Prasad", villageName: "Madanapalle", score: 85, date: "2026-06-03", sha: "D4F1E5C8" },
      { id: "c3", userName: "Anand G.", villageName: "Chinnur", score: 90, date: "2026-06-02", sha: "3A7BC21F" }
    ];
    setLocal("certificates", mockCerts);
  }
};

seedLocalMockData();

// Standard handle error wrapper as required by Firestore integration guide
enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth?.currentUser?.uid || 'anonymous_sim',
      email: auth?.currentUser?.email || 'sim@local.com',
      emailVerified: auth?.currentUser?.emailVerified || true,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// EXPORTED API
export { isFirebaseConnected };

// User Authentication Hooks/Wrapper APIs
export interface SimpleUser {
  uid: string;
  displayName: string | null;
  email: string | null;
}

// Fake mock current user state if Firebase isn't configured
let simulatedCurrentUser: SimpleUser | null = getLocal<SimpleUser | null>("user", null);
const authSubscribes: ((u: SimpleUser | null) => void)[] = [];

export const monitorAuth = (callback: (u: SimpleUser | null) => void) => {
  if (isFirebaseConnected && auth) {
    return onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        callback({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email
        });
      } else {
        callback(null);
      }
    });
  } else {
    authSubscribes.push(callback);
    callback(simulatedCurrentUser);
    return () => {
      const idx = authSubscribes.indexOf(callback);
      if (idx !== -1) authSubscribes.splice(idx, 1);
    };
  }
};

export const loginWithGoogle = async (): Promise<SimpleUser> => {
  if (isFirebaseConnected && auth) {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return {
      uid: result.user.uid,
      displayName: result.user.displayName,
      email: result.user.email
    };
  } else {
    // Generate lovely rural resident identity for testing convenience
    const simulated: SimpleUser = {
      uid: "usr_" + Math.random().toString(36).substring(2, 9),
      displayName: "Guest Learner",
      email: "learner@village.org"
    };
    simulatedCurrentUser = simulated;
    setLocal("user", simulated);
    authSubscribes.forEach(cb => cb(simulated));
    return simulated;
  }
};

export const logoutOfApp = async (): Promise<void> => {
  if (isFirebaseConnected && auth) {
    await signOut(auth);
  } else {
    simulatedCurrentUser = null;
    setLocal("user", null);
    authSubscribes.forEach(cb => cb(null));
  }
};

// SURVEY DB ACTIONS
export const submitSurvey = async (formData: Omit<SurveyResponse, 'id' | 'createdAt'>): Promise<SurveyResponse> => {
  const id = "srv_" + Math.random().toString(36).substring(2, 9);
  const response: SurveyResponse = {
    ...formData,
    id,
    createdAt: new Date().toISOString()
  };

  if (isFirebaseConnected && db) {
    const path = "surveys";
    try {
      await setDoc(doc(db, path, id), {
        id: response.id,
        fullName: response.fullName.trim(),
        villageName: response.villageName.trim(),
        age: Number(response.age),
        gender: response.gender,
        phoneNumber: response.phoneNumber.trim(),
        educationLevel: response.educationLevel,
        isSmartphoneUser: Boolean(response.isSmartphoneUser),
        isInternetUser: Boolean(response.isInternetUser),
        hasDigitalAwareness: Boolean(response.hasDigitalAwareness),
        createdAt: new Date()
      });
      // Synchronously cache into local storage so it displays immediately
      const list = getLocal<SurveyResponse[]>("surveys", []);
      list.unshift(response);
      setLocal("surveys", list);
      return response;
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, `${path}/${id}`);
    }
  }

  // Backup to local storage
  const list = getLocal<SurveyResponse[]>("surveys", []);
  list.unshift(response);
  setLocal("surveys", list);
  return response;
};

export const getAllSurveys = async (): Promise<SurveyResponse[]> => {
  if (isFirebaseConnected && db) {
    const path = "surveys";
    try {
      const snap = await getDocs(collection(db, path));
      const items: SurveyResponse[] = [];
      snap.forEach((docSnap) => {
        const item = docSnap.data();
        let createdStr = new Date().toISOString();
        if (item.createdAt?.toDate) {
          createdStr = item.createdAt.toDate().toISOString();
        } else if (typeof item.createdAt === 'string') {
          createdStr = item.createdAt;
        }
        items.push({
          id: docSnap.id,
          fullName: item.fullName || 'Anonymous',
          villageName: item.villageName || 'Village',
          age: Number(item.age) || 0,
          gender: item.gender || 'Other',
          phoneNumber: item.phoneNumber || '',
          educationLevel: item.educationLevel || '',
          isSmartphoneUser: Boolean(item.isSmartphoneUser),
          isInternetUser: Boolean(item.isInternetUser),
          hasDigitalAwareness: Boolean(item.hasDigitalAwareness),
          createdAt: createdStr
        });
      });
      if (items.length > 0) {
        setLocal("surveys", items);
        return items;
      }
    } catch (e) {
      handleFirestoreError(e, OperationType.LIST, path);
    }
  }

  return getLocal<SurveyResponse[]>("surveys", []);
};

// CERTIFICATES REGISTRY
export interface CertificateRecord {
  id: string;
  userName: string;
  villageName: string;
  score: number;
  date: string;
  sha: string;
}

export const registerCertificate = async (userName: string, villageName: string, score: number): Promise<CertificateRecord> => {
  const id = "cert_" + Math.random().toString(36).substring(2, 10);
  const sha = Math.random().toString(36).substring(2, 8).toUpperCase() + Math.floor(Math.random() * 90 + 10).toString();
  const record: CertificateRecord = {
    id,
    userName: userName.trim(),
    villageName: villageName.trim(),
    score: Number(score),
    date: new Date().toISOString().split('T')[0],
    sha
  };

  if (isFirebaseConnected && db) {
    const path = "certificates";
    try {
      await setDoc(doc(db, path, id), record);
      const list = getLocal<CertificateRecord[]>("certificates", []);
      list.unshift(record);
      setLocal("certificates", list);
      return record;
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, `${path}/${id}`);
    }
  }

  const list = getLocal<CertificateRecord[]>("certificates", []);
  list.unshift(record);
  setLocal("certificates", list);
  return record;
};

export const getAllCertificates = async (): Promise<CertificateRecord[]> => {
  if (isFirebaseConnected && db) {
    const path = "certificates";
    try {
      const snap = await getDocs(collection(db, path));
      const items: CertificateRecord[] = [];
      snap.forEach((docSnap) => {
        items.push(docSnap.data() as CertificateRecord);
      });
      if (items.length > 0) {
        setLocal("certificates", items);
        return items;
      }
    } catch (e) {
      handleFirestoreError(e, OperationType.LIST, path);
    }
  }

  return getLocal<CertificateRecord[]>("certificates", []);
};

// USER LEARNING PROGRESS
export const saveUserProgress = async (userId: string, progress: UserProgress): Promise<void> => {
  setLocal(`progress_${userId}`, progress);
  if (isFirebaseConnected && db) {
    const path = "progress";
    try {
      await setDoc(doc(db, path, userId), {
        surveyCompleted: Boolean(progress.surveyCompleted),
        completedModules: progress.completedModules || [],
        quizHighScores: progress.quizHighScores || {},
        badges: progress.badges || []
      });
      return;
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, `${path}/${userId}`);
    }
  }
};

export const getUserProgress = async (userId: string): Promise<UserProgress> => {
  const fallback: UserProgress = {
    surveyCompleted: false,
    completedModules: [],
    quizHighScores: {},
    badges: []
  };

  if (isFirebaseConnected && db) {
    const path = "progress";
    try {
      const docSnap = await getDoc(doc(db, path, userId));
      if (docSnap.exists()) {
        const data = docSnap.data() as UserProgress;
        setLocal(`progress_${userId}`, data);
        return data;
      }
      return getLocal<UserProgress>(`progress_${userId}`, fallback);
    } catch (e) {
      handleFirestoreError(e, OperationType.GET, `${path}/${userId}`);
    }
  }

  return getLocal<UserProgress>(`progress_${userId}`, fallback);
};
