import { Client, Account } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    plateform: 'com.ghost.aora',
    projectId: "663f5f8a001889720134",
    databaseId: "663f60ff001c997b6f02",
    userCollectionId: "663f611e000a32143f17",
    videoCollectionId: "663f6144003daaac85db",
    storageId: "663f761300077c637b34"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.plateform) // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {

    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}