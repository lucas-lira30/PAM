import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
     apiKey: "AIzaSyCN-MiTK4-6KMr7G7lfg7vaLTe8wOrAouo",
  authDomain: "meu-primeiro-firebase-c759b.firebaseapp.com",
  projectId: "meu-primeiro-firebase-c759b",
  storageBucket: "meu-primeiro-firebase-c759b.firebasestorage.app",
  messagingSenderId: "412704113804",
  appId: "1:412704113804:web:dd49c07f8e94d3dd2227a9"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() { 
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const nomesCollection = firebase.firestore().collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data : any = [];
            snapshot.forEach ((doc : any) => {
                data.push({ id: doc.id, ...doc.data() });
            });

            setNomes(data);
        };

        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Lista de Nomes:</Text>
            <FlatList
                data={nomes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.Nome}  {item.Sobrenome}</Text>
                    </View>
                )}
            />
        </View>
    );
}