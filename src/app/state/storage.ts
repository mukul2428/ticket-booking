import createWebStorage from "redux-persist/lib/storage/createWebStorage";

interface StorageInterface {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

const createNoopStorage = (): StorageInterface => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve();
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage: StorageInterface =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;
