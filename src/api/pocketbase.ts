import Pocketbase from "pocketbase"; //pocketbase SDK

const pb = new Pocketbase(import.meta.env.VITE_PB_URL);

export default pb;
