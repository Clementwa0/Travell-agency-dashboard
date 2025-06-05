import { Client, Account, Databases, Storage } from 'appwrite';


export const appwriteConfig = {
    endpointUrl: import.meta.env.VITE_APPWRITE_ENDPOINT,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
}

// Validate required configuration
if (!appwriteConfig.endpointUrl || !appwriteConfig.projectId) {
    throw new Error('Missing required Appwrite configuration. Please check your environment variables.');
}

const client = new Client();

// Chain these methods properly
client
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);


export { client, account, database, storage };


