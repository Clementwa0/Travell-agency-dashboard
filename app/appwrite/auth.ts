import { OAuthProvider, Query } from "appwrite";
import { account, appwriteConfig, database } from "./client";
import { redirect } from "react-router";

export const loginWithGoogle = async () => {
    try{
       account.createOAuth2Session(OAuthProvider.Google)

    }catch (error) {
        console.error("Google login failed:", error);
        throw error;
    }
};
export const getUser = async () => {
    try{
        const user = await account.get();
        
        if(!user) return redirect('/sign-in')

        const {documents} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [
                Query.equal('userId', user.$id),
                Query.select(['name','email','imageUrl','joinedAt','accountId'])
            ]    
        )

    }catch (error) {
        console.error("Google login failed:", error);
        throw error;
    }
};

export const logoutUser = async () => {
    try{
        await account.deleteSession('current');
        return redirect('/sign-in');
    }catch (error) {
        console.error("Google login failed:", error);
        throw error;
    }
};



export const getGooglePicture = async () => {
    try {
        const user = await account.get();
        
        if (!user) {
            throw new Error('User not authenticated');
        }

        // Get the OAuth2 session data
        const session = await account.getSession('current');
        
        if (!session?.providerAccessToken) {
            throw new Error('No access token available');
        }

        // Fetch profile photo from Google People API
        const response = await fetch(
            'https://people.googleapis.com/v1/people/me?personFields=photos',
            {
                headers: {
                    'Authorization': `Bearer ${session.providerAccessToken}`,
                    'Accept': 'application/json',
                }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch profile photo');
        }

        const data = await response.json();
        const profilePhotoUrl = data.photos?.[0]?.url;

        if (!profilePhotoUrl) {
            throw new Error('No profile photo found');
        }

        return profilePhotoUrl;

    } catch (error) {
        console.error("Failed to fetch Google profile picture:", error);
        throw error;
    }
};

export const getGoogleName = async () => {
    try {
        const user = await account.get();
        
        if (!user) {
            throw new Error('User not authenticated');
        }

        const session = await account.getSession('current');
        
        if (!session?.providerAccessToken) {
            throw new Error('No access token available');
        }

        const response = await fetch(
            'https://people.googleapis.com/v1/people/me?personFields=names',
            {
                headers: {
                    'Authorization': `Bearer ${session.providerAccessToken}`,
                    'Accept': 'application/json',
                }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch user name');
        }

        const data = await response.json();
        const userName = data.names?.[0]?.displayName;

        if (!userName) {
            throw new Error('No user name found');
        }

        return userName;

    } catch (error) {
        console.error("Failed to fetch Google name:", error);
        throw error;
    }
};

export const storeUserData = async () => {
    try {
        const user = await account.get();
        
        if (!user) {
            throw new Error('User not authenticated');
        }

        const name = await getGoogleName();
        const imageUrl = await getGooglePicture();

        const userData = {
            userId: user.$id,
            email: user.email,
            name,
            imageUrl,
            joinedAt: new Date().toISOString(),
            accountId: user.$id
        };

        const response = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            user.$id,
            userData
        );

        return response;

    } catch (error) {
        console.error("Failed to store user data:", error);
        throw error;
    }
};

export const getExistingUser = async () => {
    try {
        const user = await account.get();
        
        if (!user) {
            throw new Error('User not authenticated');
        }

        const { documents } = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [Query.equal('userId', user.$id)]
        );

        if (documents.length === 0) {
            return null;
        }

        return documents[0];

    } catch (error) {
        console.error("Failed to get existing user:", error);
        throw error;
    }
};